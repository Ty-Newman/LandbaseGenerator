from flask import Blueprint, jsonify, request
import json


generate_routes = Blueprint('generate_routes', __name__)


@generate_routes.route('/', methods=['POST'])
def generate():
    req = request.json

    print(req)
    return 'test'
