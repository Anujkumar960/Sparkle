let cartItem = JSON.parse(localStorage.getItem("cartItem")) || [];
let wishlistItem = JSON.parse(localStorage.getItem("wishlistItem")) || [];

let wishlistCards = document.getElementById("wishlistCards");
let initialwishlist = document.getElementById("initialwishlist");

let databaseArray = [
    {
      Title: "Beguiling 22 Karat Yellow Gold Overlapping Bell Jhumkas",
      Description:
        "Enchanting 22 Karat yellow gold jhumkas with a textured circular base,holding a textured bell bead trail, adorned with 2 ball hangings at the bottom",
      Type: "Jhumka",
      Weight: "5.580g",
      Price: 36137.0,
      DiscountPrice: 36000.0,
      Img: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
      ],
      Brand: "Tanishq",
    }
  ];

if (wishlistItem.length > 0) {
  initialwishlist.style.display = "none";
  appendData(wishlistItem);
} else {
  initialwishlist.style.display = "block";
}
/************************************************* */
// addData(databaseArray);

// function addData(data) {
//   data.forEach((item) => {
//     wishlistItem.push(item);
//   });
//   localStorage.setItem("wishlistItem", JSON.stringify(wishlistItem));
// }

/****************************************************** */


function appendData(data) {
  wishlistCards.innerHTML = "";
  data.forEach((item, index) => {
    let Card = createCard(item, index);
    // wishlistCards.append(Card);
    wishlistCards.innerHTML+=Card;
   
  });

}

function createCard(obj, index) {

  let card = `
            <div class="wishlist_card">
                <img src="${obj.Img[0]}" alt="img">
                
                <div class="wishlist_card_p">
                    <p class="truncat-text">${obj.Title}</p>
                    <p>&#x20b9; ${obj.Price}</p>
                </div>
                <div id="actionBtn">
                  <button id=removeWishlist><i class="fa-regular fa-trash-can"></i></button>
                  <button class="wishlist_addtocart">
                      Move To Cart
                  </button>
                </div>
            </div>`;


            
  return card;
}


let removeWishlist=document.getElementById("removeWishlist");
let wishlist_addtocart=document.getElementsByClassName("wishlist_addtocart");


removeWishlist.addEventListener("click", (e) => {
       
  let wishlistItem = JSON.parse(localStorage.getItem("wishlistItem")) || [];
  wishlistItem.splice(index, 1);
  localStorage.setItem("wishlistItem", JSON.stringify(wishlistItem));
  
  appendData(wishlistItem);
});


// for (let i = 0; i < removeWishlistButtons.length; i++) {
//   removeWishlistButtons[i].addEventListener("click", (e) => {
//     let index = e.target.getAttribute("data-index");
//     let wishlistItem = JSON.parse(localStorage.getItem("wishlistItem")) || [];
//     wishlistItem.splice(index, 1);
//     localStorage.setItem("wishlistItem", JSON.stringify(wishlistItem));
//     appendData(wishlistItem);
//   });
// }
// wishlist_addtocart.addEventListener("click", (e) => {
 
//   let wishlistItem = JSON.parse(localStorage.getItem("wishlistItem"))||[];
//   let cartItem = JSON.parse(localStorage.getItem("cartItem")) || []
//   let obj = wishlistItem.splice(index,1);
//   cartItem.push(...obj);
  

//   localStorage.setItem("wishlistItem",JSON.stringify(wishlistItem));
//   localStorage.setItem("cartItem",JSON.stringify(cartItem));
//   appendData(wishlistItem);
// });



// localStorage.setItem("wishlistItem", JSON.stringify(databaseArray));