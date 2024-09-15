from flask import Flask , jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user
from flask_cors import CORS
from flask_migrate import Migrate


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SECRET_KEY"] = "axaxaxaxaxa8"   
db = SQLAlchemy()
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.init_app(app)


class Users(UserMixin, db.Model):
    id  = db.Column ( db.Integer, primary_key = True)
    username = db.Column (db.String(250), unique= False, nullable = False)
    password = db.Column (db.String(250), unique= False, nullable = False)


# class Reviews(db.Model):
#     food_place = db.Column (db.Column(db.String(250), unique= True, nullable = False))
#     rating_stars = db.Column(db.String(250), unique= True, nullable = False)     
#     review  =  db.Column(db.String(250), unique= True, nullable = False)   
#     user_id = db.Column (db.Integer, foreign_key = True)


db.init_app(app)
with app.app_context():
    db.create_all()


@login_manager.user_loader
def loader_user (user_id):
    return Users.query.get(user_id)


@app.route('/register', methods=["GET", "POST"])
def register():
    print("About to register")
    user = Users(username=request.form.get("email"),
                 password=request.form.get("password"))
    db.session.add(user)
    db.session.commit()
    print(request.form.get("email")+ " " + request.form.get("password"))
    return jsonify({"message": "User registered successfully.",
                   "email": request.form.get("email") ,
                "password": request.form.get("password") }), 201




@app.route('/login',methods=["GET", "POST"] )
def login():
        #Password from /login term,inal
        #User from db
        user = Users.query.filter_by(username = request.form.get("email"), password = request.form.get("password")).first()
        if user is None:
            return jsonify({"status": "User not found"}), 404
        if user.password == request.form.get("password"):
            session['username'] = request.form.get("email").split('@')[0]
            login_user(user)
        return jsonify({"status": "login successfull"})


# @app.route('/logout')
# def logout():
#      login_user()
#      return jsonify({"message" : "User logged out successfully"})


@app.route('/logout', methods=['POST'])
def logout():
    session.pop('username', None)
    return jsonify({"success": True})


# Route to check if user is logged in
@app.route('/check_login', methods=['GET'])
def check_login():
    print(session)
    if 'username' in session:
        return jsonify({"loggedIn": True, "username": session['username']})
    else:
        return jsonify({"loggedIn": False})

if __name__ == '__main__':
    app.run(debug=True)
  