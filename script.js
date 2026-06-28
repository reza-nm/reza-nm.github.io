// script.js
(function() {
    // ===== Sticky header =====
    const header = document.getElementById('header');
    const hero = document.getElementById('hero');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-forest/90', 'backdrop-blur-md', 'border-b', 'border-hairlineDark');
        } else {
            header.classList.remove('bg-forest/90', 'backdrop-blur-md', 'border-b', 'border-hairlineDark');
        }
    });

    // ===== Mobile menu toggle =====
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('max-h-0');
        mobileMenu.classList.toggle('max-h-96'); // open height
        const icon = hamburger.querySelector('i');
        if (icon.getAttribute('data-lucide') === 'menu') {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons({ icons: { menu: true, x: true } });
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('max-h-0');
            mobileMenu.classList.remove('max-h-96');
            hamburger.querySelector('i').setAttribute('data-lucide', 'menu');
            lucide.createIcons({ icons: { menu: true } });
        });
    });

    // ===== Smooth scroll for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Update URL hash without jump
                history.pushState(null, null, href);
            }
        });
    });

    // ===== Scroll reveal =====
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== Counter animation =====
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const suffix = counter.nextSibling?.textContent?.trim() || '';
                const isPercentage = suffix.startsWith('%');
                const duration = 1500;
                const start = performance.now();

                function updateCounter(timestamp) {
                    const elapsed = timestamp - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    const current = Math.round(eased * target);
                    counter.textContent = current;
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }

                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ===== Process timeline progress =====
    const processSection = document.getElementById('process');
    const fillLine = document.getElementById('process-line-fill');
    const bgLine = document.getElementById('process-line-bg');

    function updateProcessLine() {
        if (!processSection || !fillLine) return;
        const rect = processSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Start filling when top of section enters viewport, finish when bottom leaves
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const totalScrollable = sectionBottom - sectionTop - windowHeight;
        let progress = 0;
        if (sectionTop <= 0 && sectionBottom >= windowHeight) {
            // Fully inside viewport
            progress = (-sectionTop) / (sectionBottom - windowHeight);
        } else if (sectionTop < windowHeight && sectionBottom > windowHeight) {
            // Partially inside
            progress = (windowHeight - sectionTop) / (sectionBottom - sectionTop);
        } else if (sectionTop >= windowHeight) {
            progress = 0;
        } else if (sectionBottom <= windowHeight) {
            progress = 1;
        }
        progress = Math.max(0, Math.min(1, progress));
        const maxHeight = bgLine.offsetHeight || 600; // fallback
        fillLine.style.height = (progress * maxHeight) + 'px';
    }

    window.addEventListener('scroll', () => {
        updateProcessLine();
    });
    window.addEventListener('resize', updateProcessLine);
    // Initial call after layout
    setTimeout(updateProcessLine, 200);

    // ===== Hero blob fade on scroll =====
    const blobContainer = document.getElementById('blob-container');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = hero.offsetHeight;
        let opacity = 1 - (scrollY / (heroHeight * 0.8));
        opacity = Math.max(0, Math.min(1, opacity));
        if (blobContainer) {
            blobContainer.style.opacity = opacity;
        }
    });

    // ===== FAQ accordion (single open) =====
    document.querySelectorAll('.faq-item').forEach(item => {
        const button = item.querySelector('.faq-question');
        button.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                openItem.classList.remove('open');
            });
            // Open clicked if it wasn't open
            if (!isOpen) {
                item.classList.add('open');
            }
            // Refresh icons
            lucide.createIcons();
        });
    });

    // ===== Respect reduced motion =====
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
        document.body.classList.add('reduce-motion');
    }
    motionQuery.addEventListener('change', (e) => {
        if (e.matches) document.body.classList.add('reduce-motion');
        else document.body.classList.remove('reduce-motion');
    });

    // ===== Re-init lucide after dynamic changes =====
    setTimeout(() => lucide.createIcons(), 100);
})();