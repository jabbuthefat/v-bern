// Function to be executed when the observed element enters the viewport

/**
 * adds the animate-left class and removes the to-be-animated class (also visibility from hidden to visible)
 * @param entries to be searched for and changed
 * @param observer left or right observer
 */
function addClassAnimationLeft(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('animate-left'); // Add the 'animate-left' class when element is in view
            entry.target.classList.remove('to-be-animated-left'); // Add the 'animate-left' class when element is in view

            observer.unobserve(entry.target); // Stop observing once class is added
        }
    });
}

/**
 * adds the animate-right class and removes the to-be-animated class (also visibility from hidden to visible)
 * @param entries to be searched for and changed
 * @param observer left or right observer
 */
function addClassAnimationRight(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('animate-right'); // Add the 'animate-left' class when element is in view
            entry.target.classList.remove('to-be-animated-right'); // Add the 'animate-right' class when element is in view

            observer.unobserve(entry.target); // Stop observing once class is added
        }
    });
}

// Options for the Intersection Observer
const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.1 // 10% of the element must be visible
};

// Create a new Intersection Observer for Left
const leftObserver = new IntersectionObserver(addClassAnimationLeft, options);
const rightObserver = new IntersectionObserver(addClassAnimationRight, options);

// Select the element to observe
const leftAnimated = document.querySelectorAll('.to-be-animated-left');

const rightAnimated = document.querySelectorAll('.to-be-animated-right');

// Start observing the element
leftAnimated.forEach(LA =>{
    leftObserver.observe(LA);
} )
rightAnimated.forEach(RA =>{
    rightObserver.observe(RA);
} )


