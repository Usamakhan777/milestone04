// Function to save resume content to local storage
document.getElementById('saveResume').addEventListener('click', function() {
    const name = document.getElementById('name').innerText;
    const jobTitle = document.getElementById('job-title').innerText;
    const email = document.getElementById('email').innerText;
    const phone = document.getElementById('phone').innerText;

    // Save resume details
    localStorage.setItem('resume', JSON.stringify({
        name,
        jobTitle,
        email,
        phone,
    }));

    alert('Resume changes saved!');
});

// Function to load resume from local storage
function loadResume() {
    const savedResume = localStorage.getItem('resume');
    if (savedResume) {
        const resume = JSON.parse(savedResume);
        document.getElementById('name').innerText = resume.name;
        document.getElementById('job-title').innerText = resume.jobTitle;
        document.getElementById('email').innerText = resume.email;
        document.getElementById('phone').innerText = resume.phone;
    }
}

// Load resume on page load
window.onload = loadResume;

// Function to reset resume to original content
document.getElementById('resetResume').addEventListener('click', function() {
    localStorage.removeItem('resume');
    location.reload(); // Reload the page to reset fields
});

// Function to download resume as PDF using jsPDF
document.getElementById('downloadResume').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').innerText;
    const jobTitle = document.getElementById('job-title').innerText;
    const email = document.getElementById('email').innerText;
    const phone = document.getElementById('phone').innerText;

    doc.text(name, 10, 10);
    doc.text(jobTitle, 10, 20);
    doc.text('Email: ' + email, 10, 30);
    doc.text('Phone: ' + phone, 10, 40);

    doc.save(`${name}_resume.pdf`);
});
