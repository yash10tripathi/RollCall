from django.db import models

class Attendance(models.Model):
    title = models.CharField(max_length=255,blank=False,null=False)
    checkin=models.DateField(auto_now_add=True)