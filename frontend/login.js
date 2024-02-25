
// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:4000`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
// const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
// const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/users/register`;
const userLoginURL = `${baseServerURL}/users/login`;
// let paginationWrapper = document.getElementById("pagination-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
// // const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
// // const urlTodosBase = `${baseServerURL}/todos/`;


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

let loginUserButton = document.getElementById("signinBtn");
let signUpUserButton = document.getElementById("signupBtn");

let newUserPassword=document.getElementById("newUserPassword");
let newUserEmail= document.getElementById("newUserEmail");
let newUsername=document.getElementById("Username");
let UserEmail=document.getElementById("UserEmail");
let UserPassword=document.getElementById("UserPassword");


loginUserButton.addEventListener('click', () => {
  logIn();
});

async function logIn() {
  let email =  UserEmail.value;
  let password = UserPassword.value;
  if (email && password) {
      let credential = {
          "email": email,
          "password": password
      }
      try {
          let response = await fetch(userLoginURL, {
              method: 'POST',
              headers: {
                  'content-type': 'application/json',
              },
              body: JSON.stringify(credential),
          });

          let data = await response.json();

          if (typeof data === 'object') {

              console.log(data);
              // createToast('success');

              localStorage.setItem('userId', data.user.id);
              localStorage.setItem('localAccessToken', data.accessToken);

              if (data.user.isAdmin) {
                console.log("Redirecting to admin page");
                window.location.href =  `${baseURL}/admin.html`;
              } else {
                console.log("Redirecting to user page");
                window.location.href = `${baseURL}/index.html`;
              }
          }
          // else {
          //     createToast('error');
          // }

      } catch (error) {
          // createToast('error');
          console.log('Error : Some error occurred', error);
      }
  }

  // else {
  //     createToast('error');
  // }
}
// async function logIn() {
//   try {
//     let obj = {
//       "email": UserEmail.value,
//       "password": UserPassword.value,
//     };
    
//     let res = await fetch(userLoginURL, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(obj)
//     });
//     let data = await res.json();
//     console.log("Login response:", data);

//     // Check if user data contains isAdmin property
//     if (data && data.user && typeof data.user.isAdmin === 'boolean') {
//       // Store access token and user ID in local storage
//       localStorage.setItem('localAccessToken', data.accessToken);
//       localStorage.setItem('userId', JSON.stringify(data.user.id));

//       // Redirect based on isAdmin property
//       if (data.user.isAdmin) {
//         console.log("Redirecting to admin page");
//         window.location.href = "../admin.html";
//       } else {
//         console.log("Redirecting to user page");
//         window.location.href = '../index.html';
//       }
//     } else {
//       console.error("Invalid user data:", data);
//       // Redirect to an error page or display an error message
//       window.location.href = '../error.html';
//     }
//   } catch (err) {
//     console.error("Login error:", err);
//     // Redirect to an error page or display an error message
//     window.location.href = '../error.html';
//   }
// }



async function SignUp() {
  try {
    let obj = {
      "username": newUsername.value,
      "email":newUserEmail.value,
      "password":newUserPassword.value,
      "isAdmin":false
    };
    
    let res = await fetch(userRegisterURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    });
    let data = await res.json();
    console.log(data)
  } catch (err) {
    console.log(err);
  }
  }
  signUpUserButton.addEventListener("click",()=>{
    SignUp();
  })