$(document).ready(function() {
    
    // Handle Login Form Submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const user = $('#loguser').val();
        const pass = $('#logpassword').val();
        
        // Mock Authentication Logic based on URL path
        const path = window.location.pathname;

        if (user && pass) {
            if (path.includes('acad-portal')) {
                // Academic Portal Login
                if (user.includes('instructor')) {
                    localStorage.setItem('npipng_role', 'INSTRUCTOR');
                    localStorage.setItem('npipng_name', 'John Rambo');
                    localStorage.setItem('npipng_id', '21003');
                } else {
                    // Default to Student
                    localStorage.setItem('npipng_role', 'STUDENT');
                    localStorage.setItem('npipng_name', 'Samuel Kekebogi');
                    localStorage.setItem('npipng_id', '210001');
                }
                window.location.href = '../dashboard/index.html';

            } else if (path.includes('admin-portal')) {
                // Admin Portal Login
                if (user.includes('acad')) {
                    localStorage.setItem('npipng_role', 'ACAD');
                    localStorage.setItem('npipng_name', 'Rachel Chu');
                    localStorage.setItem('npipng_id', '21064');
                } else {
                    localStorage.setItem('npipng_role', 'REGISTRAR');
                    localStorage.setItem('npipng_name', 'Faustina Kepea');
                    localStorage.setItem('npipng_id', '21001');
                }
                window.location.href = '../dashboard/index.html';

            } else if (path.includes('superuser-portal')) {
                // Superuser Login
                localStorage.setItem('npipng_role', 'SUPERUSER');
                localStorage.setItem('npipng_name', 'Cytrus Kili');
                localStorage.setItem('npipng_id', 'adm65c241b87ae02c412');
                window.location.href = '../dashboard/index.html';
            }
        } else {
            $('#loginAlertMessage').html('<span class="text-danger">Please enter credentials</span>');
        }
    });

    // Handle Logout
    $('#LogoutForm').submit(function(e) {
        e.preventDefault();
        localStorage.clear();
        // Redirect to root
        window.location.href = '../../index.html';
    });
});