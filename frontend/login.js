
// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:4000`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("loginuser");
let loginUserPassword = document.getElementById("loginpassword");

let signupUserEmail =documnet.getElementById("signup-email");
let signupUserUsername = document.getElementById("sign-upuser");
let signupUserPassword = document.getElementById("signupPassword");

let loginUserButton = document.getElementById("login-user");
// let getTodoButton = document.getElementById("fetch-todos");

// let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


sign_in_btn.addEventListener('click', () => {
    logIn();
});
// getTodoButton.addEventListener("click",fetchTodo)

async function logIn() {
  try {
    let obj = {
      "username": loginuser.value,
      "password": loginpassword.value,
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
   // Display notification
    displayNotification(`hey ${data.user.username}, welcome back!`);
    if(data.user.isAdmin){
      window.location.href = '../admin.html';
    }else{
      window.location.href = '../index.html';
    }
    // fetchTodo()
  } catch (err) {
    console.log(err);
  }
}

async function SignUp(){
  try{
   let obj={
    "username":signupUserUsername.value,
    "email":signupUserEmail.value,
    "password":signupUserPassword.value,
    "isAdmin":false,
   }
   let res = await fetch(userRegisterURL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  });
  let data = await res.json();
  console.log(data)
  }catch(error){
    console.log(error);
  }
}
sign_up_btn.addEventListener('click', () => {
  logIn();
});


// Function to display notification
function displayNotification(message) {
  const notification = document.createElement('h5');
  notification.classList.add('notification', 'info');
  notification.textContent = message;
  notificationWrapper.innerHTML = '';
  notificationWrapper.append(notification);
}

