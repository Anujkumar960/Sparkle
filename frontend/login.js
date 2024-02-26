document.addEventListener("DOMContentLoaded", function () {
  const isDevelopment = window.location.hostname.includes("127.0.0.1");
  const baseServerURL = isDevelopment
    ? "http://localhost:3000/"
    : "https://byte-adept-3456.onrender.com/";

  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const loginUserButton = document.getElementById("signinBtn");
  const signUpUserButton = document.getElementById("signupBtn");
  const newUserPassword = document.getElementById("newUserPassword");
  const newUserEmail = document.getElementById("newUserEmail");
  const newUsername = document.getElementById("newUsername");
  const UserEmail = document.getElementById("UserEmail");
  const UserPassword = document.getElementById("UserPassword");
  const container = document.querySelector(".container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  loginUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    logIn();
  });

  async function logIn() {
    try {
      const credentials = {
        email: UserEmail.value,
        password: UserPassword.value,
      };
      const response = await fetch(
        `https://byte-adept-3456.onrender.com/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );
      const data = await response.json();
      localStorage.setItem(
        "localAccessToken",
        JSON.stringify(data.accessToken)
      );
      localStorage.setItem("userId", JSON.stringify(data.user));
      console.log(data);
      alert("Successfully logged in");
      if (data.user.isAdmin == false) {
        window.location.href = `https://repo-jet-six.vercel.app/`;
      } else {
        window.location.href = `https://byte-adept-3456.vercel.app/frontend/index.html`;
      }
    } catch (error) {
      alert(error.message);
      console.error("Error:", error);
    }
  }

  signUpUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    SignUp();
  });

  async function SignUp() {
    const newObj = {
      name: newUsername.value,
      email: newUserEmail.value,
      password: newUserPassword.value,
      isAdmin: false,
    };
    try {
      const res = await fetch(`${baseServerURL}/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newObj),
      });

      if (!res.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      const data = await res.json();
      localStorage.setItem(
        "localAccessToken",
        JSON.stringify(data.accessToken)
      );
      localStorage.setItem("userId", JSON.stringify(data.user.id));
      window.location.href = `${baseServerURL}/index.html`;
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during sign-up.");
    }
  }
});

// async function SignUp() {
//   let newObj = {
//     name: newUsername.value,
//     email: newUserEmail.value,
//     password: newUserPassword.value,
//     isAdmin: false,
//   };
//   console.log(newObj);
//   try {
//     let res = await fetch("https://byte-adept-3456.onrender.com/users", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(newObj),
//     });
//     let data = await res.json();
//     console.log(data);
//     localStorage.setItem(
//       "localAccessToken",
//       JSON.stringify(data.accessToken)
//     );
//     localStorage.setItem("userId", JSON.stringify(data.user.id));
//     window.location.href = `${baseServerURL}/index.html`;
//   } catch (error) {
//     console.log(error);
//   }
// }
// });

// // Login Page JS Ends here

// // Signup page js starts here
// document.addEventListener("DOMContentLoaded", function () {
//   let nameInput = document.querySelector(".name-input");
//   let emailInput = document.querySelector(".email-input");
//   let passwordInput = document.querySelector(".pass-input");
//   let signupBtn = document.querySelector(".signup-btn");
//   let login = document.getElementById("login");
//   console.log(login);
//   login.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.location.href = ${baseURL}/pages/login.html;
//   });
//   signupBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("signup pressed");
//     signup();
//   });
//   async function SignUp() {
//     let newObj = {
//       name: nameInput.value,
//       email: emailInput.value,
//       password: passwordInput.value,
//       isAdmin: false,
//     };
//     console.log(newObj);
//     try {
//       let res = await fetch("https://hack-sculptress-6789.onrender.com/users", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(newObj),
//       });
//       let data = await res.json();
//       console.log(data);
//       localStorage.setItem(
//         "localAccessToken",
//         JSON.stringify(data.accessToken)
//       );
//       localStorage.setItem("userId", JSON.stringify(data.user.id));
//       window.location.href = ${baseURL}/index.html;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });

// // --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
// // const isDevelopment = window.location.hostname.includes("127.0.0.1");
// // let baseServerURL = isDevelopment
// //   ? "http://localhost:3000/"
// //   : "https://byte-adept-3456.onrender.com/";

// // // const baseServerURL = `http://localhost:4000`;
// // // --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
// // // const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
// // // const employeeURL = `${baseServerURL}/employees`;
// // const userRegisterURL = `https://byte-adept-3456.onrender.com/register`;
// // const userLoginURL = `https://byte-adept-3456.onrender.com/login`;
// // // let paginationWrapper = document.getElementById("pagination-wrapper");

// // let userAuthToken = localStorage.getItem("localAccessToken") || null;
// // let userId = +localStorage.getItem("userId") || null;
// // // // const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
// // // // const urlTodosBase = `${baseServerURL}/todos/`;

// // const sign_in_btn = document.querySelector("#sign-in-btn");
// // const sign_up_btn = document.querySelector("#sign-up-btn");
// // const container = document.querySelector(".container");

// // // sign_up_btn.addEventListener("click", () => {
// // //   container.classList.add("sign-up-mode");
// // // });

// // // sign_in_btn.addEventListener("click", () => {
// // //   container.classList.remove("sign-up-mode");
// // // });

// // // let loginUserButton = document.getElementById("signinBtn");
// // // let signUpUserButton = document.getElementById("signupBtn");

// // // let newUserPassword=document.getElementById("newUserPassword");
// // // let newUserEmail= document.getElementById("newUserEmail");
// // // let newUsername=document.getElementById("Username");
// // // let UserEmail=document.getElementById("UserEmail");
// // // let UserPassword=document.getElementById("UserPassword");

// // loginUserButton.addEventListener('click', () => {
// //   logIn();
// // });

// // async function logIn() {
// //   let email =  UserEmail.value;
// //   let password = UserPassword.value;
// //   if (email && password) {
// //       let credential = {
// //           "email": email,
// //           "password": password
// //       }
// //       try {
// //           let response = await fetch(userLoginURL, {
// //               method: 'POST',
// //               headers: {
// //                   'content-type': 'application/json',
// //               },
// //               body: JSON.stringify(credential),
// //           });

// //           let data = await response.json();

// //           if (typeof data === 'object') {

// //               console.log(data);
// //               // createToast('success');

// //               localStorage.setItem('userId', data.user.id);
// //               localStorage.setItem('localAccessToken', data.accessToken);

// //               if (data.user.isAdmin) {
// //                 console.log("Redirecting to admin page");
// //                 window.location.href =  `${baseURL}/admin.html`;
// //               } else {
// //                 console.log("Redirecting to user page");
// //                 window.location.href = `${baseURL}/index.html`;
// //               }
// //           }
// //           // else {
// //           //     createToast('error');
// //           // }

// //       } catch (error) {
// //           // createToast('error');
// //           console.log('Error : Some error occurred', error);
// //       }
// //   }

// //   // else {
// //   //     createToast('error');
// //   // }
// // }
// // // async function logIn() {
// // //   try {
// // //     let obj = {
// // //       "email": UserEmail.value,
// // //       "password": UserPassword.value,
// // //     };

// // //     let res = await fetch(userLoginURL, {
// // //       method: "POST",
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(obj)
// // //     });
// // //     let data = await res.json();
// // //     console.log("Login response:", data);

// // //     // Check if user data contains isAdmin property
// // //     if (data && data.user && typeof data.user.isAdmin === 'boolean') {
// // //       // Store access token and user ID in local storage
// // //       localStorage.setItem('localAccessToken', data.accessToken);
// // //       localStorage.setItem('userId', JSON.stringify(data.user.id));

// // //       // Redirect based on isAdmin property
// // //       if (data.user.isAdmin) {
// // //         console.log("Redirecting to admin page");
// // //         window.location.href = "../admin.html";
// // //       } else {
// // //         console.log("Redirecting to user page");
// // //         window.location.href = '../index.html';
// // //       }
// // //     } else {
// // //       console.error("Invalid user data:", data);
// // //       // Redirect to an error page or display an error message
// // //       window.location.href = '../error.html';
// // //     }
// // //   } catch (err) {
// // //     console.error("Login error:", err);
// // //     // Redirect to an error page or display an error message
// // //     window.location.href = '../error.html';
// // //   }
// // // }

// // async function SignUp() {
// //   try {
// //     let obj = {
// //       "username": newUsername.value,
// //       "email":newUserEmail.value,
// //       "password":newUserPassword.value,
// //       "isAdmin":false
// //     };

// //     let res = await fetch(userRegisterURL, {
// //       method: "POST",
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(obj)
// //     });
// //     let data = await res.json();
// //     console.log(data)
// //   } catch (err) {
// //     console.log(err);
// //   }
// //   }
// //   signUpUserButton.addEventListener("click",()=>{
// //     SignUp();
// //   })

// // // // --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
// // // const isDevelopment = window.location.hostname.includes("127.0.0.1");
// // // let baseServerURL = isDevelopment
// // //   ? "http://localhost:3000/"
// // //   : "https://byte-adept-3456.onrender.com/";

// // // // const baseServerURL = `http://localhost:4000`;
// // // // --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------
// // // // const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
// // // // const employeeURL = `${baseServerURL}/employees`;
// // // const userRegisterURL = `https://byte-adept-3456.onrender.com/register`;
// // // const userLoginURL = `https://byte-adept-3456.onrender.com/login`;
// // // // let paginationWrapper = document.getElementById("pagination-wrapper");

// // // let userAuthToken = localStorage.getItem("localAccessToken") || null;
// // // let userId = +localStorage.getItem("userId") || null;
// // // // // const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
// // // // // const urlTodosBase = `${baseServerURL}/todos/`;

// // // const sign_in_btn = document.querySelector("#sign-in-btn");
// // // const sign_up_btn = document.querySelector("#sign-up-btn");
// // // const container = document.querySelector(".container");

// // // sign_up_btn.addEventListener("click", () => {
// // //   container.classList.add("sign-up-mode");
// // // });

// // // sign_in_btn.addEventListener("click", () => {
// // //   container.classList.remove("sign-up-mode");
// // // });

// // // let loginUserButton = document.getElementById("signinBtn");
// // // let signUpUserButton = document.getElementById("signupBtn");

// // // let newUserPassword=document.getElementById("newUserPassword");
// // // let newUserEmail= document.getElementById("newUserEmail");
// // // let newUsername=document.getElementById("Username");
// // // let UserEmail=document.getElementById("UserEmail");
// // // let UserPassword=document.getElementById("UserPassword");

// // // loginUserButton.addEventListener('click', () => {
// // //   logIn();
// // // });

// // // async function logIn() {
// // //   let email =  UserEmail.value;
// // //   let password = UserPassword.value;
// // //   if (email && password) {
// // //       let credential = {
// // //           "email": email,
// // //           "password": password
// // //       }
// // //       try {
// // //           let response = await fetch(userLoginURL, {
// // //               method: 'POST',
// // //               headers: {
// // //                   'content-type': 'application/json',
// // //               },
// // //               body: JSON.stringify(credential),
// // //           });

// // //           let data = await response.json();

// // //           if (typeof data === 'object') {

// // //               console.log(data);
// // //               // createToast('success');

// // //               localStorage.setItem('userId', data.user.id);
// // //               localStorage.setItem('localAccessToken', data.accessToken);

// // //               if (data.user.isAdmin) {
// // //                 console.log("Redirecting to admin page");
// // //                 window.location.href =  `${baseURL}/admin.html`;
// // //               } else {
// // //                 console.log("Redirecting to user page");
// // //                 window.location.href = `${baseURL}/index.html`;
// // //               }
// // //           }
// // //           // else {
// // //           //     createToast('error');
// // //           // }

// // //       } catch (error) {
// // //           // createToast('error');
// // //           console.log('Error : Some error occurred', error);
// // //       }
// // //   }

// // //   // else {
// // //   //     createToast('error');
// // //   // }
// // // }
// // // // async function logIn() {
// // // //   try {
// // // //     let obj = {
// // // //       "email": UserEmail.value,
// // // //       "password": UserPassword.value,
// // // //     };

// // // //     let res = await fetch(userLoginURL, {
// // // //       method: "POST",
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify(obj)
// // // //     });
// // // //     let data = await res.json();
// // // //     console.log("Login response:", data);

// // // //     // Check if user data contains isAdmin property
// // // //     if (data && data.user && typeof data.user.isAdmin === 'boolean') {
// // // //       // Store access token and user ID in local storage
// // // //       localStorage.setItem('localAccessToken', data.accessToken);
// // // //       localStorage.setItem('userId', JSON.stringify(data.user.id));

// // // //       // Redirect based on isAdmin property
// // // //       if (data.user.isAdmin) {
// // // //         console.log("Redirecting to admin page");
// // // //         window.location.href = "../admin.html";
// // // //       } else {
// // // //         console.log("Redirecting to user page");
// // // //         window.location.href = '../index.html';
// // // //       }
// // // //     } else {
// // // //       console.error("Invalid user data:", data);
// // // //       // Redirect to an error page or display an error message
// // // //       window.location.href = '../error.html';
// // // //     }
// // // //   } catch (err) {
// // // //     console.error("Login error:", err);
// // // //     // Redirect to an error page or display an error message
// // // //     window.location.href = '../error.html';
// // // //   }
// // // // }

// // // async function SignUp() {
// // //   try {
// // //     let obj = {
// // //       "username": newUsername.value,
// // //       "email":newUserEmail.value,
// // //       "password":newUserPassword.value,
// // //       "isAdmin":false
// // //     };

// // //     let res = await fetch(userRegisterURL, {
// // //       method: "POST",
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(obj)
// // //     });
// // //     let data = await res.json();
// // //     console.log(data)
// // //   } catch (err) {
// // //     console.log(err);
// // //   }
// // //   }
// // //   signUpUserButton.addEventListener("click",()=>{
// // //     SignUp();
// // //   })
