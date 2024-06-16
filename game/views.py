# game/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import random
import json

entities = [
    {'text': 'Chidiya', 'canFly': True},
    {'text': 'Cheenti', 'canFly': False},
    # Add more entities
]

game_state = {
    'score': 0,
    'entity': random.choice(entities)
}

@csrf_exempt
def get_game_state(request):
    print(game_state)
    return JsonResponse(game_state)


@csrf_exempt
def update_game_state(request):
    if request.method == 'POST':
        print("******************************hello*****************")
        data = json.loads(request.body)
        user_response = data['response']
        current_entity = game_state['entity']
        print(game_state)
        if (user_response == 'udd' and current_entity['canFly']) or \
           (user_response == 'not_udd' and not current_entity['canFly']):
            game_state['score'] += 10
        else:
            game_state['score'] -= 5
        
        game_state['entity'] = random.choice(entities)
        return JsonResponse(game_state)
