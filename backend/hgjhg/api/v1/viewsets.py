from rest_framework import authentication
from hgjhg.models import Userhgfhgf
from .serializers import UserhgfhgfSerializer
from rest_framework import viewsets


class UserhgfhgfViewSet(viewsets.ModelViewSet):
    serializer_class = UserhgfhgfSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Userhgfhgf.objects.all()
