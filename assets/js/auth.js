// Simulated Authentication for Static Demo
$(document).ready(function() {
    // Check if user is logged in
    const role = localStorage.getItem('npipng_role');
    const userName = localStorage.getItem('npipng_name');

    // If on a login page and already logged in, redirect to dashboard
    if (window.location.pathname.includes('index.html') && !window.location.pathname.endsWith('npipng-demo/index.html')) {
        if (role) {
            window.location.href = 'dashboard.html';
        }
    }

    // Handle Login Form Submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const user = $('#loguser').val();
        const pass = $('#logpassword').val();
        
        // Mock Authentication Logic
        if (user && pass) {
            // For the demo, we just check keywords in the username
            if (user.includes('admin')) {
                localStorage.setItem('npipng_role', 'SUPERUSER');
                localStorage.setItem('npipng_name', 'Cytrus Kili');
                window.location.href = '../superuser-portal/dashboard.html';
            } else if (user.includes('registrar')) {
                localStorage.setItem('npipng_role', 'REGISTRAR');
                localStorage.setItem('npipng_name', 'Faustina Kepea');
                window.location.href = '../admin-portal/dashboard.html';
            } else {
                // Default to student
                localStorage.setItem('npipng_role', 'STUDENT');
                localStorage.setItem('npipng_name', 'Samuel Kekebogi');
                localStorage.setItem('npipng_id', '210001');
                window.location.href = '../acad-portal/dashboard.html';
            }
        } else {
            $('#loginAlertMessage').html('<span class="text-danger">Please enter credentials</span>');
        }
    });

    // Handle Logout
    $('#LogoutForm').submit(function(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.href = '../index.html';
    });

    // Inject User Name into Nav Bar if exists
    if (userName) {
        $('.user-name-placeholder').text('Hi, ' + userName);
    }
});