
// !contants

const SHIPPING_PRICE = 25.99;
const FREE_SHIPPING_LIMIT = 3000;
const TAX_RATE = 0.18;

 //   if (e.target.classList.contains("fa-minus")) {
  //     alert("minus")
  //   } else if (e.target.classList.contains("fa-plus")) {
  //     alert("plus")
  //   } else if (e.target.classList.contains("fa-trash-can")) {
  //     alert("remove")
  //   } else {
  //     alert("diger")
  //   }


// ! selectors 

const deleteProducts =document.querySelector(".delete-div .fa-trash-can");
const products = document.querySelector(".products");

// !events

deleteProducts.addEventListener("click", function(event){
    if(confirm("Are you sure ?")){
        // products.textContent= "- No Product -";
        // products.classList.add("no-product");
        // // document.querySelector(".delete-div").style.display="none";
        // event.target.parentElement.style.display="none";
        noproductCheck();
        calculateTotalPrice();

    }

})

products.addEventListener("click", function(e) {
    console.log(e.target);

    if(e.target.classList.contains("fa-plus")){
        e.target.previousElementSibling.innerText++;

        calculateProductPrice(e.target);

    }else if(e.target.classList.contains("fa-minus")){
        e.target.nextElementSibling.innerText > 1 &&
        e.target.nextElementSibling.innerText--;

        calculateProductPrice(e.target);
          
    }else if(e.target.classList.contains("fa-trash-can")){
        e.target.closest(".product").remove()
        calculateTotalPrice()
    }
  
})


const calculateProductPrice = (btn) => {
   const discountedPrice =btn
   .closest(".product-info")
   .querySelector("#discounted-price").textContent

   const quantity = btn
   .closest(".buttons-div")
   .querySelector("#quantity").textContent;
   
   const productPrice = btn
   .closest(".buttons-div")
   .querySelector("#product-price");


   productPrice.textContent = (quantity*discountedPrice).toFixed(2);

   calculateTotalPrice()
}

const calculateTotalPrice= () => {
    const prices = document.querySelectorAll("#product-price");

// ! select toplam hesabı
    const subtotal = 
    [...prices].reduce((sum , pri) => sum + Number(pri.textContent), 0)

// ! kargo bedeli
    const shippingPrice =
     subtotal >= FREE_SHIPPING_LIMIT || subtotal === 0 ? 0 : SHIPPING_PRICE;
// ! vergi bedeli
    const taxPrice= 
     subtotal * TAX_RATE
// ! toplam tutar
    const totalPrice = subtotal + shippingPrice + taxPrice; 

// ! hesaplanan değerlerin dom a basılması
    document.getElementById("selected-price").innerHTML = subtotal.toFixed(2);
    document.getElementById("shipping").textContent = shippingPrice.toFixed(2);
    document.getElementById("tax").textContent = taxPrice.toFixed(2);
    document.getElementById("total").textContent= totalPrice.toFixed(2);

    !totalPrice && noproductCheck()
       

    
}

const noproductCheck = ()=>{
    products.textContent= "- No Product -";
    products.classList.add("no-product");
    document.querySelector(".delete-div").style.display="none";


}

window.addEventListener("load",()=>{
    calculateTotalPrice()
})