(function () {
  const configuredApiBase = localStorage.getItem("chickenoyApiBase") || "";
  const needsBackendOrigin = window.location.protocol === "file:" || window.location.port === "63342";
  const apiBase = configuredApiBase || (needsBackendOrigin ? "http://localhost:5000" : "");

  function apiUrl(path) {
    if (/^https?:\/\//i.test(path)) return path;
    return `${apiBase}${path.startsWith("/") ? path : `/${path}`}`;
  }

  async function apiRequest(path, options = {}) {
    const response = await fetch(apiUrl(path), options);
    const contentType = response.headers.get("content-type") || "";
    const text = await response.text();
    let data = {};

    if (text && contentType.includes("application/json")) {
      data = JSON.parse(text);
    } else if (text) {
      throw new Error(`Server returned ${response.status} ${response.statusText || "non-JSON response"}. Make sure the backend is running on ${apiBase || window.location.origin}.`);
    }

    return { response, data };
  }

  window.ChickenoyApi = {
    baseUrl: apiBase,
    url: apiUrl,
    request: apiRequest
  };

  const navLinks = document.getElementById("navLinks");
  if (navLinks && !navLinks.querySelector('a[href="contact.html"]')) {
    const contactLink = document.createElement("a");
    contactLink.href = "contact.html";
    contactLink.textContent = "Contact";
    if (window.location.pathname.endsWith("contact.html")) {
      contactLink.className = "active";
    }
    navLinks.appendChild(contactLink);
  }

  if (navLinks && !navLinks.querySelector('a[href="admin.html"]')) {
    const adminLink = document.createElement("a");
    adminLink.href = "admin.html";
    adminLink.textContent = "Admin";
    if (window.location.pathname.endsWith("admin.html")) {
      adminLink.className = "active";
    }
    navLinks.appendChild(adminLink);
  }

  const footer = document.querySelector("footer");
  if (footer) {
    footer.classList.add("site-footer");
    footer.innerHTML = `
      <div class="footer-grid">
        <div>
          <h2>Chickenoy Fried Chicken</h2>
          <p>Fresh crispy fried chicken, made hot for pickup and delivery.</p>
          <p>Order flow: Browse, Select, Add to Cart, Pay, Process, Ship, Receive, Review.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Phone: <a href="tel:09481409798">09481409798</a></p>
          <p>Email: orders@chickenoy.local</p>
          <p>Service Area: Local Chickenoy delivery area</p>
        </div>
        <div>
          <h3>Store Hours</h3>
          <p>Monday to Sunday</p>
          <p>9:00 AM - 9:00 PM</p>
          <p>Cash on Delivery and GCash accepted</p>
        </div>
        <div>
          <h3>Social</h3>
          <p><span class="fb-mark">f</span> Facebook: Chickenoy Fried Chicken</p>
          <p><a href="admin.html">Admin Portal</a></p>
        </div>
      </div>
      <div class="footer-bottom">&copy; 2026 Chickenoy. All rights reserved.</div>
    `;
  }

  if (!window.location.pathname.endsWith("admin.html")) {
    const widget = document.createElement("div");
    widget.className = "message-widget";
    widget.innerHTML = `
      <button class="message-toggle" type="button" aria-expanded="false" aria-controls="messagePanel">
        <span class="message-dot"></span>
        Message
      </button>
      <section class="message-panel" id="messagePanel" aria-label="Message Chickenoy">
        <div class="message-panel-head">
          <strong>Message Chickenoy</strong>
          <button type="button" class="message-close" aria-label="Close message panel">x</button>
        </div>
        <p>Need help with an order, delivery, payment, or reservation? Send a quick message and the business will see it in the admin dashboard.</p>
        <div class="message-details">
          <a href="tel:09481409798">Call 09481409798</a>
          <span>Open daily, 9:00 AM - 9:00 PM</span>
          <span>Facebook: Chickenoy Fried Chicken</span>
        </div>
        <form class="message-form" id="quickMessageForm">
          <input name="name" placeholder="Your name" required>
          <input name="phone" placeholder="Phone number" required>
          <textarea name="message" placeholder="Write your message" rows="3" required></textarea>
          <button type="submit">Send Message</button>
          <a href="contact.html">Open full contact page</a>
        </form>
        <div class="message-status" id="quickMessageStatus"></div>
      </section>
    `;
    document.body.appendChild(widget);

    const toggle = widget.querySelector(".message-toggle");
    const panel = widget.querySelector(".message-panel");
    const close = widget.querySelector(".message-close");
    const form = widget.querySelector("#quickMessageForm");
    const status = widget.querySelector("#quickMessageStatus");

    function setOpen(isOpen) {
      panel.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    }

    toggle.addEventListener("click", () => setOpen(!panel.classList.contains("open")));
    close.addEventListener("click", () => setOpen(false));

    form.addEventListener("submit", async event => {
      event.preventDefault();
      const button = form.querySelector("button");
      button.disabled = true;
      button.textContent = "Sending...";
      status.textContent = "";

      try {
        const { response, data } = await apiRequest("/api/contact", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            name: form.name.value.trim(),
            phone: form.phone.value.trim(),
            message: form.message.value.trim(),
            subject: "Quick Website Message",
            source: "floating-widget"
          })
        });
        if (!response.ok) throw new Error(data.error || "Message failed");
        form.reset();
        status.textContent = data.message || "Message sent.";
      } catch (error) {
        status.textContent = error.message;
      } finally {
        button.disabled = false;
        button.textContent = "Send Message";
      }
    });
  }
})();
