from app import db
from datetime import date
from sqlalchemy import UniqueConstraint

class Volunteer(db.Model):
    ''' A class that defines the registered users
    '''
    __tablename__ = 'volunteers'

    volunteer_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.string(50), nullable=False)
    other_name = db.Column(db.string(50), nullable=True)
    last_name = db.Column(db.string(50), nullable=False)
    sex = db.Column(db.string(10), nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    school/organization = db.Column(db.string(100), nullable=True)
    Education = db.Column(db.string(20), nullable=False)
    contact_address = db.Column(db.string(100), nullable=False)
    email = db.Column(db.string(255), nullable=False, unique=True)
    phone_number = db.Column(db.Integer(15), nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)