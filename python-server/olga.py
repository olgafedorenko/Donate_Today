from flask import Flask, request, json

from db import init_db, db_session
from models import Projects

app = Flask(__name__)
init_db()


@app.route('/create_project',  methods=['GET', 'POST'])
def create_project():
    args = {}
    for k in request.form:
        args[k] = request.form[k]
    args['total_amount'] = int(request.form.get('total_amount', 0))
    args['amount'] = int(request.form.get('amount', 0))
    p = Projects(**args)
    db_session.add(p)
    db_session.commit()
    return json.dumps(p.json()), 200


@app.route('/get_all_projects')
def get_all_projects():
    projects = db_session.query(Projects).all()
    return json.dumps([p.json() for p in projects]), 200


@app.route('/get_project/<id>')
def get_project(id):
    return json.dumps(db_session.query(Projects).filter_by(id=id).one().json()), 200


@app.route('/post_project/<id>',  methods=['GET', 'POST'])
def post_project(id):
    project = db_session.query(Projects).filter_by(id=id).one()
    for k in request.form:
        value = request.form[k]
        if k in {'amount', 'total_amount'}:
            value = int(value)
        setattr(project, k, value)
    db_session.commit()
    return json.dumps(project.json()), 200

if __name__ == '__main__':
    app.run()
