from django.conf import settings
from django.db import models


class Userhgfhgf(models.Model):
    "Generated Model"
    username = models.CharField(
        max_length=30,
    )
    password = models.CharField(
        max_length=30,
    )
    email = models.EmailField(
        max_length=254,
    )
    name = models.CharField(
        max_length=200,
    )


# Create your models here.
