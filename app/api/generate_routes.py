from flask import Blueprint, jsonify, request
import json


generate_routes = Blueprint('generate_routes', __name__)


@generate_routes.route('/', methods=['POST'])
def generate():
    req = request.json
    print(req)
    mana_total = 0
    colors_arr = req['colors']
    num_oflands = int(req['numOfLands'])
    land_distrib = {
        'colors': colors_arr,
        'white': 0,
        'blue': 0,
        'black': 0,
        'red': 0,
        'green': 0
    }
    for x in colors_arr:
        print(x)
        mana_total += int(req[x])
        print(mana_total)
    for x in colors_arr:
        land_distrib[x] = round((int(req[x]) / mana_total) * num_oflands)
        print(land_distrib)


    return land_distrib
