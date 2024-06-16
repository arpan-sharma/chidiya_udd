# game/consumers.py
import json
from channels.generic.websocket import WebsocketConsumer
from random import choice

entities = [
    {'text': 'Chidiya', 'canFly': True},
    {'text': 'Cheenti', 'canFly': False},
    # Add more entities
]

class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.score = 0
        self.send(text_data=json.dumps({
            'message': 'connected',
            'score': self.score
        }))

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        user_response = text_data_json['response']

        current_entity = choice(entities)
        self.send(text_data=json.dumps({
            'entity': current_entity['text']
        }))

        if (user_response == 'udd' and current_entity['canFly']) or \
           (user_response == 'not_udd' and not current_entity['canFly']):
            self.score += 10
        else:
            self.score -= 5

        self.send(text_data=json.dumps({
            'score': self.score
        }))
