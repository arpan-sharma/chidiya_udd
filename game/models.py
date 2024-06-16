# game/models.py
from django.db import models

class Score(models.Model):
    user = models.CharField(max_length=100)
    score = models.IntegerField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user} - {self.score}'
