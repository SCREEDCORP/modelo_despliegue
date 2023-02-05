from flask import Flask, jsonify, request
# from flask_pymongo import PyMongo
from flask_cors import CORS
from joblib import load
import numpy as np

# Instantiation
app = Flask(__name__)
# app.config['MONGO_URI'] = 'mongodb://localhost/pythonreact'
# mongo = PyMongo(app)

# # Settings
CORS(app)
model = load('model.joblib')
labels = ['setosa', 'versicolor', 'virginica']

# # Database
# # db = mongo.db.pythonreact

# # Routes
# @app.route('/users', methods=['POST'])
# def createUser():
#   print(request.json)
#   id = db.insert({
#     'name': request.json['name'],
#     'email': request.json['email'],
#     'password': request.json['password']
#   })
#   return jsonify(str(ObjectId(id)))


# @app.route('/users', methods=['GET'])
# def getUsers():
#     users = []
#     for doc in db.find():
#         users.append({
#             '_id': str(ObjectId(doc['_id'])),
#             'name': doc['name'],
#             'email': doc['email'],
#             'password': doc['password']
#         })
#     return jsonify(users)

# @app.route('/users/<id>', methods=['GET'])
# def getUser(id):
#   user = db.find_one({'_id': ObjectId(id)})
#   print(user)
#   return jsonify({
#       '_id': str(ObjectId(user['_id'])),
#       'name': user['name'],
#       'email': user['email'],
#       'password': user['password']
#   })


# @app.route('/users/<id>', methods=['DELETE'])
# def deleteUser(id):
#   db.delete_one({'_id': ObjectId(id)})
#   return jsonify({'message': 'User Deleted'})

# @app.route('/users/<id>', methods=['PUT'])
# def updateUser(id):
#   print(request.json)
#   db.update_one({'_id': ObjectId(id)}, {"$set": {
#     'name': request.json['name'],
#     'email': request.json['email'],
#     'password': request.json['password']
#   }})
#   return jsonify({'message': 'User Updated'})

@app.route('/data', methods=['POST'])
def submit_data():
  print(request.json)
  data = request.json
  v1 = float(data['v1'])
  v2 = float(data['v2'])
  v3 = float(data['v3'])
  v4 = float(data['v4'])
  result = model.predict(np.array([[v1,v2,v3,v4]]))
  return jsonify({ 'message': 'Data received', 'data': labels[result[0]], 'inputData': data })

if __name__ == "__main__":
    app.run(debug=True)
