# game/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Entity
from .serializers import EntitySerializer
import random
import json

# Initialize the game state
game_state = {
    'score': 0,
    'entity': None
}

# Function to get a random entity from the database
def get_random_entity():
    entities = Entity.objects.all().order_by('?')
    if entities.exists():
        serializer = EntitySerializer(entities.first())
        return serializer.data
    return None

@csrf_exempt
def get_game_state(request):
    if game_state['entity'] is None:
        game_state['entity'] = get_random_entity()
    print(game_state)
    return JsonResponse(game_state)

@csrf_exempt
def update_game_state(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_response = data['response']
        current_entity = game_state['entity']
        
        if current_entity:
            if (user_response == 'udd' and current_entity['can_fly']) or \
               (user_response == 'not_udd' and not current_entity['can_fly']):
                game_state['score'] += 10
            else:
                game_state['score'] -= 5

            # Fetch a new random entity
            game_state['entity'] = get_random_entity()
        
        print(game_state)
        return JsonResponse(game_state)
