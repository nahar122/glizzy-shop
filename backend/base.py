from flask import Flask

api = Flask(__name__)


@api.route('/upperwear')
def upper_wear():
    response_body = {
        "name": "nahar",
        "about": "hello world!"
    }
    return response_body