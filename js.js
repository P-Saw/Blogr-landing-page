// MENU HAMBURGER TOGGLE//

const hamburgerBtn = document.querySelector('.menu-hamburger');
const navbar = document.querySelector('.nav');

hamburgerBtn.addEventListener('click', () =>{
        hamburgerBtn.classList.toggle('open');
        navbar.classList.toggle('nav-open')
});
// DESKTOP DROPDOWNS //
const navProduct = document.querySelector('.dd-product');
const navCompany = document.querySelector('.dd-company');
const navConnect = document.querySelector('.dd-connect');

const productDropdown = document.querySelector('.product');
const companyDropdown = document.querySelector('.company');
const connectDropdown = document.querySelector('.connect');

navProduct.addEventListener('click', () =>{
    if(companyDropdown.classList.contains("active")){
        companyDropdown.classList.toggle("active");
        navCompany.classList.toggle("rotate");
    } else if(connectDropdown.classList.contains("active")){
        connectDropdown.classList.toggle("active");
        navConnect.classList.toggle("rotate");
    }
    productDropdown.classList.toggle("active");
    navProduct.classList.toggle("rotate");
});
navCompany.addEventListener('click', () =>{
    if(productDropdown.classList.contains("active")){
        productDropdown.classList.toggle("active");
        navProduct.classList.toggle("rotate");
    } else if(connectDropdown.classList.contains("active")){
        connectDropdown.classList.toggle("active");
        navConnect.classList.toggle("rotate");
    }
    companyDropdown.classList.toggle("active");
    navCompany.classList.toggle("rotate");
});
navConnect.addEventListener('click', () =>{
    if(companyDropdown.classList.contains("active")){
        companyDropdown.classList.toggle("active");
        navCompany.classList.toggle("rotate");
    } else if(productDropdown.classList.contains("active")){
        productDropdown.classList.toggle("active");
        navProduct.classList.toggle("rotate");
    }
    connectDropdown.classList.toggle("active");
    navConnect.classList.toggle("rotate");
});
