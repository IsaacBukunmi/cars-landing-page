const carModels = document.querySelectorAll('.car-model')
const topButton = document.querySelector(".top-button");
const hamburgerMenu = document.getElementById("hamburger-menu");
const navList = document.querySelector(".nav-list");


//Function to toggle mobile menu
const toggleMenu = () => {
    navList.classList.toggle('toggle');
}

//Funtion to dynamically create navigation based on the number of sections
const createDynamicNavigation = () => {
    for(i=0; i<carModels.length; i++){
        const getCarModelId = carModels[i].getAttribute('id');
        const linkName = getCarModelId.replace('-', ' ') //Replace any '-' present in the id with space
        const navItems =  `
            <li><a class="car-link" id="${getCarModelId}-link">${linkName}</a></li>
        `
        navList.innerHTML += navItems
    }
    navList.children[0].children[0].classList.add('active') //Adding active class to the first nav link
}

createDynamicNavigation() //Calling function after DOM renders


const carLinks = document.querySelectorAll(".car-link") 

//Each link to scroll to the appropiate section element 
carLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const elementId = e.target.id.slice(0, (e.target.id.length - 5)) //Get Section Element ID using slice
        document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
    })
})  


//Function to check if element is in viewport
const checkCurrentElement = () => {
    currentElement = ""
    const verticalPageOffset = pageYOffset // Get distance page has moved from the top
    carModels.forEach((model) => {
        const modelTopOffset = model.offsetTop // Get distance of an element from the top
        const quarterModelHeight = (model.clientHeight/4)
        if(verticalPageOffset >= modelTopOffset - quarterModelHeight){
            currentElement = model.getAttribute('id') 
            model.classList.add('active')   
        }else{
            model.classList.remove('active')    
        }
    })
    
    carLinks.forEach((link) => {
        currentLink = link.getAttribute('id') // Get id of link and compares with current element in view
        if(`${currentElement}-link` == currentLink){
            link.classList.add('active')
        }else{
            link.classList.remove('active')
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



