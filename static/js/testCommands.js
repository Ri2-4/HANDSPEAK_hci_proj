import { processGesture } from "./commandProcessor.js";

function testHandleCommand(command) {
    console.log("PLAYER RECEIVED:", command);
}

const testGestures = [
    "Open_Palm",
    "Closed_Fist",
    "Thumb_Up",
    "Thumb_Down",
    "Pointing_Up",
    "ILoveYou"
];

testGestures.forEach((gesture) => {
    processGesture(
        { gesture: gesture, confidence: 0.9 },
        testHandleCommand
    );
});