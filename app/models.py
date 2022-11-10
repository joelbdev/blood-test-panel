from app import db
from sqlalchemy.sql import func

class Results(db.Model):
    '''establish the table'''
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, server_default=func.now(), nullable=False)
    test = db.Column(db.String(80), nullable=False)
    result = db.Column(db.Float, nullable=False)
    flag = db.Column(db.String(2), default='None')

    def __repr__(self):
        return f'<test {self.test}, result {self.result}>'