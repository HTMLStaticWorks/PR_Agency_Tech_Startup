/**
 * PRISM PR - CORE JAVASCRIPT
 * Includes: Dark Mode, RTL Toggle, Smooth Scroll, Form Validation, Navbar Scroll Effect
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. PRELOADER
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 600);
        });
    }

    // 2. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar-prism');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar ? navbar.classList.add('scrolled') : null;
        } else {
            navbar ? navbar.classList.remove('scrolled') : null;
        }
    });

    // 3. DARK MODE TOGGLE
    const themeToggle = document.querySelector('#theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-bs-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-bs-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 4. RTL TOGGLE (For Demonstration/Market-Ready)
    const rtlToggle = document.querySelector('#rtl-toggle');
    if (rtlToggle) {
        rtlToggle.addEventListener('click', () => {
            let dir = document.documentElement.getAttribute('dir');
            let newDir = dir === 'rtl' ? 'ltr' : 'rtl';
            document.documentElement.setAttribute('dir', newDir);
        });
    }

    // 5. FORM VALIDATION
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // 6. SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return; // Ignore single #
            
            try {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Auto-close offcanvas if open (Bootstrap 5)
                    const offcanvasElement = document.querySelector('.offcanvas.show');
                    if (offcanvasElement) {
                        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                        if (bsOffcanvas) {
                            bsOffcanvas.hide();
                        } else {
                            // Fallback if instance not found
                            const closeBtn = offcanvasElement.querySelector('.btn-close');
                            if (closeBtn) closeBtn.click();
                        }
                    }
                }
            } catch (err) {
                // Silently handle invalid selectors
                console.warn('Invalid anchor link:', href);
            }
        });
    });

    // 7. ACTIVE LINK HIGHLIGHT
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // 8. ACCESSIBILITY: Keyboard Nav for Hamburger
    const navbarTogglers = document.querySelectorAll('.navbar-toggler');
    navbarTogglers.forEach(toggler => {
        toggler.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggler.click();
            }
        });
    });
    // 9. READING PROGRESS BAR (For Blog Details)
    const progressBar = document.querySelector('#reading-progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });
    }
});
