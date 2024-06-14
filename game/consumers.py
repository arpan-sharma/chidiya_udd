import json
from channels.generic.websocket import WebsocketConsumer

class GameConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self, close_code):
        pass

    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        response = text_data_json['response']
        # Implement game logic here
        self.send(text_data=json.dumps({
            'entity': 'Chidiya',
            'score': 10
        }))
