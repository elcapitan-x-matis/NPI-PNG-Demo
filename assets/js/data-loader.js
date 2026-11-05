// Global variable to store loaded data
let NPIPNG_DATA = null;

// Function to load data on page load
function loadNPIPNGData(callback) {
    $.getJSON('../../data.json', function(data) {
        NPIPNG_DATA = data;
        if (typeof callback === 'function') {
            callback(data);
        }
    }).fail(function() {
        console.error("Failed to load data.json. Make sure you are running this on a local server or GitHub Pages.");
    });
}

// Helper Functions (Simulating PHP Class Methods)
const DB = {
    getStudent: function(id) {
        return NPIPNG_DATA.students.find(s => s.studentID == id);
    },
    getAllStudents: function() {
        return NPIPNG_DATA.students;
    },
    getStaff: function(id) {
        return NPIPNG_DATA.staff.find(s => s.staffID == id);
    },
    getCourse: function(id) {
        return NPIPNG_DATA.courses.find(c => c.courseID == id);
    },
    getUnit: function(id) {
        return NPIPNG_DATA.units.find(u => u.unitID == id);
    },
    getEnrollments: function(studentID) {
        return NPIPNG_DATA.enrollments.filter(e => e.studentID == studentID);
    }
};