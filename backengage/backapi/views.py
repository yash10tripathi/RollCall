
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Attendance
from .serializers import UserSerializer,AttendanceSerializer



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer


