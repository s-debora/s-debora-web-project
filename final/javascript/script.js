console.log("GreenTech Solutions webpage has loaded successfully.");

const searchInput = document.getElementById("searchProduct");
const products = document.querySelector(".product-content");
 
 if (searchInput) {
    searchInput.addEventListener("keyup", function() {
        const searchText = searchInput.ariaValueMax.toLowerCase();
        products.forEach(function(product) {
            const productText = product.textContent.toLowerCase();
            if(product.includes(searchText)){
                product.style.display = "block"; 
        }
        else {
            product.style.display = "none";
        }    
        });

    });
}
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        formMessage.textContent = "Thank you for your submission! We will contact you soon!";
        contactForm.requestFullscreen();
    });
}
