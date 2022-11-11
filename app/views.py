from app import app, db
from . models import Results
from flask import Flask, render_template, request, url_for, redirect
from datetime import datetime

@app.route('/')
def index():
    '''Displays all the blood test results'''
    test_results = Results.query.order_by(Results.test.asc()).all()
    return render_template('index.html', test_results=test_results)

@app.route('/line')
def line():
    #https://www.digitalocean.com/community/tutorials/how-to-query-tables-and-paginate-data-in-flask-sqlalchemy#step-3-filtering-records-using-logical-conditions
    test_results = Results.query.order_by(Results.test.asc()).all()
    return render_template('line_chart.html', title='Cholesterol', max=100, data=test_results)

@app.route('/<int:result_id>/')
def result(result_id):
    '''query and individual result in the db'''
    individual_result = Results.query.get_or_404(result_id)
    return render_template('result.html', result=individual_result)

@app.route('/create/', methods=['GET', 'POST'])
def create():
    #get data from the form
    if request.method == 'POST':
        test = request.form['test']
        result = float(request.form['result'])
        date = request.form['date']
        flag = request.form['flag']

        #convert date to a date object
        date_obj = datetime.strptime(date, '%Y-%m-%d').date()

        #commit to the database
        if date != '':
            new_result = Results(result=result,test=test, date=date_obj, flag=flag)
        else:
            new_result = Results(result=result,test=test, flag=flag)

        db.session.add(new_result)
        db.session.commit()

        #go back to the index page after commiting a result
        return redirect(url_for('index'))

    return render_template('create.html')

@app.route('/<int:result_id>/edit/', methods=('GET', 'POST'))
def edit(result_id):
    individual_result = Results.query.get_or_404(result_id)

    if request.method == 'POST':
        test = request.form['test']
        result = float(request.form['result'])
        date = request.form['date']
        flag = request.form['flag']

        individual_result.test = test
        individual_result.result = result
        individual_result.date = date
        individual_result.flag = flag

        db.session.add(result)
        db.session.commit()

        return redirect(url_for('index'))

    return render_template('edit.html', result=individual_result)

@app.post('/<int:result_id>/delete/')
def delete(result_id):
    individual_result = Results.query.get_or_404(result_id)
    db.session.delete(individual_result)
    db.session.commit()
    return redirect(url_for('index'))

