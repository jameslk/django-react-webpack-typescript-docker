from django.conf.urls import url

from hello_world_app.home import views as home_views

urlpatterns = [
    url(r'^$', home_views.index, name='home'),
]