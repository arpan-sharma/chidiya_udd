# game/models.py
from django.db import models

class Score(models.Model):
    user = models.CharField(max_length=100)
    score = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} - {self.score}'
class Entity(models.Model):
    name = models.CharField(max_length=100)
    can_fly = models.BooleanField(default=False)
    symbol = models.CharField(max_length=100)  # URL or path to symbol image
    sound = models.CharField(max_length=100)  # URL or path to sound file