
import { startGestureControl } from "../gesture/gesture.js";

const player = document.getElementById("player");
const output = document.getElementById("gestureOutput");

function handleGesture(gestureData) {
    const gesture = gestureData.gesture;

    console.log("Received gesture:", gestureData);

    switch (gesture) {
        case "Open_Palm":
            if (player.paused) {
                player.play();
                output.textContent = "Action: Playing video";
            } else {
                player.pause();
                output.textContent = "Action: Paused video";
            }
            break;

        case "Closed_Fist":
            player.muted = !player.muted;
            output.textContent = player.muted
                ? "Action: Muted"
                : "Action: Unmuted";
            break;

        case "Thumb_Up":
            player.volume = Math.min(1, player.volume + 0.1);
            output.textContent = "Action: Volume increased";
            break;

        case "Thumb_Down":
            player.volume = Math.max(0, player.volume - 0.1);
            output.textContent = "Action: Volume decreased";
            break;

        case "Pointing_Up":
            player.currentTime = Math.min(
                player.duration || Infinity,
                player.currentTime + 10
            );
            output.textContent = "Action: Forward 10 seconds";
            break;

        case "ILoveYou":
            player.currentTime = Math.max(
                0,
                player.currentTime - 10
            );
            output.textContent = "Action: Rewind 10 seconds";
            break;

        default:
            output.textContent = "Unmapped gesture: " + gesture;
    }
}

// Start recognition when the button is clicked
document.getElementById("startButton").addEventListener("click", () => {
    startGestureControl(handleGesture);
});
