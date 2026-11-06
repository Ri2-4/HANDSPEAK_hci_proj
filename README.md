# HANDSPEAK – Gesture-Controlled Video Player

A web-based video player that allows users to control video playback using simple hand gestures through their webcam. The project aims to make video interaction more natural, accessible, and hands-free.

## 📌 Project Overview

HANDSPEAK is a Human-Computer Interaction (HCI) project. It uses hand gesture recognition to perform common video playback actions without requiring a keyboard or mouse.

Users will be able to select videos from a preloaded video library and control playback using gestures detected by their webcam.

## ✨ Features

- Preloaded video library
- Play and pause videos using hand gestures
- Forward and rewind videos by 10 seconds
- Increase and decrease volume
- Mute and unmute videos
- Webcam-based hand gesture recognition
- On-screen gesture status and feedback
- Manual video controls as an alternative

## 🖐️ Gesture Controls

| Hand Gesture | MediaPipe Gesture | Action |
|---|---|---|
| Open Palm ✋ | `Open_Palm` | Play / Pause |
| Closed Fist ✊ | `Closed_Fist` | Mute / Unmute |
| Thumb Up 👍 | `Thumb_Up` | Increase Volume |
| Thumb Down 👎 | `Thumb_Down` | Decrease Volume |
| Pointing Up ☝️ | `Pointing_Up` | Forward 10 seconds |
| I Love You 🤟 | `ILoveYou` | Rewind 10 seconds |

## 🛠️ Technologies Used

- **HTML** – Website structure
- **CSS** – Styling and layout
- **JavaScript** – Video controls and gesture processing
- **MediaPipe** – Hand gesture recognition
- **Webcam API** – Accessing the user's camera
- **Python Flask** – Serving website pages and video files
- **Git & GitHub** – Version control and collaboration

## 📂 Project Structure

```text
HANDSPEAK_hci_proj/
│
├── app.py
├── requirements.txt
├── README.md
│
├── gesture/
│   ├── gesture.js
│   └── test.html
│
├── integration-test/
│   ├── player-test.html
│   ├── player-test.js
│   ├── sample.mp4
│   └── sample2.mp4
│
├── templates/
│   ├── index.html
│   ├── gesture-test.html
│   └── test-commands.html
│
└── static/
    ├── css/
    ├── js/
    │   ├── commandProcessor.js
    │   ├── gestureIntegration.js
    │   └── testCommands.js
    │
    └── videos/
```

## ⚙️ Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ri2-4/HANDSPEAK_hci_proj.git
cd HANDSPEAK_hci_proj
```

### 2. Create a virtual environment

```bash
python3 -m venv .venv
```

Activate it:

**Mac/Linux:**
```bash
source .venv/bin/activate
```

**Windows:**
```bash
.venv\Scripts\activate
```

### 3. Install dependencies

```bash
python -m pip install -r requirements.txt
```

### 4. Run the Flask application

```bash
python app.py
```

### 5. Open the website

Visit:

```text
http://127.0.0.1:5001
```

To test webcam gesture integration, visit:

```text
http://127.0.0.1:5001/gesture-test
```

Allow webcam access when prompted.

## 🔄 How It Works

1. The user opens the HANDSPEAK website.
2. The user selects a preloaded video.
3. The browser requests webcam access.
4. MediaPipe recognizes hand gestures in the browser.
5. The gesture recognition module sends confirmed gesture data through a callback.
6. The command processor maps the gesture to a standard video command.
7. The video player receives the command and performs the corresponding action.

## 🔗 Integration Format

The gesture recognition module sends gesture data in this format:

```javascript
{
    gesture: "Thumb_Up",
    confidence: 0.9
}
```

The command processor converts it into a standard command:

```javascript
{
    gesture: "Thumb_Up",
    action: "VOLUME_UP",
    value: 0.1
}
```

The video player will receive the command through:

```javascript
function handleCommand(command) {
    // Execute the corresponding video action
}
```

The integration flow is:

```text
gesture.js
    ↓
processGesture()
    ↓
handleCommand()
    ↓
HTML5 Video Player
```

## ⚠️ Notes

- Webcam permission is required for gesture controls.
- Use a modern browser such as Google Chrome.
- Gesture recognition runs in the browser using JavaScript and MediaPipe.
- Flask serves the website and video files; it does not process webcam frames.
- Gesture recognition requires a hand to be visible to the webcam.
- Manual controls remain available as an alternative.

## 🎯 Project Goal

To explore how natural hand gestures can improve human-computer interaction by making everyday video playback more intuitive, accessible, and hands-free.

---

**Project Type:** Human-Computer Interaction (HCI)  
**Status:** In Development