
import {
    GestureRecognizer,
    FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/vision_bundle.mjs";

const video = document.getElementById("webcam");
const output = document.getElementById("gestureOutput");
const startButton = document.getElementById("startButton");

let recognizer = null;
let lastVideoTime = -1;
let cameraStarted = false;

const CONFIDENCE_THRESHOLD = 0.60;
const REQUIRED_FRAMES = 5;

let currentGesture = null;
let frameCount = 0;
let gestureLocked = false;
let onGestureCallback = null;

async function startCamera() {
    if (cameraStarted) return;

    cameraStarted = true;

    try {
        output.textContent = "Loading MediaPipe...";

        const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );

        recognizer = await GestureRecognizer.createFromOptions(vision, {
            baseOptions: {
                modelAssetPath:
                    "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task"
            },
            runningMode: "VIDEO",
            numHands: 1
        });

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        video.srcObject = stream;

        video.addEventListener("loadeddata", () => {
            output.textContent = "Camera started! Show your hand.";
            detectGestures();
        }, { once: true });

    } catch (error) {
        console.error(error);
        output.textContent = "Error: " + error.message;
        cameraStarted = false;
    }
}

function resetGesture() {
    currentGesture = null;
    frameCount = 0;
    gestureLocked = false;
}

function detectGestures() {
    if (!recognizer || video.readyState < 2) {
        requestAnimationFrame(detectGestures);
        return;
    }

    if (video.currentTime !== lastVideoTime) {
        lastVideoTime = video.currentTime;

        const results = recognizer.recognizeForVideo(
            video,
            performance.now()
        );

        if (
            results.gestures.length > 0 &&
            results.gestures[0].length > 0
        ) {
            const prediction = results.gestures[0][0];
            const detected = prediction.categoryName;
            const confidence = prediction.score;

            console.log("Detected:", detected, "Confidence:", confidence);

            if (
                confidence < CONFIDENCE_THRESHOLD ||
                detected === "None"
            ) {
                resetGesture();
                output.textContent = "No gesture detected";

            } else if (gestureLocked) {
                output.textContent =
                    detected + " - Already triggered. Release to rearm.";

            } else {
                if (detected === currentGesture) {
                    frameCount++;
                } else {
                    currentGesture = detected;
                    frameCount = 1;
                }

                output.textContent =
                    "Recognizing " + detected +
                    " (" + frameCount + "/" + REQUIRED_FRAMES + ")";

                if (frameCount >= REQUIRED_FRAMES) {
                    gestureLocked = true;

                    output.textContent = "Confirmed: " + detected;

                    const gestureData = {
                        gesture: detected,
                        confidence: confidence
                    };

                    console.log("Confirmed gesture:", gestureData);

                    if (onGestureCallback) {
                        onGestureCallback(gestureData);
                    }
                }
            }

        } else {
            resetGesture();
            output.textContent = "No hand detected";
        }
    }

    requestAnimationFrame(detectGestures);
}

// Function Priyanshi can call during integration
export function startGestureControl(onGesture) {
    onGestureCallback = onGesture;
    startCamera();
}

// Button used by your individual test page
if (startButton) {
    startButton.addEventListener("click", startCamera);
}
