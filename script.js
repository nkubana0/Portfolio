document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const links = document.querySelectorAll('.navigation a');

    // Loop through each link
    links.forEach(link => {
        // Create a line element
        const line = document.createElement('div');
        line.classList.add('underline');

        // Append the line to the link
        link.appendChild(line);

        // Add event listener for mouseenter
        link.addEventListener('mouseenter', () => {
            // Animate the width of the line to match the width of the link's text content
            line.style.width = `${link.offsetWidth}px`;
            line.style.opacity = 1; // Show the line
        });

        // Add event listener for mouseleave
        link.addEventListener('mouseleave', () => {
            // Reset the width of the line
            line.style.width = '0';
            line.style.opacity = 0; // Hide the line
        });
    });
});
