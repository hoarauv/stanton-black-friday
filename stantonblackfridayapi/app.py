"""
    This is the main file used by the backend of StantonBlackFriday app

    StantonBlackFriday's purpose is to fetch data here and there regarding StarCitizen's in-game
    economical system and provide some data vizualisation to the user.
"""

from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    """return the content of the index page"""
    return "Hello world!"

if __name__ == "__main__":
    app.run()
