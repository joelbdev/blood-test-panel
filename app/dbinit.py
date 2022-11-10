from datetime import date
from app.app import db, Results

db.drop_all()
db.create_all()

#TODO: fix all of these below

test1 = Results(test='HDL',
              result='1.6',
              date='22-08-11',
              age=32,
              hire_date=date(2012, 3, 3),
              active=True
              )

test2 = Employee(firstname='Mary',
              lastname='Doe',
              email='md@example.com',
              age=38,
              hire_date=date(2016, 6, 7),
              active=True
              )

test3 = Employee(firstname='Jane',
              lastname='Tanaka',
              email='jt@example.com',
              age=32,
              hire_date=date(2015, 9, 12),
              active=False
              )

db.session.add_all([e1, e2, e3, e4, e5, e6, e7, e8, e9])

db.session.commit()