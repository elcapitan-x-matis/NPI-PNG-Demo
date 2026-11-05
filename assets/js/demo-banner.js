// assets/js/demo-banner.js
(function () {
    // Check if the user has already dismissed the banner in this session
    if (sessionStorage.getItem('npipngDemoBannerDismissed') === '1') {
        return;
    }

    // Add a class to the body to push content down so it isn't hidden
    document.body.classList.add('has-demo-banner');

    // Create the banner element
    const banner = document.createElement('div');
    banner.className = 'demo-banner';
    banner.id = 'demoBanner';

    // Set the internal HTML
    banner.innerHTML = `
        <i class="bi bi-info-circle-fill"></i>
        <span>Static demo of the <strong>NPIPNG Management System</strong>. All data is simulated.</span>
        <button class="banner-close" aria-label="Dismiss banner">&times;</button>
    `;

    // Insert the banner at the very top of the body
    document.body.prepend(banner);

    // Add click event to the close button
    banner.querySelector('.banner-close').addEventListener('click', function () {
        banner.remove();
        document.body.classList.remove('has-demo-banner');
        // Save dismissal state to session storage
        sessionStorage.setItem('npipngDemoBannerDismissed', '1');
    });
})();