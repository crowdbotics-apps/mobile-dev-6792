from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(max_length=150,)

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"


class Gtjguy(models.Model):
    "Generated Model"
    rsdyw4y5w = models.BigIntegerField()


class Fftrghy64rjr(models.Model):
    "Generated Model"
    sfewergw = models.BigIntegerField()


class JHGJGJG(models.Model):
    "Generated Model"
    jhgjgjh = models.BigIntegerField()


class HHHhgfhfhgf(models.Model):
    "Generated Model"
    kjhjkhkh = models.BigIntegerField()
