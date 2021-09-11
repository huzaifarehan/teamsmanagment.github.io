
// for sign in

// let signInForm = document.getElementById('signInForm');
// signInForm.addEventListener("submit", signInFormFunc)

// function signInFormFunc(){
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let allUsers = localStorage.getItem("allUsers");
//     if (allUsers == null) {
//         allUsersObj = [];
//     }
//     else{
//         allUsersObj = JSON.parse(allUsers);
//     }

//     for (let i = 0; i < allUsersObj.length; i++) {
//         if (email == allUsersObj[i].emails) {
//             if (password == allUsersObj[i].passwords) {
//                 location.href = "./teams.html"
//             }
//             else{
//                 let wrong = document.querySelector('#wrong');
//                 wrong.innerHTML = `<div class="alert alert-warning" role="alert">
//                 Sorry! You Entered a wrong password.
//                 </div>`;
//             }
//         }
//         else{
//             let wrong = document.querySelector('#wrong');
//             wrong.innerHTML = `<div class="alert alert-warning" role="alert">
//             Sorry! You Entered a wrong email address.
//             </div>`;
//             setTimeout(()=> {
//                 wrong.innerHTML = "";
//             },5000);
//         }

//     }
//     document.getElementById("signInForm").reset();  
// }




//  constructor of team members

class Teams {
    constructor(name, category, member) {
        this.name = name;
        this.category = category;
        this.member = member;
    }
}

// creation of team on member teams page

function createTeam() {
    let teamName = document.getElementById('teamName').value;
    let category = document.getElementById('category').value;
    let member = document.getElementById('member').value;

    let teams = new Teams(teamName, category, member);


    let allTeams = localStorage.getItem('allTeams');
    if (allTeams == null) {
        allTeamsObj = [];
    }
    else {
        allTeamsObj = JSON.parse(allTeams);
    }
    allTeamsObj.push(teams);
    allTeams = localStorage.setItem("allTeams", JSON.stringify(allTeamsObj));
    location.href = "ownerview.html";
    // document.getElementById('teamCreationForm').reset();
    // e.preventDefault();
}

// settings of 