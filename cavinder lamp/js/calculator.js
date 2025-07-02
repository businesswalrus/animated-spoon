// Field Service Calculator - Form JavaScript

(function() {
    'use strict';
    
    // DOM Elements
    let elements = {};
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', init);
    
    function init() {
        cacheElements();
        attachEventListeners();
    }
    
    // Cache DOM elements for performance
    function cacheElements() {
        elements = {
            form: document.getElementById('calculatorForm'),
            resetBtn: document.getElementById('resetBtn'),
            serviceType: document.getElementById('service_type')
        };
    }
    
    // Attach event listeners
    function attachEventListeners() {
        // Reset button
        if (elements.resetBtn) {
            elements.resetBtn.addEventListener('click', handleReset);
        }
        
        // Prevent form submission on Enter in number fields
        const materialCost = document.getElementById('material_cost');
        if (materialCost) {
            materialCost.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const laborCategory = document.getElementById('labor_category');
                    if (laborCategory) laborCategory.focus();
                }
            });
        }
        
        // Mobile-specific: Hide keyboard on form submission
        if (elements.form) {
            elements.form.addEventListener('submit', function() {
                document.activeElement.blur();
            });
        }
    }
    
    // Handle form reset
    function handleReset(e) {
        e.preventDefault();
        
        // Reset form
        if (elements.form) {
            elements.form.reset();
        }
        
        // Focus first field
        if (elements.serviceType) {
            elements.serviceType.focus();
        }
    }
    
    // Mobile optimizations
    if ('ontouchstart' in window) {
        // Add touch feedback
        document.querySelectorAll('button, .btn').forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            button.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
        
        // Improve select dropdowns on iOS
        document.querySelectorAll('select').forEach(select => {
            select.style.cursor = 'pointer';
        });
        
        // Add swipe gestures for navigation
        addSwipeGestures();
    }
    
    // Swipe gesture support
    function addSwipeGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        const SWIPE_THRESHOLD = 50;
        
        // Add to calculator card for swipe-to-reset
        const calculatorCard = document.querySelector('.calculator-card');
        if (calculatorCard) {
            calculatorCard.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            calculatorCard.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }
        
        function handleSwipe() {
            const swipeDistance = touchEndX - touchStartX;
            
            // Swipe right to reset form
            if (swipeDistance > SWIPE_THRESHOLD) {
                // Show custom confirmation instead of browser dialog
                if (showSwipeConfirmation()) {
                    if (elements.resetBtn) elements.resetBtn.click();
                }
            }
        }
        
        function showSwipeConfirmation() {
            // Create custom confirmation UI
            const confirmation = document.createElement('div');
            confirmation.className = 'swipe-confirmation';
            confirmation.innerHTML = `
                <p>Reset the form?</p>
                <button class="btn-primary btn-small" onclick="this.parentElement.remove(); document.getElementById('resetBtn').click();">Yes</button>
                <button class="btn-secondary btn-small" onclick="this.parentElement.remove();">No</button>
            `;
            confirmation.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.2); z-index: 1000; text-align: center;';
            
            document.body.appendChild(confirmation);
            
            // Auto-dismiss after 3 seconds
            setTimeout(() => {
                if (confirmation.parentElement) {
                    confirmation.remove();
                }
            }, 3000);
            
            return false; // Don't reset immediately
        }
        
        // Visual indicator for swipe
        const swipeHint = document.createElement('div');
        swipeHint.innerHTML = '<small style="color: #777;">Swipe right to reset form</small>';
        swipeHint.style.textAlign = 'center';
        swipeHint.style.marginTop = '10px';
        
        const buttonGroup = document.querySelector('.button-group');
        if (buttonGroup) {
            buttonGroup.appendChild(swipeHint);
        }
    }
    
    // Offline detection
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    function updateOnlineStatus() {
        const isOnline = navigator.onLine;
        const message = document.createElement('div');
        message.className = isOnline ? 'alert alert-success' : 'alert alert-error';
        message.textContent = isOnline ? 
            'Connection restored' : 
            'No internet connection - calculations will be saved when connection returns';
        
        // Insert message if container exists
        const container = document.querySelector('.calculator-card');
        if (container && !isOnline) {
            container.insertBefore(message, container.firstChild);
            
            // Auto-remove success message
            if (isOnline) {
                setTimeout(() => message.remove(), 3000);
            }
        }
    }
    
})();