
import { startGestureControl } from "/gesture/gesture.js";
import { processGesture } from "./commandProcessor.js";

// This function will eventually be provided by
// your frontend teammate's video player.
function handleCommand(command) {
    console.log("FINAL VIDEO COMMAND:", command);
}

// Receives confirmed gestures from Ritu's recognizer.
function handleGesture(gestureData) {
    console.log("WEBCAM GESTURE RECEIVED:", gestureData);

    processGesture(gestureData, handleCommand);
}

// Start webcam recognition when the button is clicked.
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("connectButton");

    if (startButton) {
        startButton.addEventListener("click", () => {
            console.log("Starting HANDSPEAK gesture control...");
            startGestureControl(handleGesture);
        });
    }
});
