from flask import Flask , jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user
from flask_cors import CORS
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from uuid import uuid4

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
bcrypt = Bcrypt(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"
app.config["SECRET_KEY"] = "axaxaxaxaxa8"   
db = SQLAlchemy()
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.init_app(app)


class Users(UserMixin, db.Model):
    id  = db.Column ( db.Integer, primary_key = True)
    username = db.Column (db.String(250), unique= False, nullable = False)
    email = db.Column (db.String(250), unique= False, nullable = False)
    password = db.Column (db.String(250), unique= False, nullable = False)


class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True) 
    place = db.Column (db.String(250), unique= False, nullable = False)
    rating = db.Column(db.String(250), unique= False, nullable = False)     
    review  =  db.Column(db.String(250), unique= False, nullable = False)   
    favourite =  db.Column(db.String(250), unique= False, nullable = False) 
    reviewdate = db.Column(db.String(250),unique= False, nullable = False )
    username = db.Column(db.String(250), unique = False, nullable = False)


db.init_app(app)
with app.app_context():
    db.create_all()


@login_manager.user_loader
def loader_user (user_id):
    return Users.query.get(user_id)


@app.route('/register', methods=["GET", "POST"])
def register():
    email = request.form.get("email")
    password = request.form.get("password")
    username = request.form.get("username")
    user_exists =  Users.query.filter_by(email = email).first() is not None
    if  user_exists:
        return jsonify({"message": "user already exists"}), 409

    user = Users(email = email, password =  password,username = username)
    db.session.add(user)
    db.session.commit()
    print(request.form.get("email")+ " " + request.form.get("password"))
    return jsonify({"message": "User registered successfully.",
                   "email": request.form.get("email") ,
                "password": request.form.get("password") }), 201




@app.route('/login',methods=["GET", "POST"] )
def login():
        
        user = Users.query.filter_by(email = request.form.get("email"), password = request.form.get("password")).first()
        if user is None:
            return jsonify({"status": "User not found"}), 404
        if user.password == request.form.get("password"):
            session['username'] = user.username
            login_user(user)
        return jsonify({"status": "login successfull"})



@app.route('/review', methods=["GET", "POST"]  )
def review():
    
    reviewEntry = Reviews(review = request.form.get("review"),
    rating = request.form.get("rating") ,
    favourite = request.form.get("favourite"),
    place = request.form.get("place"),
    reviewdate = request.form.get("reviewdate"),username = request.form.get("username"))

    db.session.add(reviewEntry)
    db.session.commit()
    return jsonify({
        "review" : request.form.get("review"),
        "rating" : request.form.get("rating"),
        "favourite" :  request.form.get("favourite"),
        "place" :  request.form.get("place"),
        "reviewdate" :  request.form.get("reviewdate"),
         "username" :  request.form.get("username")
    })


@app.route('/getreview',  methods=["GET", "POST"])
def getreview():
    userReview = Reviews.query.filter_by(username =  "Boitumelo" ).all()
    print(userReview)
    if userReview is None:
        return jsonify({"message": "Review Not Found"})
    else:
        reviews = []
    for review in userReview:
        reviews.append({
            "rating": review.rating,
            "review": review.review,
            "favourite": review.favourite,
            "place": review.place,
            "reviewdate": review.reviewdate,
            "username": review.username
        })
    return jsonify(reviews) 

   
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
  