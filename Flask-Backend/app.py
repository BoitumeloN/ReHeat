from flask import Flask , jsonify, redirect, url_for, request, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SECRET_KEY"] = "axaxaxaxaxa8"
db = SQLAlchemy()

login_manager = LoginManager()
login_manager.init_app(app)


class Users(UserMixin, db.Model):
    id  = db.Column ( db.Integer, primary_key = True)
    email = db.Column (db.String(250), unique= True, nullable = False)
    password = db.Column (db.String(250), unique= True, nullable = False)


db.init_app(app)
with app.app_context():
    db.create_all()


@login_manager.user_loader
def loader_user (user_id):
    return Users.query.get(user_id)



@app.route('/register', methods=["GET", "POST"])
def register():
    print("About to register")
    list_tables()
    user = Users(email=request.form.get("email"),
                 password=request.form.get("password"))
    db.session.add(user)
    db.session.commit()
    print(request.form.get("email")+ " " + request.form.get("password"))
    return jsonify({"message": "User registered successfully.",
                   "email": request.form.get("email") ,
                "password": request.form.get("password") }), 201


@app.route('/login',methods=["GET", "POST"] )
def login():
        user = Users.query.filter_by(
        email = request.form.get("email")).first()
        if user.password == request.form.get("password"):
            login_user(user)
            list_tables()
        return jsonify({"status": "login successfull"})


def list_tables():
    # Reflect tables from the database
    with app.app_context():
        tables = db.metadata.tables
        for table_name, table in tables.items():
            print(f"Table: {table_name}")
            for column in table.columns:
                print(f"  Column: {column.name} Type: {column.type}")

if __name__ == '__main__':
    list_tables()
    app.run(debug=True)
  