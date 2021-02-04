from app.models import db, Deck
import json

def seed_decks():

    deck1 = Deck(
        userId=1,
        name='Goblins',
        format='Historic',
        color=json.dumps(['Red']),
        devotion=json.dumps({'red': 65}),
        numberOfLands=20,
        manaCurve=json.dumps(
            {
                'one': 4,
                'two': 9,
                'three': 16,
                'four': 6,
                'five': 1,
                'six': 0
            }
        ),
        decklist="""1 Gempalm Incinerator
        1 Goblin Trashmaster
        1 Siege-Gang Commander
        2 Wily Goblin
        2 Goblin Chieftain
        3 Goblin Instigator
        4 Conspicuous Snoop
        4 Skirk Prospector
        4 Goblin Warchief
        4 Krenko, Mob Boss
        4 Goblin Matron
        4 Muxus, Goblin Grandee
        2 Herald's Horn
        1 Irencrag Feat
        3 Shatterskull Smashing
        1 Phyrexian Tower
        3 Castle Embereth
        16 Mountain

        1 Tormod's Crypt
        2 Goblin Chainwhirler
        2 Gempalm Incinerator
        2 Fry
        2 Lava Coil
        3 Goblin Trashmaster
        3 Unchained Berserker""",
        notes='Took first at The Dive Down Nation Eternal Nights Historic'
    )
    deck2 = Deck(
        userId=1,
        name='Gruul Aggro',
        format='Historic',
        color=json.dumps(['Red', 'Green']),
        devotion=json.dumps({'red': 22, 'green': 30}),
        numberOfLands=20,
        manaCurve=json.dumps(
            {
                'one': 8,
                'two': 14,
                'three': 10,
                'four': 4,
                'five': 0,
                'six': 4
            }
        ),
        decklist="""4 Bonecrusher Giant
        4 Burning-Tree Emissary
        1 Collected Company
        4 Cragcrown Pathway
        4 Embercleave
        4 Gruul Spellbreaker
        3 Hashep Oasis
        2 Kazandu Mammoth
        4 Llanowar Elves
        4 Pelt Collector
        3 Questing Beast
        2 Ramunap Ruins
        4 Scavenging Ooze
        2 Shatterskull Smashing
        4 Stomping Ground
        4 Voltaic Brawler
        4 Forest
        3 Mountain""",
        notes=''
    )

    db.session.add(deck1)
    db.session.add(deck2)

    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE comments;')
    db.session.commit()
