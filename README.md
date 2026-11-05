# NPIPNG Learning, Academics and Student Management System

![Home Page](./assets/image/learning-portal-landing-page.png)

A comprehensive, role-based, static demonstration of the National Polytechnic Institute of Papua New Guinea (NPIPNG) academic and student management system. This project simulates a full-scale educational ERP (Enterprise Resource Planning) environment using purely front-end technologies.

## 📖 About The Project

This demo was built to showcase the architecture, user interface, and data flow of a modern academic management system. It features three distinct, isolated portals catering to different user roles within the institution:

* **Academic Portal** (Students & Instructors)
* **Admin Portal** (Registrars & Academic Administrators)
* **Superuser Portal** (System Administrators)

The entire application is powered by a single `data.json` file, simulating a relational database via localStorage and JavaScript data-loading functions. No backend server is required to run this demo.

## 🚀 Features & Portals

### 🎓 1. Academic Portal (`/acad-portal`)
Designed for the day-to-day teaching and learning experience.

* **Students:**
  * View current enrolled courses, unit details, and cumulative GPA.
  * Access unit materials (uploaded files and external links).
  * View noticeboards for specific units.
  * Track assignment/quiz scores via the Gradebook.
  * View academic transcript history.
* **Instructors:**
  * Manage assigned units.
  * View enrolled students per unit.
  * Access the gradebook to monitor student progress and activity marks.

### ⚙️ 2. Admin Portal (`/admin-portal`)
Designed for institutional operations and student lifecycle management.

* **Registrar Officers:**
  * Search and filter the Student Registry.
  * View comprehensive student e-profiles (Personal Info, Enrollments, Gradebook).
* **Academic Administrators:**
  * Manage the Academics Registry (Departments, Courses, and Units).
  * View hierarchical data (Department -> Course -> Unit).
* **Student Services (SS):**
  * Manage Dormitories and Room Allocations.
  * Filter students by gender to assign them to appropriate dormitories.
  * View room occupancy status.

### 🛡️ 3. Superuser Portal (`/superuser-portal`)
Designed for ultimate system oversight.

* View global system statistics (Total Students, Staff, Courses, etc.).
* Manage user accounts across all tables:
  * Staff Accounts (Activate/Deactivate).
  * Student Accounts (Activate/Deactivate).
  * Superuser Accounts (Manage CRUD access permissions).
* View detailed account profiles for any user type.

## 📂 Project Structure

```text
npipng-demo/
├── index.html                  # Root Landing Page (Portal Selection)
├── data.json                   # Mock Database (All system data)
├── README.md                   # Project Documentation
├── assets/
│   ├── css/
│   │   ├── cover.css           # Styling for root landing page
│   │   └── custom.css          # Main theme styling (Bootstrap overrides)
│   ├── favicon/                # Site icons
│   ├── image/                  # System images (banners, placeholders)
│   └── js/
│       ├── auth.js             # Mock authentication logic
│       ├── data-loader.js      # JSON parsing & DB helper functions (DB, Calc)
│       └── template-loader.js  # Component injection logic
├── acad-portal/                # 🎓 Academic Portal
│   ├── account/
│   ├── activity/
│   ├── authentication/
│   ├── course/
│   ├── dashboard/
│   ├── enrollment/
│   ├── gradebook/
│   ├── noticeboard/
│   ├── resource/
│   └── unit/
├── admin-portal/               # ⚙️ Admin Portal
│   ├── academic/
│   ├── allocation/
│   ├── authentication/
│   ├── dashboard/
│   ├── dormitory/
│   ├── records/
│   ├── room/
│   └── student/
└── superuser-portal/           # 🛡️ Superuser Portal
    ├── account/
    ├── authentication/
    ├── dashboard/
    ├── settings/
    └── users/
```

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Custom styling, CSS Variables, Flexbox/Grid.
* **Bootstrap 4.6 & 5.3:** Responsive grid system and UI components (Modals, Cards, Navbars, Tabs).
* **Bootstrap Icons:** Extensive iconography.
* **jQuery 3.6:** DOM manipulation and event handling.
* **Vanilla JavaScript:** Data loading, authentication mocking, and business logic.
* **Google Fonts:** DM Serif Display (Headings) and Karla (Body text).

## 🚦 Getting Started

Because this project relies on fetching a local JSON file (`data.json`) via AJAX, it must be run on a local web server. Opening the `index.html` file directly in your browser (via `file://` protocol) will result in CORS errors, and the data will not load.

### Prerequisites
You need a simple local web server. Choose one of the following methods:

* **VS Code (Recommended):** Install the Live Server extension. Right-click `index.html` and select "Open with Live Server".
* **Python (v3):** Run `python -m http.server 8000` in the project directory.
* **Node.js:** Run `npx http-server` in the project directory.
* **PHP:** Run `php -S localhost:8000` in the project directory.

