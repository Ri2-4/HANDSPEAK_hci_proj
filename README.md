# HANDSPEAK_hci_proj
A web-based video player that allows users to control video playback using simple hand gestures through their webcam. The project aims to make video interaction more natural, accessible, and hands-free.

## 📌 Project Overview

The Gesture-Controlled Video Player is a Human-Computer Interaction (HCI) project. It uses hand gesture recognition to perform common video playback actions without requiring a keyboard or mouse.

Users can select a video from the website's preloaded video library and control it using gestures detected by their webcam.

## ✨ Features

- Preloaded video library.
- Play and pause videos using hand gestures.
- Forward and rewind videos by 10 seconds.
- Increase and decrease volume.
- Mute and unmute videos.
- Webcam-based hand gesture recognition.
- On-screen gesture status and feedback.
- Manual video controls as an alternative.

## 🖐️ Gesture Controls

| Hand Gesture     | Action             |
|------------------|--------------------|
| Open Palm 🖐️    | Play / Pause       |
| Pointing Up ☝️  | Forward 10 seconds |
| I Love You 🤟   | Rewind 10 seconds  |
| Thumb Up 👍     | Increase Volume    |
| Thumb Down 👎   | Decrease Volume    |
| Closed Fist ✊  | Mute / Unmute      |

## 🛠️ Technologies Used

- **HTML** – Website structure
- **CSS** – Styling and layout
- **JavaScript** – Video controls and gesture logic
- **MediaPipe** – Hand gesture recognition
- **Webcam API** – Accessing the user's camera
- **Python Flask** – Serving the website and video files
- **Git & GitHub** – Version control and collaboration

## 📂 Project Structure

## ⚙️ Setup and Installation

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd GesturePlayer
```

### 2. Create a virtual environment (recommended)

```bash
python -m venv venv
```

Activate it:

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Flask application

```bash
python app.py
```

### 5. Open the website

Visit:

```text
http://127.0.0.1:5000
```

Allow webcam access when prompted.

## 🔄 How It Works

1. The user opens the website.
2. The user selects a video from the preloaded library.
3. The website requests webcam access.
4. MediaPipe detects hand landmarks and recognizes gestures in the browser.
5. JavaScript processes the recognized gestures and maps them to commands.
6. The video player receives the commands and performs the corresponding action.

## 🔗 Integration Format

The gesture recognition module communicates with the video player through a standardized command format.

Example:

```javascript
{
    gesture: "Swipe_Right",
    action: "FORWARD",
    value: 10
}
```

The gesture module calls the video player's command handler:

```javascript
startGestureControl(handleCommand);
```

## ⚠️ Notes

- Webcam permission is required for gesture controls.
- Use a modern browser such as Google Chrome.
- Gesture recognition runs in the browser using JavaScript and MediaPipe.
- Flask is used to serve the website and its video files.
- Gesture controls are an additional way to interact with the player; manual controls remain available.

## 🎯 Project Goal

To explore how natural hand gestures can improve human-computer interaction by making everyday video playback more intuitive, accessible, and hands-free.

---

**Project Type:** Computer-Human Interaction (CHI / HCI)  
**Status:** In Development
