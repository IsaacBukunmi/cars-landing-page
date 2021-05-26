const carModels = document.querySelectorAll('.car-model')
const topButton = document.querySelector(".top-button");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.querySelector(".nav-list");


//Dynamic Navigation
const createDynamicNavigation = () => {
    for(i=0; i<carModels.length; i++){
        const getCarModelId = carModels[i].getAttribute('id');
        const linkName = getCarModelId.replace('-', ' ') //Replace any - present in id with space
        const navItems =  `
            <li><a  href="#${getCarModelId}" class="car-link" id="${getCarModelId}-link">${linkName}</a></li>
        `
        navList.innerHTML += navItems
    }
    navList.children[0].children[0].classList.add('active') //Adding active class to the first nav link
}

createDynamicNavigation() //Calling function after DOM renders

//Function to toggle mobile menu
const toggleMenu = () => {
    navList.classList.toggle('toggle');
}

//Function to check if element is in viewport
const checkCurrentElement = () => {
    currentElement = ""
    const verticalPageOffset = pageYOffset // Get distance page has moved from the top
    carModels.forEach((model) => {
        const modelTopOffset = model.offsetTop // Get distance of an element from the top
        const quaterModelHeight = (model.clientHeight/4)
        if(verticalPageOffset >= modelTopOffset - quaterModelHeight){
            currentElement = model.getAttribute('id')      
        }
    })
    const carLinks = document.querySelectorAll(".car-link") 
    carLinks.forEach((link) => {
        currentLink = link.getAttribute('id') // Get id of link and compares with current element in view
        if(`${currentElement}-link` == currentLink){
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    })  
}

//Function to scroll to section
const scrollToSection = () => {
    carModels.forEach((model) => {
        const modelTopOffset = model.offsetTop
        window.scrollTo({
            top: modelTopOffset,
            behavior: 'smooth'
        })
    })
}

// carLinks.forEach((link) => {
//     console.log(link)
//     link.addEventListener('click', scrollToSection)
// })  

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



