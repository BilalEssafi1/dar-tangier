import os

from flask import Flask, render_template, flash
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/menu")
def menu():
    return render_template("menu.html")

@app.route("/location")
def location():
    return render_template("location.html")

if __name__ =="__main__":
    app.run(
        host=os.environ.get("IP", "0.0.0.0"),
        port=int(os.environ.get("PORT", "5000")),
        debug=False)