// sign in functionality

let signInForm = document.getElementById('in');
signInForm.addEventListener('click', signInFormFunc)
function signInFormFunc() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let allUsers = localStorage.getItem("allUsers");
    if (allUsers == null) {
        allUsersObj = [];
    }
    else {
        allUsersObj = JSON.parse(allUsers);
    }
    for (let i = 0; i < allUsersObj.length; i++) {
        if (email == allUsersObj[i].emails) {
            if (password == allUsersObj[i].passwords) {
                location.href = "./teams.html"
            }
            else if (password.length == 0) {
                let wrong = document.querySelector('#wrong');
                wrong.innerHTML = `<div class="alert alert-warning" role="alert">
            Sorry! You didn't entered password.
          </div>`;
                setTimeout(() => {
                    wrong.innerHTML = "";
                }, 5000);
            }
            else {
                let wrong = document.querySelector('#wrong');
                wrong.innerHTML = `<div class="alert alert-warning" role="alert">
            Sorry! You Entered a wrong password.
          </div>`;
                setTimeout(() => {
                    wrong.innerHTML = "";
                }, 5000);
            }
        }
        else if (email.length == 0) {
            let wrong = document.querySelector('#wrong');
            wrong.innerHTML = `<div class="alert alert-warning" role="alert">
        Sorry! You didn't entered email .
      </div>`;
            setTimeout(() => {
                wrong.innerHTML = "";
            }, 5000);
        }
        else {
            let wrong = document.querySelector('#wrong');
            wrong.innerHTML = `<div class="alert alert-warning" role="alert">
        Sorry! You Entered a wrong email address.
      </div>`;
            setTimeout(() => {
                wrong.innerHTML = "";
            }, 5000);
        }

    }
    document.getElementById("signInForm").reset();
}
