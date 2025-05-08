// Toggle notes when pressing /
(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is '/' (keyCode 47)
        if (event.key === '/' || event.keyCode === 47) {
            // Prevent the default action of the '/' key (e.g., quick find)
            event.preventDefault();

            // Select the target element
            const pencilButton = document.querySelector("#game-controls > div:nth-child(3) > div.game-controls-item.game-controls-pencil");

            // Check if the element exists
            if (pencilButton) {
                // Create a new MouseEvent for mousedown
                const mouseDownEvent = new MouseEvent('mousedown', {
                    bubbles: true,
                    cancelable: true,
                    view: window,
                    button: 0, // 0 for left button, 1 for middle, 2 for right
                    buttons: 1, // Indicates which buttons are pressed (1 for left)
                    clientX: pencilButton.getBoundingClientRect().left + pencilButton.offsetWidth / 2,
                    clientY: pencilButton.getBoundingClientRect().top + pencilButton.offsetHeight / 2,
                    screenX: pencilButton.getBoundingClientRect().left + pencilButton.offsetWidth / 2,
                    screenY: pencilButton.getBoundingClientRect().top + pencilButton.offsetHeight / 2,
                    pageX: window.pageXOffset + pencilButton.getBoundingClientRect().left + pencilButton.offsetWidth / 2,
                    pageY: window.pageYOffset + pencilButton.getBoundingClientRect().top + pencilButton.offsetHeight / 2,
                });

                // Dispatch the mousedown event to the target element
                pencilButton.dispatchEvent(mouseDownEvent);
            } else {
                console.log("Pencil button element not found.");
            }
        }
    });
})();