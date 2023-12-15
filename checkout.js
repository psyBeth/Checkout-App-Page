const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

//? Delete Products button event
deleteProducts.addEventListener("click", () => {
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
       e.target.addEventListener.previousElementSibling.innerText++
    }


})