// Offline Error Handler for Authentication & Checkout
// Prevents users from trying to login/signup/checkout without internet
// Shows helpful error messages instead

(function() {
    'use strict';

    // Offline status tracker
    let isOffline = !navigator.onLine;

    // Create offline notification banner
    function createOfflineNotification() {
        const banner = document.createElement('div');
        banner.id = 'offline-banner';
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #ff6b6b;
            color: white;
            padding: 12px 20px;
            text-align: center;
            font-weight: 600;
            z-index: 9999;
            display: none;
            animation: slideDown 0.3s ease;
        `;
        banner.innerHTML = '🔴 No Internet Connection - You can browse but cannot login, signup, or purchase';
        document.body.appendChild(banner);
        
        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
            @keyframes slideUp {
                from { transform: translateY(0); }
                to { transform: translateY(-100%); }
            }
            #offline-banner.hiding {
                animation: slideUp 0.3s ease;
            }
        `;
        document.head.appendChild(style);
        return banner;
    }

    const offlineBanner = createOfflineNotification();

    // Update offline status
    function updateOfflineStatus() {
        isOffline = !navigator.onLine;
        if (isOffline) {
            offlineBanner.style.display = 'block';
            offlineBanner.classList.remove('hiding');
            disableAuthAndCheckout();
        } else {
            offlineBanner.classList.add('hiding');
            setTimeout(() => {
                offlineBanner.style.display = 'none';
            }, 300);
            enableAuthAndCheckout();
        }
    }

    // Disable login, signup, checkout buttons
    function disableAuthAndCheckout() {
        // Disable login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            const inputs = loginForm.querySelectorAll('input');
            const buttons = loginForm.querySelectorAll('button');
            inputs.forEach(input => input.disabled = true);
            buttons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
                btn.title = 'Internet required to login';
            });
        }

        // Disable register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            const inputs = registerForm.querySelectorAll('input');
            const buttons = registerForm.querySelectorAll('button');
            inputs.forEach(input => input.disabled = true);
            buttons.forEach(btn => {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
                btn.title = 'Internet required to register';
            });
        }

        // Disable checkout button (safe text match)
        const checkoutBtn = document.querySelector('[onclick*="checkout"]') ||
                   Array.from(document.querySelectorAll('button')).find(btn => btn.textContent && btn.textContent.trim().toLowerCase().includes('checkout'));
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.6';
            checkoutBtn.style.cursor = 'not-allowed';
            checkoutBtn.title = 'Internet required to purchase';
        }

        // Disable add to cart for checkout
        const proceedBtn = document.querySelector('a[href*="checkout"]');
        if (proceedBtn) {
            proceedBtn.style.pointerEvents = 'none';
            proceedBtn.style.opacity = '0.6';
            proceedBtn.title = 'Internet required to purchase';
        }

        // Disable login buttons in navbar
        const loginBtns = document.querySelectorAll('.login-btn, button[onclick*="login"]');
        loginBtns.forEach(btn => {
            if (!btn.classList.contains('logout-btn')) {
                btn.disabled = true;
                btn.style.opacity = '0.6';
                btn.style.cursor = 'not-allowed';
                btn.title = 'Internet required to login';
            }
        });
    }

    // Enable auth and checkout buttons
    function enableAuthAndCheckout() {
        // Enable login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            const inputs = loginForm.querySelectorAll('input');
            const buttons = loginForm.querySelectorAll('button');
            inputs.forEach(input => input.disabled = false);
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                btn.title = '';
            });
        }

        // Enable register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            const inputs = registerForm.querySelectorAll('input');
            const buttons = registerForm.querySelectorAll('button');
            inputs.forEach(input => input.disabled = false);
            buttons.forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                btn.title = '';
            });
        }

        // Enable checkout button (safe text match)
        const checkoutBtn = document.querySelector('[onclick*="checkout"]') ||
                   Array.from(document.querySelectorAll('button')).find(btn => btn.textContent && btn.textContent.trim().toLowerCase().includes('checkout'));
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '1';
            checkoutBtn.style.cursor = 'pointer';
            checkoutBtn.title = '';
        }

        // Enable proceed button
        const proceedBtn = document.querySelector('a[href*="checkout"]');
        if (proceedBtn) {
            proceedBtn.style.pointerEvents = 'auto';
            proceedBtn.style.opacity = '1';
            proceedBtn.title = '';
        }

        // Enable login buttons
        const loginBtns = document.querySelectorAll('.login-btn, button[onclick*="login"]');
        loginBtns.forEach(btn => {
            if (!btn.classList.contains('logout-btn')) {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
                btn.title = '';
            }
        });
    }

    // Add event listeners for online/offline
    window.addEventListener('online', updateOfflineStatus);
    window.addEventListener('offline', updateOfflineStatus);

    // Check initial status
    document.addEventListener('DOMContentLoaded', updateOfflineStatus);

    // Also check when page becomes visible (phone returning from sleep)
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            updateOfflineStatus();
        }
    });

    // Prevent form submission when offline
    document.addEventListener('submit', (e) => {
        // Check if form is login, register, or checkout
        const form = e.target;
        const isAuthForm = form.id === 'loginForm' || form.id === 'registerForm' || form.id === 'checkoutForm';
        
        if (isOffline && isAuthForm) {
            e.preventDefault();
            alert('⚠️ No Internet Connection\n\nYou cannot login, register, or make purchases without an internet connection.\n\nPlease connect to WiFi or mobile data and try again.');
            return false;
        }
    }, true);

    // Prevent link clicks for checkout when offline
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a[href*="checkout"], a[href*="login"], a[href*="register"]');
        if (isOffline && target) {
            // Check if it's a checkout/login/register link
            const href = target.getAttribute('href');
            if (href && (href.includes('checkout') || href.includes('login') || href.includes('register'))) {
                e.preventDefault();
                alert('⚠️ No Internet Connection\n\nYou cannot access this page without an internet connection.\n\nPlease connect to WiFi or mobile data and try again.');
                return false;
            }
        }
    }, true);

    // Export functions for external use
    window.offlineHandler = {
        isOffline: () => isOffline,
        checkConnection: () => {
            if (isOffline) {
                alert('⚠️ No Internet Connection\n\nThis action requires an internet connection.');
                return false;
            }
            return true;
        }
    };

})();
