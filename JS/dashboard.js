async function apiRequest(url, options = {}) {
    const token = localStorage.getItem("token");
    const { response, data } = await window.ChickenoyApi.request(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
            ...(token ? {"Authorization": `Bearer ${token}`} : {})
        }
    });
    if (!response.ok) throw new Error(data.error || data.message || "Request failed");
    return data;
}

async function loadDashboard() {
    const token = localStorage.getItem("token");

    if (!token) {
        document.getElementById("ordersList").innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">Lock</div>
                <h3>Please Log In</h3>
                <p>You need to be logged in to view your orders.</p>
                <a href="login.html">Go to Login</a>
            </div>
        `;
        return;
    }

    try {
        const orders = await apiRequest("/api/orders");
        displayOrders(orders);
        updateStats(orders);
    } catch (error) {
        document.getElementById("ordersList").innerHTML = `
            <div class="empty-state">
                <h3>Error Loading Orders</h3>
                <p>${error.message}</p>
                <button onclick="window.location.reload()" class="btn-inline">Retry</button>
            </div>
        `;
    }
}

function displayOrders(orders) {
    const ordersList = document.getElementById("ordersList");

    if (!orders || orders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-state">
                <h3>No Orders Yet</h3>
                <p>You have not placed any orders yet.</p>
                <a href="menu.html">Browse Menu</a>
            </div>
        `;
        return;
    }

    ordersList.innerHTML = "";
    orders.forEach(order => ordersList.appendChild(createOrderElement(order)));
}

function createOrderElement(order) {
    const div = document.createElement("div");
    div.className = "order-item";
    const statusClass = getStatusClass(order.orderStatus);
    const paymentStatusClass = getPaymentStatusClass(order.paymentStatus);
    const createdDate = new Date(order.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });

    const itemsHTML = (order.items || []).map(item => {
        const itemTotal = (item.price || 0) * (item.quantity || 0);
        return `<li><span>${item.name} x ${item.quantity}</span><span>${formatPrice(itemTotal)}</span></li>`;
    }).join("");

    div.innerHTML = `
        <div class="order-header">
            <div class="order-id">Order #${order._id}</div>
            <div>
                <span class="order-status ${statusClass}">${order.orderStatus || "Processing"}</span>
                <span class="order-status ${paymentStatusClass}">${order.paymentStatus || "Pending"}</span>
            </div>
        </div>

        ${renderFlow(order.orderStatus)}

        <div class="order-details">
            ${detailRow("Customer", order.name)}
            ${detailRow("Phone", order.phone)}
            ${detailRow("Address", order.address)}
            ${detailRow("Payment", order.paymentMethod || "COD")}
            ${detailRow("Date", createdDate)}
        </div>

        <div class="order-items">
            <div class="order-items-title">Items Ordered</div>
            <ul class="order-item-list">${itemsHTML}</ul>
        </div>

        <div class="order-total">
            <span>Total Amount</span>
            <span>${formatPrice(order.totalPrice || 0)}</span>
        </div>

        <div class="order-actions">${renderActions(order)}</div>
    `;

    return div;
}

function detailRow(label, value) {
    return `
        <div class="order-detail-row">
            <span class="order-detail-label">${label}</span>
            <span class="order-detail-value">${value || "-"}</span>
        </div>
    `;
}

function renderFlow(status) {
    const steps = ["Browse", "Select", "Add to Cart", "Pay", "Process", "Ship", "Receive", "Review"];
    const statusMap = {
        Processing: 4,
        Shipped: 5,
        Received: 6,
        Reviewed: 7
    };
    const activeIndex = statusMap[status] ?? 4;

    return `
        <div class="status-flow">
            ${steps.map((step, index) => `<span class="${index <= activeIndex ? "active" : ""}">${step}</span>`).join("")}
        </div>
    `;
}

function renderActions(order) {
    if (order.orderStatus === "Shipped") {
        return `<button class="btn-inline" onclick="markReceived('${order._id}')">Receive Order</button>`;
    }

    if (order.orderStatus === "Received") {
        return `
            <form class="review-form" onsubmit="submitReview(event, '${order._id}')">
                <select name="rating" required>
                    <option value="">Rating</option>
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Good</option>
                    <option value="3">3 - Okay</option>
                    <option value="2">2 - Needs Improvement</option>
                    <option value="1">1 - Poor</option>
                </select>
                <input name="comment" placeholder="Write your review" required>
                <button class="btn-inline" type="submit">Submit Review</button>
            </form>
        `;
    }

    if (order.review && order.review.rating) {
        return `<p class="review-note">Your review: ${order.review.rating}/5 - ${order.review.comment || "Thank you for reviewing."}</p>`;
    }

    return `<p class="review-note">Your order is moving through the delivery process.</p>`;
}

async function markReceived(orderId) {
    try {
        await apiRequest(`/api/orders/${orderId}/receive`, {method: "PATCH"});
        await loadDashboard();
    } catch (error) {
        alert(error.message);
    }
}

async function submitReview(event, orderId) {
    event.preventDefault();
    const form = event.target;
    try {
        await apiRequest(`/api/orders/${orderId}/review`, {
            method: "PATCH",
            body: JSON.stringify({
                rating: form.rating.value,
                comment: form.comment.value
            })
        });
        await loadDashboard();
    } catch (error) {
        alert(error.message);
    }
}

function getStatusClass(status) {
    switch ((status || "").toLowerCase()) {
        case "reviewed":
        case "received":
            return "status-delivered";
        case "shipped":
            return "status-shipped";
        default:
            return "status-pending";
    }
}

function getPaymentStatusClass(status) {
    return (status || "").toLowerCase() === "paid" ? "status-confirmed" : "status-pending";
}

function updateStats(orders) {
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(order => !["Received", "Reviewed"].includes(order.orderStatus)).length;
    const totalSpent = orders.reduce((sum, order) => sum + (order.totalPrice || 0), 0);

    document.getElementById("totalOrders").textContent = totalOrders;
    document.getElementById("pendingOrders").textContent = pendingOrders;
    document.getElementById("totalSpent").textContent = formatPrice(totalSpent);
}

function formatPrice(price) {
    return `\u20b1${Number(price || 0).toFixed(2)}`;
}

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        window.location = "login.html";
    }
}

window.addEventListener("load", loadDashboard);
