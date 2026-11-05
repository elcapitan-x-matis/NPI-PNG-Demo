$(document).ready(function() {
    // 1. Determine how deep we are in the folder structure
    // If the URL contains /acad-portal/, /admin-portal/, or /superuser-portal/, we are 2 levels deep.
    const path = window.location.pathname;
    let rootPath = '../'; 
    
    if (path.includes('/acad-portal/') || path.includes('/admin-portal/') || path.includes('/superuser-portal/')) {
        rootPath = '../../'; // Go up two levels to reach root
    } else {
        rootPath = './'; // We are at the root index.html
    }

    // Detect if we are on an authentication (login) page
    const isLoginPage = path.includes('/authentication/');

    // 2. Load the top template
    $("#template-top").load(rootPath + "components/top.html", function() {
        
        // 3. Load the Nav Bar and Banner (skip banner on login pages)
        if (!isLoginPage) {
            $("#banner-container").load(rootPath + "components/banner.html");
            
            $("#navigation-container").load(rootPath + "components/navigation.html", function() {
                const role = localStorage.getItem('npipng_role');
                const name = localStorage.getItem('npipng_name');

                if (role) {
                    $('.user-name-placeholder').text(name || 'User');
                    
                    // Inject Portal Specific Links dynamically based on role
                    if (role === 'STUDENT') {
                        $('#nav-links').prepend(`
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"><i class="bi-book"></i>&nbsp;My Course</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="${rootPath}acad-portal/course/index.html">All Courses</a>
                                </div>
                            </li>
                        `);
                    } else if (role === 'INSTRUCTOR') {
                        $('#nav-links').prepend(`
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"><i class="bi-book"></i>&nbsp;My Units</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="${rootPath}acad-portal/unit/index.html?id=180">DPAPS1001</a>
                                </div>
                            </li>
                        `);
                    } else if (role === 'REGISTRAR' || role === 'ACAD') {
                        $('#nav-links').prepend(`
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"><i class="bi-people"></i>&nbsp;Manage Students</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="${rootPath}admin-portal/records/index.html">Student Registry</a>
                                </div>
                            </li>
                        `);
                    } else if (role === 'SUPERUSER') {
                        $('#nav-links').prepend(`
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"><i class="bi-people"></i>&nbsp;Manage Accounts</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="${rootPath}superuser-portal/users/index.html">All Users</a>
                                </div>
                            </li>
                        `);
                    }
                } else {
                    // Hide dashboard and show Sign In
                    $('#nav-links').html(`
                        <li class="nav-item"><a class="nav-link" href="${rootPath}acad-portal/course/index.html">All Courses</a></li>
                        <li class="nav-item"><a class="nav-link" href="${rootPath}acad-portal/authentication/index.html">Sign In</a></li>
                    `);
                    $("#LogoutForm").hide();
                }
            });
        }
    });
});