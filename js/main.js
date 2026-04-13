// TechPulse PR - Main JavaScript Support

// Global Menu Controller
window.toggleMenu = function (show) {
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (nav && overlay) {
        if (show) {
            nav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
};

// Initialize functionality
(function () {
    const init = () => {
        // 1. Mobile Menu Bindings
        const hamburger = document.getElementById('mobile-hamburger');
        const closeBtn = document.getElementById('mobile-close');
        const overlay = document.getElementById('mobile-nav-overlay');

        if (hamburger) {
            hamburger.onclick = (e) => {
                e.preventDefault();
                window.toggleMenu(true);
            };
        }
        if (closeBtn) closeBtn.onclick = () => window.toggleMenu(false);
        if (overlay) overlay.onclick = () => window.toggleMenu(false);

        // Close on link click
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.onclick = () => window.toggleMenu(false);
        });

        // 2. Theme Management
        const themeBtns = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);

        if (themeBtns.length) {
            themeBtns.forEach((themeBtn) => {
                themeBtn.onclick = () => {
                    const current = document.body.getAttribute('data-theme');
                    const next = current === 'light' ? 'dark' : 'light';
                    document.body.setAttribute('data-theme', next);
                    localStorage.setItem('theme', next);
                };
            });
        }

        // 3. RTL Management
        const setupRTL = (id) => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.onclick = () => {
                    const isRTL = document.documentElement.dir === 'rtl';
                    const targetDir = isRTL ? 'ltr' : 'rtl';
                    document.documentElement.dir = targetDir;

                    // Sync all RTL buttons text
                    document.querySelectorAll('#rtl-toggle, #mobile-rtl-toggle').forEach(b => {
                        b.textContent = isRTL ? 'RTL' : 'LTR';
                    });
                };
            }
        };
        setupRTL('rtl-toggle');
        setupRTL('mobile-rtl-toggle');

        // 4. Scroll Reveal
        const reveals = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const anim = entry.target.dataset.animation || 'fade-in';
                        entry.target.classList.add(anim);
                        entry.target.classList.remove('reveal');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            reveals.forEach(r => observer.observe(r));
        } else {
            reveals.forEach(r => r.classList.add('fade-in'));
        }

        // 5. Dashboard Support
        const dashMenu = document.getElementById('sidebar-menu-btn');
        const dashClose = document.getElementById('sidebar-close');
        const sidebar = document.querySelector('.sidebar');
        const dashOverlay = document.querySelector('.sidebar-overlay');
        if (dashMenu && sidebar) {
            dashMenu.onclick = () => {
                sidebar.classList.toggle('active');
                dashOverlay?.classList.toggle('active');
            };
        }
        if (dashClose) dashClose.onclick = () => {
            sidebar?.classList.remove('active');
            dashOverlay?.classList.remove('active');
        };
        if (dashOverlay) dashOverlay.onclick = () => {
            sidebar?.classList.remove('active');
            dashOverlay.classList.remove('active');
        };

        // 6. Back to Top
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });

            backToTop.onclick = () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            };
        }

        // 7. Lucide
        if (window.lucide) lucide.createIcons();
    };

    // Run init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
