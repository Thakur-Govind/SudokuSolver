from django.db import models

# Create your models here.
class Solver(models.Model) :
    prob = models.CharField(max_length = 81, default = ".................................................................................")
    result = models.CharField(max_length = 81)
    
