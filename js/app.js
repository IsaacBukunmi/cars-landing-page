const carModels = document.querySelectorAll('.car-model')
const carLinks = document.querySelectorAll(".car-link")
const topButton = document.querySelector(".top-button");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.querySelector(".nav-list");


//Function to toggle mobile menu

const toggleMenu = () => {
    navList.classList.toggle('toggle');
}

//Function to check if element is in viewport
const checkCurrentElement = () => {
    currentElement = ""
    const verticalPageOffset = pageYOffset
    carModels.forEach((model) => {
        const modelTopOffset = model.offsetTop
        const modelHeight = model.clientHeight
        console.log(modelHeight)
        if(verticalPageOffset >= modelTopOffset - (170)){
            currentElement = model.getAttribute('id')      
        }
    })
    carLinks.forEach((link) => {
        currentLink = link.getAttribute('id')
        if(`${currentElement}-link` == currentLink){
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    })  
}

// Function for showing scroll to top button
const showScrollToTopButton = () => {
    if(window.scrollY >= 100){
        topButton.style.display = 'block';
    }else{
        topButton.style.display = 'none';
    }
}

//Function to scroll window to top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        right: 0,
        behavior: 'smooth'
    })
}

//Event Listener
hamburgerMenu.addEventListener('click', toggleMenu)
window.addEventListener('scroll', showScrollToTopButton)
window.addEventListener('scroll', checkCurrentElement)
topButton.addEventListener('click', scrollToTop)



