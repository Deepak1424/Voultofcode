document.addEventListener("DOMContentLoaded", () => {
    showInternship('appDev');
});

function showInternship(id) {
    const internships = document.querySelectorAll('.internship');
    internships.forEach(internship => {
        internship.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
