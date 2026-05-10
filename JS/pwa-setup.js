// Service Worker Registration and PWA Setup
// This script should be included in all HTML pages

(function() {
  'use strict';

  // Check if service workers are supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('✅ Service Worker registered successfully:', registration);
          
          // Check for updates periodically
          setInterval(() => {
            registration.update();
          }, 60000); // Check every minute
        })
        .catch(error => {
          console.log('❌ Service Worker registration failed:', error);
        });
    });

    // Handle updates
    navigator.serviceWorker.addEventListener('controller', () => {
      console.log('Service Worker controller changed');
    });
  }

  // Detect if PWA is installed
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', e => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event for later use
    deferredPrompt = e;
    console.log('Install prompt available');
  });

  // Provide a way to trigger install prompt if needed
  window.installApp = function() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
      });
    }
  };

  // Detect app installed status
  window.addEventListener('appinstalled', () => {
    console.log('✅ PWA was installed successfully!');
    deferredPrompt = null;
  });

  // Handle network status
  function updateNetworkStatus() {
    const status = navigator.onLine ? 'online' : 'offline';
    document.documentElement.setAttribute('data-network', status);
    console.log('Network status:', status);
  }

  window.addEventListener('online', updateNetworkStatus);
  window.addEventListener('offline', updateNetworkStatus);
  updateNetworkStatus();

})();
