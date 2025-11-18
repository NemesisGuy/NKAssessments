(() => {
    const body = document.body;
    const toggle = document.getElementById('themeToggle');
    const currentYear = document.getElementById('currentYear');
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.querySelector('.form-status');
    const navLinks = document.querySelectorAll('#primaryNav .nav-link');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('nk-theme');

    /**
     * Applies the requested color mode to the document and persists the choice.
     * @param {('light'|'dark')} mode - Desired theme selection.
     */
    const setTheme = (mode) => {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(`${mode}-mode`);
        toggle.checked = mode === 'dark';
        localStorage.setItem('nk-theme', mode);
    };

    // Initialize theme based on saved preference or media query fallback.
    setTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));

    // Flip the theme whenever the switch is toggled.
    toggle?.addEventListener('change', () => {
        setTheme(toggle.checked ? 'dark' : 'light');
    });

    // Keep footer copyright year up to date automatically.
    currentYear && (currentYear.textContent = new Date().getFullYear());

    // Close the mobile nav drawer after a link selection for smoother UX.
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            const navbar = document.getElementById('navbarContent');
            if (navbar?.classList.contains('show')) {
                const collapse = bootstrap.Collapse.getInstance(navbar) ?? new bootstrap.Collapse(navbar);
                collapse.hide();
            }
        });
    });

    // Provide lightweight form handling when no backend endpoint is configured yet.
    contactForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!contactForm.checkValidity()) {
            event.stopPropagation();
            contactForm.classList.add('was-validated');
            return;
        }

        contactForm.reset();
        contactForm.classList.remove('was-validated');
        if (statusMessage) {
            statusMessage.classList.remove('d-none');
            setTimeout(() => statusMessage.classList.add('d-none'), 4000);
        }
    });
})();
