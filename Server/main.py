from flask import Flask, render_template, logging, request
import logging
from flask_cors import CORS
from flask_socketio import SocketIO, join_room, leave_room, send

app = Flask(__name__)
cors = CORS(app, resources={r"*" : {"origins": "*"}})
logging.getLogger('flask_cors').level = logging.DEBUG

socketio = SocketIO(app, cors_allowed_origins="*")

connections = {}
vehicles = {}



@app.route('/')
def index():
    return render_template('index.html')

@app.get('/users')
def handle_get_users():
    return connections

@app.get("/update")
def handle_update():
    return vehicles

@app.post("/checkin")
def handle_checkin():
    json = request.get_json(force=True)
    print("checkin: ", json)
    
    vehicles[json['vin']] = json
    socketio.emit("update", vehicles)
    return "OK"

@app.post("/remove/<vin>")
def handle_remove(vin):
    vehicles.pop(vin)
    socketio.emit("update", vehicles)
    return "OK"

@socketio.on('connect')
def handle_connect():
    print("Client connected")
    print("Session ID: ", request.sid)
    connections[request.sid] = request.sid

@socketio.on('disconnect')
def handle_disconnect():
    print("Client disconnected")
    print("Session ID: ", request.sid)
    connections.pop(request.sid)

@socketio.on("message")
def handle_message(data):
    print('Received message: ', data)
    socketio.emit('response', 'Server received your message: ' + data)

@socketio.on('json')
def handle_json(json):
    print('Received JSON: ', str(json))

@socketio.on("join")
def handle_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', to=room)

@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', to=room)


if __name__ == '__main__':
    socketio.run(app, debug = True, host = '0.0.0.0')