from .db import db
from datetime import datetime


class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key = True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    format = db.Column(db.String(30), nullable=False)
    color = db.Column(db.String(80), nullable=False)
    devotion = db.Column(db.String(100), nullable=False)
    numberOfLands = db.Column(db.Integer, nullable=False)
    manaCurve = db.Column(db.String(100))
    decklist = db.Column(db.Text)
    notes = db.Column(db.Text)

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'name': self.name,
            'format': self.format,
            'color': self.color,
            'devotion': self.devotion,
            'numberOfLands': self.numberOfLands,
            'manaCurve': self.manaCurve,
            'decklist': self.decklist,
            'notes': self.notes
        }
