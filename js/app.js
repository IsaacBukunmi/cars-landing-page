const carModels = document.getElementsByClassName('car-model')
const carLinks = document.getElementsByClassName("car-link")
const carModelElement = document.getElementById("hyundai");
const carModelElementHeight = carModelElement.offsetHeight;
const carModelElementWidth = carModelElement.offsetWidth;
const topButton = document.querySelector(".top-button");


//Helper Function to check if Element is in view point
const isInViewPort = (el) => {
    const rect = el.getBoundingClientRect();
    const viewportWidth = (window.innerWidth || document.documentElement.clientWidth);
    const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (       
        rect.top >= -carModelElementHeight && rect.left >= -carModelElementWidth && rect.bottom <= viewportHeight+carModelElementHeight && rect.right <= viewportWidth+carModelElementWidth
    )
}

const checkCurrentElement = () => {
    const verticalPageOffset = pageYOffset
    console.log(verticalPageOffset)
}

// Function to add active class to element in view.
const checkElementInView = () => {
    for(i=0; i<carModels.length; i++){
        if(isInViewPort(carModels[i])){ 
            // console.log("Element is in view point")
            for(j=0; j<carLinks.length; j++){
                carLinks[i].classList.add('active')
            }
        }else{
            for(j=0; j<carLinks.length; j++){
                // console.log("Element isn't in view point")
                carLinks[i].classList.remove('active')
            }
        }
    }
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

window.addEventListener('scroll', checkElementInView)
window.addEventListener('scroll', showScrollToTopButton)
window.addEventListener('scroll', checkCurrentElement)
topButton.addEventListener('click', scrollToTop)



