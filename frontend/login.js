
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
try {
  let obj = {
    "email": UserEmail.value,
    "password": UserPassword.value,
  };
  
  let res = await fetch(userLoginURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  });
  let data = await res.json();
  console.log(data)
  localStorage.setItem('localAccessToken', data.accessToken);
  localStorage.setItem('userId', JSON.stringify(data.user.id));
  console.log(data.accessToken,data.user.id);
    if(data.user.isAdmin){
     window.location.href = "../admin.html";
    }else{
      window.location.href = '../index.html';
    }
} catch (err) {
  console.log(err);
}
}


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