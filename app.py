
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/gesture/<path:filename>")
def gesture_files(filename):
    return send_from_directory("gesture", filename)

@app.route("/gesture-test")
def gesture_test():
    return render_template("gesture-test.html")

@app.route("/test-commands")
def test_commands():
    return render_template("test-commands.html")

@app.route("/integration-test/<path:filename>")
def integration_test_files(filename):
    return send_from_directory("integration-test", filename)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
