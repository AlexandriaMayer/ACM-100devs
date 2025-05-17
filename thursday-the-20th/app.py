# Thursday the 20th, now in Python
from flask import Flask
import datetime as dt

app = Flask(__name__)

@app.route("/")
def starting_date():
    return "balsamic vinegar"

if __name__ == "__main__":
    app.run(debug=True)