from django.db import models


class Hitmen(models.Model):
	mobilenumber = models.CharField(max_length=10, null=True, blank=True)
	otp = models.CharField(max_length=4, null=True, blank=True)
