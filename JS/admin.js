const adminLogin = document.getElementById("adminLogin");
const adminApp = document.getElementById("adminApp");
const adminMessage = document.getElementById("adminMessage");

function getAdminToken() {
    return localStorage.getItem("adminToken");
}

async function adminRequest(url, options = {}) {
    const { response, data } = await window.ChickenoyApi.request(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
            "Authorization": `Bearer ${getAdminToken()}`
        }
    });
    if (!response.ok) throw new Error(data.error || "Admin request failed");
    return data;
}

function showMessage(message, isError = false) {
    adminMessage.textContent = message;
    adminMessage.className = isError ? "admin-message error" : "admin-message";
}

async function loginAdmin(event) {
    event.preventDefault();
    const form = event.target;

    try {
        const { response, data } = await window.ChickenoyApi.request("/api/admin/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: form.username.value.trim(),
                password: form.password.value
            })
        });
        if (!response.ok) throw new Error(data.error || "Login failed");

        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminUser", data.username);
        await loadAdmin();
    } catch (error) {
        showMessage(error.message, true);
    }
}

async function loadAdmin() {
    if (!getAdminToken()) {
        adminLogin.style.display = "block";
        adminApp.style.display = "none";
        return;
    }

    try {
        const summary = await adminRequest("/api/admin/summary");
        adminLogin.style.display = "none";
        adminApp.style.display = "block";
        renderStats(summary.stats);
        renderMenu(summary.menu);
        renderOrders(summary.orders);
        renderMessages(summary.messages || []);
        renderUsers(summary.users);
        showMessage("Admin dashboard loaded.");
    } catch (error) {
        localStorage.removeItem("adminToken");
        adminLogin.style.display = "block";
        adminApp.style.display = "none";
        showMessage(error.message, true);
    }
}

function renderStats(stats) {
    const bellCount = document.getElementById("adminBellCount");
    const unread = stats.unreadMessages || 0;
    if (bellCount) {
        bellCount.textContent = unread;
        bellCount.classList.toggle("active", unread > 0);
    }

    document.getElementById("adminStats").innerHTML = `
        <div><strong>${stats.orders}</strong><span>Orders</span></div>
        <div><strong>${stats.users}</strong><span>Customers</span></div>
        <div><strong>${formatPrice(stats.revenue)}</strong><span>Revenue</span></div>
        <div><strong>${stats.reviews}</strong><span>Reviews</span></div>
        <div><strong>${unread}</strong><span>Unread Messages</span></div>
    `;
}

function renderMenu(menu) {
    document.getElementById("adminMenu").innerHTML = menu.map(item => `
        <article class="admin-card">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>${item.category} | ${formatPrice(item.price)} | Sold ${item.sold || 0}</p>
                <label>Stock</label>
                <input id="stock-${item._id}" type="number" min="0" value="${item.stock || 0}">
                <label class="check-row">
                    <input id="available-${item._id}" type="checkbox" ${item.isAvailable !== false ? "checked" : ""}>
                    Available
                </label>
                <button onclick="updateMenuItem('${item._id}')">Save Restock</button>
            </div>
        </article>
    `).join("");
}

function renderOrders(orders) {
    document.getElementById("adminOrders").innerHTML = orders.map(order => `
        <article class="admin-order">
            <div class="admin-order-head">
                <strong>#${order._id}</strong>
                <span>${new Date(order.createdAt).toLocaleString()}</span>
            </div>
            <p>${order.name} | ${order.phone}</p>
            <p>${order.address}</p>
            <p>${(order.items || []).map(item => `${item.name} x${item.quantity}`).join(", ")}</p>
            <p>Total: ${formatPrice(order.totalPrice)} | ${order.paymentMethod} | ${order.paymentStatus}</p>
            ${order.review && order.review.rating ? `<p>Review: ${order.review.rating}/5 - ${order.review.comment || ""}</p>` : ""}
            <div class="admin-actions">
                <select id="status-${order._id}">
                    ${["Processing", "Shipped", "Received", "Reviewed"].map(status => `<option value="${status}" ${order.orderStatus === status ? "selected" : ""}>${status}</option>`).join("")}
                </select>
                <select id="payment-${order._id}">
                    ${["Pending", "Paid", "Failed"].map(status => `<option value="${status}" ${order.paymentStatus === status ? "selected" : ""}>${status}</option>`).join("")}
                </select>
                <button onclick="updateOrder('${order._id}')">Update</button>
            </div>
        </article>
    `).join("");
}

function renderUsers(users) {
    document.getElementById("adminUsers").innerHTML = users.map(user => `
        <article class="admin-user">
            <strong>${user.name}</strong>
            <span>${user.email}</span>
            <span>${user.phone || "No phone"}</span>
            <span>Joined ${new Date(user.createdAt).toLocaleDateString()}</span>
        </article>
    `).join("");
}

function renderMessages(messages) {
    const container = document.getElementById("adminMessages");
    if (!container) return;

    if (!messages.length) {
        container.innerHTML = `<article class="admin-message-card"><strong>No messages yet</strong><p>Customer contact messages will appear here.</p></article>`;
        return;
    }

    container.innerHTML = messages.map(message => `
        <article class="admin-message-card ${message.isRead ? "" : "unread"}">
            <strong>${message.subject || "Customer Message"}</strong>
            <p>${message.message}</p>
            <span>${message.name} | ${message.phone}${message.email ? " | " + message.email : ""}</span>
            <span>${new Date(message.createdAt).toLocaleString()}</span>
            <span>Source: ${message.source || "website"}</span>
            ${message.isRead ? "<span>Read</span>" : `<button onclick="markMessageRead('${message._id}')">Mark Read</button>`}
        </article>
    `).join("");
}

async function updateMenuItem(id) {
    try {
        await adminRequest(`/api/admin/menu/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                stock: document.getElementById(`stock-${id}`).value,
                isAvailable: document.getElementById(`available-${id}`).checked
            })
        });
        await loadAdmin();
        showMessage("Menu item updated.");
    } catch (error) {
        showMessage(error.message, true);
    }
}

async function updateOrder(id) {
    try {
        await adminRequest(`/api/admin/orders/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                orderStatus: document.getElementById(`status-${id}`).value,
                paymentStatus: document.getElementById(`payment-${id}`).value
            })
        });
        await loadAdmin();
        showMessage("Order updated.");
    } catch (error) {
        showMessage(error.message, true);
    }
}

async function markMessageRead(id) {
    try {
        await adminRequest(`/api/admin/messages/${id}/read`, {method: "PATCH"});
        await loadAdmin();
        showMessage("Message marked as read.");
    } catch (error) {
        showMessage(error.message, true);
    }
}

function adminLogout() {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    loadAdmin();
}

function formatPrice(price) {
    return `\u20b1${Number(price || 0).toFixed(2)}`;
}

adminLogin.addEventListener("submit", loginAdmin);
window.addEventListener("load", loadAdmin);
