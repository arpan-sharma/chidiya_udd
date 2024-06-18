# game/urls.py
from django.urls import path
from .views import get_game_state, update_game_state
from .views import EntityDetail
urlpatterns = [
    path('api/game-state/', get_game_state),
    path('api/update-game/', update_game_state),
    
]
