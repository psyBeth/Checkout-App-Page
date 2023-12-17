//! Constants

//! Selectors
const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

//! Events
//? Delete Products button event
deleteProducts.addEventListener("click", (e) => {
    if(confirm("Are you sure you want to delete products?")){
        products.textContent = "No product"
        products.classList.add("no-product")
        document.querySelector(".delete-div").style.display = "none"
    }
});

products.addEventListener("click", (e) => {
    console.log(e.target);

    // if(e.target.classList.contains("fa-minus")){
    //     alert("minus")
    // } else if (e.target.classList.contains("fa-plus")){
    //     alert("plus")
    // } else if (e.target.classList.contains("fa-trash-can")){
    //     alert("remove")
    // } else {
    //     alert("other")
    // }

    if(e.target.classList.contains("fa-plus")){
       // document.getElementById("quantity").innerText++
       e.target.previousElementSibling.innerText++
       calculateProductPrice(e.target)   
    } else if (e.target.classList.contains("fa-minus")){
        if(e.target.nextElementSibling.innerText > 1){
            e.target.nextElementSibling.innerText--
            calculateProductPrice(e.target)
        }
    } else if (e.target.classList.contains("fa-trash-can")) {
        e.target.closest(".product").remove()
        calculateTotalPrice()
    }
})
const calculateProductPrice = (btn) => {
    const discountedPrice = btn
        .closest(".product-info")
        .querySelector("#discounted-price").textContent

    const quantity = btn
        .closest(".buttons-div")
        .querySelector("#quantity").textContent

    const productPrice = btn
        .closest(".buttons-div")
        .querySelector("#product-price")

    productPrice.textContent = discountedPrice * quantity
}

