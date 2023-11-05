from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# initializing Flask app
app = Flask(__name__)


# configure and set up database uri
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://segun:SeGun@123@localhost/ngodatabase"

# Initialize SQLAlchemy with the app object
db.SQLAlchemy(app)

if __name__ == '__main__':
    app.run(debug=True)