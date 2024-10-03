document.getElementById('skills-button').addEventListener('click', function(event) {
    event.preventDefault();

    // Scroll to the skills section
    const skillsSection = document.getElementById('skills-selection');
    skillsSection.scrollIntoView({ behavior: 'smooth' });

    skillsSection.classList.add('animate');

    // setTimeout(function() {
    //     const skillBars = document.querySelectorAll('.skill-per');
    //     skillBars.forEach(bar => {
    //         bar.style.width = '0'; // Reset width to 0
    //         bar.offsetHeight; // Trigger reflow

    //         // Set the final width first
    //         bar.style.width = bar.getAttribute('data-per'); // Set width to the data-per value

    //         // Add the animation class
    //         bar.classList.add('fill-animation');
    //     });
    // }, 500); // Adjust this delay as needed
});