from flask import Flask, jsonify, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
from tarot import generate_tarot_reading, generate_answer

app = Flask(__name__, static_folder='frontend/build', static_url_path='/')
CORS(app)  # Enable CORS for all routes and origins


@app.route('/api/tarot', methods=['GET'])
@cross_origin()
def tarot():
    question = request.args.get('question', '')
    reading = generate_tarot_reading()
    answer = generate_answer(question, reading)

    result = {
        "question": question,
        "cards": reading,
        "answer": answer
    }

    return jsonify(result)

@app.route('/')
@cross_origin()
def serve():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run()
