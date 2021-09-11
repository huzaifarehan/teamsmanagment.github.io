// Functionality of show pages of owner view
// function showReport();

function showReport() {
    let report = document.getElementById('report');
    let settings = document.getElementById('settings');
    let reportBtn = document.getElementById('reportBtn');
    let settingsBtn = document.getElementById('settingsBtn');
    reportBtn.style.borderColor = 'orangered';
    settingsBtn.style.borderColor = '#fff';
    report.style.display = 'block';
    settings.style.display = 'none';

}

showReport();

function showSettings() {
    let report = document.getElementById('report');
    let settings = document.getElementById('settings');
    let reportBtn = document.getElementById('reportBtn');
    let settingsBtn = document.getElementById('settingsBtn');
    reportBtn.style.borderColor = '#fff';
    settingsBtn.style.borderColor = 'orangered';
    report.style.display = 'none';
    settings.style.display = 'block';

}