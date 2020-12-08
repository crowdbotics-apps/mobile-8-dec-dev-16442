from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import UserhgfhgfViewSet

router = DefaultRouter()
router.register("userhgfhgf", UserhgfhgfViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
