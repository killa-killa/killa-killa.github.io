from flask import Flask

app = Flask(__name__)

@app.route("/main")
def home():
    return "Hello, World!"

@app.route("/mains")
def mains():
    return "Hello, World! Number 1"
    
if __name__ == "__main__":
    app.run(debug=True)