
// Functionality of show pages of owner view
// function showReport()
showMembers();
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
function showMembers(){
    let adminMembers = localStorage.getItem('adminMembers');
    if (adminMembers == null) {
        addingMemberToLocalStorage = [];
    }
    else{
        addingMemberToLocalStorage = JSON.parse(adminMembers);
    }
    
    let abc = document.getElementById("addMem");    
    addingMemberToLocalStorage.forEach(element =>    {
        console.log(element);       
        // let eData = document.getElementById("memberContentInput").value;
        let data = `<span class="modal-header my-2 mx-2 addMember">
                  <span class="modal-title">${element}</span>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </span>`;
                abc.innerHTML += data; 
        });


}
function addMember(){
    let addingMemberToLocalStorage = [];
    let adminMembers = localStorage.getItem('adminMembers');
    if (adminMembers == null) {
        addingMemberToLocalStorage = [];
    }
    else{
        addingMemberToLocalStorage = JSON.parse(adminMembers);
    }

    let abc = document.getElementById("addMem");      
    let eData = document.getElementById("memberContentInput").value;
    let data = `<span class="modal-header my-2 mx-2 addMember">
              <span class="modal-title">${eData}</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </span>`;
            abc.innerHTML +=data;
            addingMemberToLocalStorage.push(eData);
            localStorage.setItem("adminMembers",JSON.stringify(addingMemberToLocalStorage));
            eData.text = "";
    
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

// save biodate of user of signup page in local storage

function Users(fullNames,emails,passwords){
    this.fullNames = fullNames;
    this.emails = emails;
    this.passwords = passwords;
}

// let signUpForm = document.getElementById('signUpForm');
// signUpForm.addEventListener("submit", signUpFormFunc);



function signUpFormFunc(){

    let fullNames = document.getElementById('fullNames').value;
    let emails = document.getElementById('emails').value;
    let passwords = document.getElementById('passwords').value;
  

    let users = new Users(fullNames,emails,passwords);
    

    let allUsers = localStorage.getItem('allUsers');
    if (allUsers == null) {
        allUsersObj = [];
    }
    else{
        allUsersObj = JSON.parse(allUsers);
    }
    allUsersObj.push(users);
    allUsers = localStorage.setItem("allUsers", JSON.stringify(allUsersObj));
    // document.getElementById("signUpForm").reset();
    // e.preventDefault();

}


// for sign in

// let signInForm = document.getElementById('signInForm');
// signInForm.addEventListener("submit", signInFormFunc)

function signInFormFunc(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let allUsers = localStorage.getItem("allUsers");
    if (allUsers == null) {
        allUsersObj = [];
    }
    else{
        allUsersObj = JSON.parse(allUsers);
    
  // console.log(allUsersObj);
   
    for (let i = 0; i < allUsersObj.length; i++) {
        if (email == allUsersObj[i].emails) {
            if (password == allUsersObj[i].passwords) {
            location.href = "./teams.html"
            }
            else if(password.length == 0){
                let wrong = document.querySelector('#wrong');
                wrong.innerHTML = `<div class="alert alert-warning" role="alert">
                Sorry! You didn't entered password.
              </div>`;
              setTimeout(()=> {
                wrong.innerHTML = "";
            },5000);
            }
            else {
                let wrong = document.querySelector('#wrong');
                wrong.innerHTML = `<div class="alert alert-warning" role="alert">
                Sorry! You Entered a wrong password.
              </div>`;
              setTimeout(()=> {
                wrong.innerHTML = "";
            },5000);
            }
        }
        else if(email.length == 0){
            let wrong = document.querySelector('#wrong');
            wrong.innerHTML = `<div class="alert alert-warning" role="alert">
            Sorry! You didn't entered email .
          </div>`;
          setTimeout(()=> {
              wrong.innerHTML = "";
          },5000);
        }
        else {
            let wrong = document.querySelector('#wrong');
            wrong.innerHTML = `<div class="alert alert-warning" role="alert">
            Sorry! You Entered a wrong email address.
          </div>`;
          setTimeout(()=> {
              wrong.innerHTML = "";
          },5000);
        }
        
    }
    document.getElementById("signInForm").reset();  
}
}

function nice(){
    let teamName = document.getElementById("teamName").value;
    console.log("test");
}

