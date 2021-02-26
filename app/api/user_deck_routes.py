from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Deck

user_deck_routes = Blueprint('user_deck_routes', __name__)

@user_deck_routes.route('/', methods=['POST'])
@login_required
def user_decks():
    userId = request.json
    print(userId)
    user_decks = Deck.query.filter_by(userId=userId).all()
    return {"decks": [deck.to_dict() for deck in user_decks]}
