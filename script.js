document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded");
    const consentBanner = document.getElementById('cookie-consent');
    console.log(consentBanner); // Verifica si el elemento se selecciona correctamente

    const acceptBtn = document.getElementById('accept-btn');
    const closeBtn = document.getElementById('close-btn');
    const cookieName = 'cookieConsent';

    function hasConsent() {
        return localStorage.getItem(cookieName) === 'true';
    }

    function showConsentBanner() {
        if (!hasConsent()) {
            console.log("Showing banner in 2 seconds...");
            setTimeout(() => {
                console.log("Adding show class");
                consentBanner.classList.add('show');
            }, 1000);
        }
    }

    function acceptCookies() {
        localStorage.setItem(cookieName, 'true');
        consentBanner.classList.remove('show');
    }

    acceptBtn.addEventListener('click', acceptCookies);
    closeBtn.addEventListener('click', () => consentBanner.classList.remove('show'));

    showConsentBanner();
});


// reset cookie
document.getElementById('reset-consent').addEventListener('click', () => {
    localStorage.removeItem('cookieConsent');
    
    Swal.fire({
        title: 'Cookie Consent Reset',
        text: 'The cookie consent has been reset. The page will reload.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then(() => {
        location.reload(); // Recarga la página después de cerrar la alerta
    });
});