
import { startGestureControl } from "../gesture/gesture.js";

const player = document.getElementById("player");
const output = document.getElementById("gestureOutput");

function handleGesture(gestureData) {
    const gesture = gestureData.gesture;

    console.log("Received gesture:", gestureData);
    console.log("Gesture received:", gesture);
    console.log("Video time before action:", player.currentTime);
    console.log("Video duration:", player.duration);
    console.log("Video readyState:", player.readyState);
    console.log("Video seeking:", player.seeking);
    console.log("Seekable ranges:", player.seekable.length);

    for (let i = 0; i < player.seekable.length; i++) {
    console.log(
        "Seekable range:",
        player.seekable.start(i),
        "to",
        player.seekable.end(i)
    );
    }

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
            console.log("FORWARD action triggered");
            player.currentTime = Math.min(
                player.duration || Infinity,
                player.currentTime + 10
            );
            console.log("Video time after action:", player.currentTime);
            output.textContent = "Action: Forward 10 seconds";
            break;

        case "ILoveYou":
            console.log("REWIND action triggered");
            player.currentTime = Math.max(
                0,
                player.currentTime - 10
            );
            console.log("Video time after action:", player.currentTime);
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
