from flask import Flask, jsonify, request
from flask_cors import CORS
from tarot import generate_tarot_reading, generate_answer

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes and origins


@app.route('/api/tarot', methods=['GET'])
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


if __name__ == '__main__':
    app.run(debug=True, port=5021)