### Installation

1. Clone the repository:
   ```bash
   git clone https://https://github.com/elcapitan-x-matis/NPI-PNG-Demo.git
   ```
2. Navigate to the project folder.
3. Start your local server.
4. Open your browser and navigate to `http://localhost:8000` (or the port provided by your server).

## 🔐 Demo Login Credentials

Since this is a static front-end demo, authentication is mocked. Any password will work. The system determines your role based on the portal you are logging into and the username you enter.

| Portal | Username Input | Assigned Role / User |
| ----- | ----- | ----- |
| Academic | (any standard username) | Student (Samuel Kekebogi) |
| Academic | instructor | Instructor (John Rambo) |
| Admin | (any standard username) | Registrar (Faustina Kepea) |
| Admin | acad | Academic Admin (Rachel Chu) |
| Superuser | (any username) | Superuser (Cytrus Kili) |

# Login Accounts

## 🔐 Admin Accounts (admin table)

| Username | Email | Name | Access Level |
| :--- | :--- | :--- | :--- |
| test@admin | admintest@npipng.ac.pg | Test test | Activation only |
| ckili@admin | ckili@ict.npipng.ac.pg | Cytrus Kili | Full access (activate, create, update, delete) |
| pmitu@admin | pmitu@ict.npipng.ac.pg | Paul Mitu | Activation only |

⚠️ **Default admin password hash** (`f865b53623b121fd34ee5426c792e5c33af8c227`) is the SHA-1 for "password" (the standard phpMyAdmin/legacy default). The `test@admin` account uses `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3`, which is SHA-1 for "test".

---

## 👨‍🏫 Staff Accounts (staff table)

All staff share the same default password hash `7288edd0fc3ffcbe93a0cf06e3568e28521687bc` (SHA-1 for "password") unless changed. Only activated accounts are listed as usable.

### Registrar Officer
| Username | Email | Name | Status |
| :--- | :--- | :--- | :--- |
| fkepea | fkepea@npipng.ac.pg | Faustina Kepea | ✅ Active |

### Student Services Officer
| Username | Email | Name | Status |
| :--- | :--- | :--- | :--- |
| hmonty | hmonty@npipng.ac.pg | Henry Monty | ✅ Active |

### Academic Administration Officer
| Username | Email | Name | Status |
| :--- | :--- | :--- | :--- |
| rchu | rchu@npipng.ac.pg | Rachel Chu | ✅ Active |

### Instructors / Lecturers
| Username | Email | Name | Status |
| :--- | :--- | :--- | :--- |
| jrambo | jrambo@npipng.ac.pg | John Rambo | ✅ Active |
| vmatthews | vmatthews@npipng.ac.pg | Veronica Matthews | ✅ Active |
| jshaft | jshaft@npipng.ac.pg | John Shaft | ❌ Inactive |
| nwest | nwest@npipng.ac.pg | Nathan West | ❌ Inactive |
| bmikes | bmikes@npipng.ac.pg | Bailey Mikes | ✅ Active |
| gmichaels | gmichaels@npipng.ac.pg | George Michaels | ❌ Inactive |
| wwaninara | wwaninara@npipng.ac.pg | Wesley Waninara | ✅ Active |
| gbaje | gbaje@npipng.ac.pg | Gabriel Baje | ✅ Active |
| qjobs | qjobs@npipng.ac.pg | Quinn Jobs | ✅ Active |
| fmiles | fmiles@npipng.ac.pg | Fredrick Miles | ✅ Active |
| bhonnes | bhonnes@npipng.ac.pg | Bradley Honnes | ✅ Active |
| jwells | jwells@npipng.ac.pg | Justin Wells | ✅ Active |
| jwilde | jwilde@npipng.ac.pg | Jack Wilde | ✅ Active |
| pairi | pairi@npipng.ac.pg | Picky Airi | ✅ Active |
| panderson | panderson@npipng.ac.pg | Peter Anderson | ✅ Active |
| mcletus | mcletus@npipng.ac.pg | Maxie Cletus | ✅ Active |
| jstatham | jstatham@npipng.ac.pg | Jason Statham | ✅ Active |
| pmccrevis | pmccrevis@npipng.ac.pg | Phillip McCrevis | ✅ Active |
| nlibre | nlibre@npipng.ac.pg | Nacho Libre | ✅ Active |
| rluna | rluna@npipng.ac.pg | Ruben Luna | ✅ Active |
| dwebster | dwebster@npipng.ac.pg | Daniel Webster | ✅ Active |
| tjeffreys | tjeffreys@npipng.ac.pg | Tony Jeffreys | ✅ Active |
| fmayweather | fmayweather@npipng.ac.pg | Floyd Mayweather | ✅ Active |
| rstark | rstark@npipng.ac.pg | Robert Stark | ✅ Active |
| clannister | clannister@npipng.ac.pg | Cersei Lannister | ✅ Active |
| mtyrell | mtyrell@npipng.ac.pg | Margo Tyrell | ✅ Active |
| wfrey | wfrey@npipng.ac.pg | Waldo Frey | ✅ Active |
| wfrey ii | wfrey ii@npipng.ac.pg | Waldo Frey II | ✅ Active |
| jwick | jwick@npipng.ac.pg | John Wick | ✅ Active |
| jwest | jwest@npipng.ac.pg | Jane Vanwild West | ✅ Active |
| sstark | sstark@npipng.ac.pg | Sansa Stark | ✅ Active |
| rbaratheon | rbaratheon@npipng.ac.pg | Robert Baratheon | ✅ Active |
| rkakai | rkakai@npipng.ac.pg | Ryan Kakai | ❌ Inactive |

