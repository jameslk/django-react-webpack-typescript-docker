from django.conf.urls import url

from ab_app.home import views as home_views

urlpatterns = [
    url(r'^$', home_views.index, name='home'),
]