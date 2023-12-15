const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

//? Delete Products button event
deleteProducts.addEventListener("click", () => {
    if(confirm("are you sure you want to delete products?")){
        products.textContent = "No product"
        products.classList.add("no-product")
        document.querySelector(".delete-div").style.display = "none"
    }
});