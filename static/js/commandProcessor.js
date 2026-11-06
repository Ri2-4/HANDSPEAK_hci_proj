
const GESTURE_COMMANDS = {
    Open_Palm: {
        action: "TOGGLE_PLAY",
        value: null
    },
    Closed_Fist: {
        action: "TOGGLE_MUTE",
        value: null
    },
    Thumb_Up: {
        action: "VOLUME_UP",
        value: 0.1
    },
    Thumb_Down: {
        action: "VOLUME_DOWN",
        value: 0.1
    },
    Pointing_Up: {
        action: "FORWARD",
        value: 10
    },
    ILoveYou: {
        action: "REWIND",
        value: 10
    }
};

export function processGesture(gestureData, handleCommand) {
    if (!gestureData || !gestureData.gesture) {
        console.warn("Invalid gesture data");
        return;
    }

    const command = GESTURE_COMMANDS[gestureData.gesture];

    if (!command) {
        console.warn("Unmapped gesture:", gestureData.gesture);
        return;
    }

    const commandData = {
        gesture: gestureData.gesture,
        action: command.action,
        value: command.value
    };

    console.log("Command generated:", commandData);

    if (typeof handleCommand === "function") {
        handleCommand(commandData);
    }
}
