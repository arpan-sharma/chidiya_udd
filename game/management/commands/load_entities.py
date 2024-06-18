# chidiya_udd/management/commands/load_entities.py
from django.core.management.base import BaseCommand
from django.db import models
from game.models import Entity

class Command(BaseCommand):
    help = 'Load entities into the database'

    def handle(self, *args, **kwargs):
        entities = [
            {'name': 'Chidiya', 'can_fly': True, 'symbol': 'path_to_symbol_image', 'sound': 'path_to_sound'},
            {'name': 'Cheenti', 'can_fly': False, 'symbol': 'path_to_symbol_image', 'sound': 'path_to_sound'},
            # Add more entities here
        ]
        
        for entity in entities:
            Entity.objects.create(**entity)

        self.stdout.write(self.style.SUCCESS('Successfully loaded entities'))
