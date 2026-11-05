let NPIPNG_DATA = null;

function loadNPIPNGData(callback) {
    const path = window.location.pathname;
    // If we are deep inside a portal folder, go up 2 levels
    let rootPath = path.includes('-portal/') ? '../../' : './';

    $.getJSON(rootPath + 'data.json', function(data) {
        NPIPNG_DATA = data;
        if (typeof callback === 'function') {
            callback(data);
        }
    }).fail(function() {
        console.error("Failed to load data.json. Ensure you are running on a Local Server (Live Server) or GitHub Pages, not opening the file directly.");
    });
}

const DB = {
    getStudent: function(id) { return NPIPNG_DATA.students.find(s => s.studentID == id); },
    getAllStudents: function() { return NPIPNG_DATA.students; },
    getStaff: function(id) { return NPIPNG_DATA.staff.find(s => s.staffID == id); },
    getCourse: function(id) { return NPIPNG_DATA.courses.find(c => c.courseID == id); },
    getUnit: function(id) { return NPIPNG_DATA.units.find(u => u.unitID == id); },
    getEnrollments: function(studentID) { return NPIPNG_DATA.enrollments.filter(e => e.studentID == studentID); }
};

const Calc = {
    formatDate: function(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    },
    formatDateOnly: function(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        return d.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    },
    getGrade: function(weight) {
        if (weight >= 95) return 'HD';
        if (weight >= 85) return 'D';
        if (weight >= 75) return 'CR';
        if (weight >= 65) return 'UP';
        if (weight >= 25) return 'P';
        return 'F';
    },
    getGradePoints: function(code) {
        const g = NPIPNG_DATA.grades.find(g => g.gradeCode === code);
        return g ? g.points : 0;
    }
};