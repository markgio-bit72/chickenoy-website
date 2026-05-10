const menuContainer = document.getElementById("menuContainer");

const fallbackMenu = [
  {
    _id: "chicken-noy-party-platter",
    name: "Chicken Noy Party Platter",
    description: "Crispy chicken bites with golden fries for group sharing.",
    price: 1000,
    image: "/images/menu-item-1.png",
    category: "Party",
    stock: 25,
    isAvailable: true
  },
  {
    _id: "chicken-fries-combo",
    name: "Chicken & Fries Combo",
    description: "Golden crispy chicken bites with perfectly cooked fries.",
    price: 320,
    image: "/images/menu-item-2.png",
    category: "Combo",
    stock: 50,
    isAvailable: true
  },
  {
    _id: "ultimate-chicken-feast",
    name: "Ultimate Chicken Feast",
    description: "Large crispy fried chicken platter made for the whole family.",
    price: 1000,
    image: "/images/menu-item-3.png",
    category: "Feast",
    stock: 25,
    isAvailable: true
  },
  {
    _id: "classic-fried-chicken-leg",
    name: "Classic Fried Chicken Leg",
    description: "Tender chicken leg with a crispy outside and juicy inside.",
    price: 25,
    image: "/images/menu-item-4.png",
    category: "Chicken",
    stock: 100,
    isAvailable: true
  },
  {
    _id: "crispy-chicken-bundle",
    name: "Crispy Chicken Bundle",
    description: "Flavor-packed crispy chicken bites fried fresh for every order.",
    price: 500,
    image: "/images/menu-item-5.png",
    category: "Chicken",
    stock: 50,
    isAvailable: true
  }
];

function formatPrice(price) {
  return `\u20b1${Number(price || 0).toFixed(2)}`;
}

function getImageUrl(image) {
  if (!image) {
    return "https://via.placeholder.com/260x240?text=Fried+Chicken";
  }

  if (window.location.protocol === "file:" && image.startsWith("/")) {
    return `..${image}`;
  }

  return image;
}

function addToCart(item, button) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemId = item._id || item.name.toLowerCase().replace(/\s+/g, "-");
  const existingItem = cart.find(cartItem => cartItem._id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      _id: itemId,
      menuItemId: itemId,
      name: item.name,
      price: Number(item.price || 0),
      quantity: 1,
      category: item.category || "",
      image: item.image || ""
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  const originalText = button.textContent;
  button.textContent = "Added";
  button.disabled = true;
  button.classList.add("added");

  window.setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    button.classList.remove("added");
  }, 1200);
}

function buyNow(item, button) {
  addToCart(item, button);
  window.setTimeout(() => {
    window.location.href = "checkout.html";
  }, 350);
}

function createMenuCard(item, index) {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.style.animationDelay = `${index * 0.1}s`;

  const imageWrap = document.createElement("div");
  imageWrap.className = "menu-card-image";

  const image = document.createElement("img");
  image.src = getImageUrl(item.image);
  image.alt = item.name;
  image.onerror = () => {
    image.src = `https://via.placeholder.com/260x240?text=${encodeURIComponent(item.name)}`;
  };
  imageWrap.appendChild(image);

  if (item.category) {
    const badge = document.createElement("div");
    badge.className = "menu-card-badge";
    badge.textContent = item.category;
    imageWrap.appendChild(badge);
  }

  const content = document.createElement("div");
  content.className = "menu-card-content";

  const title = document.createElement("h3");
  title.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description || "";

  const footer = document.createElement("div");
  footer.className = "menu-card-footer";

  const price = document.createElement("div");
  price.className = "menu-card-price";
  price.textContent = formatPrice(item.price);

  const stock = document.createElement("div");
  stock.className = "menu-card-stock";
  const available = item.isAvailable !== false && Number(item.stock || 0) > 0;
  stock.textContent = available ? `${item.stock ?? "Fresh"} available` : "Sold out";

  const actions = document.createElement("div");
  actions.className = "menu-card-actions";

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.textContent = "Add to Cart";
  addButton.disabled = !available;
  addButton.addEventListener("click", () => addToCart(item, addButton));

  const buyButton = document.createElement("button");
  buyButton.type = "button";
  buyButton.textContent = "Pay";
  buyButton.className = "btn-buy-now";
  buyButton.disabled = !available;
  buyButton.addEventListener("click", () => buyNow(item, buyButton));

  actions.append(addButton, buyButton);
  footer.append(price, stock);
  content.append(title, description, footer, actions);
  card.append(imageWrap, content);

  return card;
}

function renderMenu(items) {
  const products = Array.isArray(items) && items.length > 0 ? items.slice(0, 5) : fallbackMenu;

  menuContainer.innerHTML = "";
  products.forEach((item, index) => {
    menuContainer.appendChild(createMenuCard(item, index));
  });
}

async function loadMenu() {
  menuContainer.innerHTML = '<div class="loading-spinner"></div>';

  if (window.location.protocol === "file:") {
    renderMenu(fallbackMenu);
    return;
  }

  try {
    const { response, data } = await window.ChickenoyApi.request("/api/menu", { headers: { Accept: "application/json" } });

    if (!response.ok) {
      throw new Error(`Menu API returned ${response.status}`);
    }

    renderMenu(data);
  } catch (error) {
    console.warn("Menu API unavailable. Showing built-in menu instead.", error);
    renderMenu(fallbackMenu);
  }
}

window.addEventListener("DOMContentLoaded", loadMenu);