---

## 🎓 Student Accounts (student table)

All students share the same default password hash `7288edd0fc3ffcbe93a0cf06e3568e28521687bc` (SHA-1 for "password") unless changed. Only activated accounts are listed as usable.

| Email (login) | Name | Student ID | Status |
| :--- | :--- | :--- | :--- |
| skekebogi@student.npipng.ac.pg | Samuel Kekebogi | 210001 | ✅ Active |
| sblade@student.npipng.ac.pg | Sally Blade | 210002 | ✅ Active |
| smakis@student.npipng.ac.pg | Sandy Makis | 210003 | ✅ Active |
| bbesuin@student.npipng.ac.pg | Bentley Besuin | 210004 | ✅ Active |
| arina@student.npipng.ac.pg | Augustina Rina | 210005 | ✅ Active |
| ktaurakava@student.npipng.ac.pg | Koiavagi Taurakava | 210006 | ❌ Inactive |
| pmitu@student.npipng.ac.pg | Paul Mitu | 210007 | ✅ Active |
| dgireng@student.npipng.ac.pg | Doreen Gireng | 210008 | ❌ Inactive |
| ruware@student.npipng.ac.pg | Robinson Uware | 210009 | ✅ Active |
| mwinduman@student.npipng.ac.pg | Mark Winduman | 210010 | ✅ Active |
| knauna@student.npipng.ac.pg | Keilani Nauna | 210011 | ✅ Active |
| dbelari@student.npipng.ac.pg | Damari Belari | 210012 | ✅ Active |
| dvali@student.npipng.ac.pg | Danisha Vali | 210013 | ✅ Active |
| krodney@student.npipng.ac.pg | Kaminiella Rodney | 210014 | ✅ Active |
| abonamedura@student.npipng.ac.pg | Abraham Bonamedura | 210015 | ✅ Active |
| jjoe@student.npipng.ac.pg | Jayjay Joe | 210016 | ✅ Active |
| eageda@student.npipng.ac.pg | Esley Ageda | 210018 | ✅ Active |
| myama@student.npipng.ac.pg | Melanie Yama | 210020 | ✅ Active |
| amolat@student.npipng.ac.pg | Amanda Molat | 210025 | ❌ Inactive |

---

## 📋 Summary by Account Type

| Account Type | Count | Notes |
| :--- | :--- | :--- |
| Admins | 3 | Full system administration (ckili@admin is the only super-admin) |
| Registrar Officers | 1 | fkepea |
| Student Services Officers | 1 | hmonty |
| Academic Admin Officers | 1 | rchu |
| Instructors/Lecturers | 33 total (31 active) | 2 inactive: jshaft, nwest, gmichaels, rkakai |
| Students | 19 total (16 active) | 3 inactive: 210006, 210008, 210025 |

*(Note: See `assets/js/auth.js` for the exact mock logic).*

## 📝 Notes on the Data

The `data.json` file is a comprehensive mock database containing:

* 6 Departments
* 16 Courses
* ~70 Units (subset of 300+)
* 19 Students
* 35 Staff Members
* 3 Superusers
* 37 Enrollment Records
* 39 Activities (Assessments)
* 180+ Activity Marks
* 4 Dormitories with Room Assignments

This structure simulates a complex relational database with foreign keys (e.g., mapping students to courses, staff to units, and marks to activities).

## 👨‍💻 Author

Designed by **Cytrus John Dominic Kili**  
*The National Polytechnic Institute of Papua New Guinea*

## 📄 License

This project is for educational and demonstration purposes only. All data contained within is mock data (Lorem Ipsum text, fictional names, and generated numbers).