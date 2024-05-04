const lights = document.querySelectorAll('#lights > div');
const startButton = document.getElementById('start');
const endButton = document.getElementById('end');

// Dark colors and light colors arrays
const darkColors = ['#c41611', '#fb3e38', '#ff6b67', '#ffa29f', '#EEEEEE'];
const lightColors = ['#EEEEEE', '#ffa29f', '#ff6b67', '#fb3e38', '#c41611'];

let isMovingRight = true; // Flag to track a direction of movement
let intervalId; // ID of the interval timer

// Function to start the movement
function startMovement() {
    let colors = isMovingRight ? darkColors : lightColors;

    intervalId = setInterval(() => {
        if (isMovingRight) {
            // Move colors to the right
            colors.unshift(colors.pop());
        } else {
            // Move colors to the left
            colors.push(colors.shift());
        }

        // Update the background color of each light
        lights.forEach((light, index) => {
            light.style.backgroundColor = colors[index];
        });
    }, 100);
}

// Function to stop the movement
function stopMovement() {
    clearInterval(intervalId);
}

// Event listeners for start and stop buttons
startButton.addEventListener('click', startMovement);
endButton.addEventListener('click', stopMovement);
