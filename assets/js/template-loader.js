$(document).ready(function() {
    // 1. Load the top template
    $("#template-top").load("../components/top.html", function() {
        
        // 2. Once top is loaded, load the banner and nav
        $("#banner-container").load("../components/banner.html");
        
        // 3. Load the Nav Bar
        $("#navigation-container").load("../components/navigation.html", function() {
            // Check if user is logged in
            const role = localStorage.getItem('npipng_role');
            
            // Hide logout/nav if not logged in
            if (!role) {
                $("#nav-links").hide();
                $("#LogoutForm").hide();
            } else {
                // Inject dynamic links based on role
                if (role === 'REGISTRAR' || role === 'ACAD' || role === 'SS') {
                    $('#nav-links').prepend(`
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"><i class="bi-people"></i>&nbsp;Manage Students</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../records.html">Student Registry</a>
                                <a class="dropdown-item" href="../archive.html">Student Archives</a>
                            </div>
                        </li>
                    `);
                }
                if (role === 'INSTRUCTOR' || role === 'STUDENT') {
                    $('#nav-links').prepend(`
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown"><i class="bi-book"></i>&nbsp;My Course</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="../course.html">All Courses</a>
                            </div>
                        </li>
                    `);
                }
                
                // Show user name
                const name = localStorage.getItem('npipng_name');
                $('.user-name-placeholder').text(name);
            }
        });
    });
});