// save biodate of user of signup page in local storage

class Users {
    constructor(fullNames, emails, passwords) {
        this.fullNames = fullNames;
        this.emails = emails;
        this.passwords = passwords;
    }
}

// let signUpForm = document.getElementById('signUpForm');
// signUpForm.addEventListener("submit", signUpFormFunc);


let signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', signUpFormFunc);
function signUpFormFunc(e) {

    let fullNames = document.getElementById('fullNames').value;
    let emails = document.getElementById('emails').value;
    let passwords = document.getElementById('passwords').value;


    let users = new Users(fullNames, emails, passwords);


    let allUsers = localStorage.getItem('allUsers');
    if (allUsers == null) {
        allUsersObj = [];
    }
    else {
        allUsersObj = JSON.parse(allUsers);
    }
    allUsersObj.push(users);
    allUsers = localStorage.setItem("allUsers", JSON.stringify(allUsersObj));
    // document.getElementById("signUpForm").reset();
    e.preventDefault();
    location.href = "//index.html"
}