// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsDiv = document.getElementById("cartItems");
const emptyCartDiv = document.getElementById("emptyCart");
const cartContentDiv = document.getElementById("cartContent");

// Load cart on page load
function loadCart() {
    if (cart.length === 0) {
        emptyCartDiv.style.display = "block";
        cartContentDiv.style.display = "none";
        return;
    }

    emptyCartDiv.style.display = "none";
    cartContentDiv.style.display = "grid";

    cartItemsDiv.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemCount += item.quantity;

        const cartItemHTML = `
            <div class="cart-item">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">₱${item.price.toFixed(2)} each</div>
                </div>
                <div class="item-quantity">
                    <button onclick="updateQuantity(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="item-total">₱${itemTotal.toFixed(2)}</div>
                <button class="item-remove" onclick="removeItem(${index})">Remove</button>
            </div>
        `;

        cartItemsDiv.innerHTML += cartItemHTML;
    });

    // Update summary
    document.getElementById("subtotal").textContent = total.toFixed(2);
    document.getElementById("totalPrice").textContent = total.toFixed(2);
    document.getElementById("itemCount").textContent = itemCount;
}

// Update quantity
function updateQuantity(index, change) {
    if (cart[index].quantity + change < 1) {
        removeItem(index);
    } else {
        cart[index].quantity += change;
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }
}

// Remove item from cart
function removeItem(index) {
    const itemName = cart[index].name;
    if (confirm(`Remove "${itemName}" from cart?`)) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }
}

// Proceed to checkout
function checkout() {
    const token = localStorage.getItem("token");
    
    if (!token) {
        alert("Please login first to proceed with checkout.");
        window.location = "login.html";
        return;
    }

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    window.location = "checkout.html";
}

// Add to cart from menu (legacy support)
function addToCart(item) {
    const existingItem = cart.find(p => p._id === item._id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        item.quantity = 1;
        cart.push(item);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("✅ Added to cart!");
}

// Load cart when page loads
window.addEventListener("load", loadCart);