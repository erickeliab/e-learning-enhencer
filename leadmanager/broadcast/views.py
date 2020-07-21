from django.conf import settings                                                                                                                                                       
from django.http import HttpResponse
from twilio.rest import Client
from rest_framework import generics, permissions
from django.contrib.auth.models import User
from discussions.models import Discussion
from settings.models import Settings
import requests
import json,xmltodict
from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler





def broadcast_sms():
    users = User.objects.all()
    discussions = Discussion.objects.get(pk=2)
    updatedDiscs = []
    for e in Discussion.objects.all():

        # print(f'Discussion {e.disc_id} has {e.totalposts} posts {e.owner}')
        # checking for the updated discussions
        response = requests.post('http://localhost/moodle/webservice/restful/server.php/mod_forum_get_discussion_posts', data = {"discussionid" : e.disc_id },headers={'Authorization': '51a719c9803f1afffe4f86f4af0a9cf5'})
        posts = xmltodict.parse(response.text)['RESPONSE']['SINGLE']['KEY'][0]['MULTIPLE']['SINGLE']

        
        print(len(posts))
        if int(e.totalposts) != len(posts):
                # discussion is updated
            print('the discussion is updated')
            updatedDiscs.append(e.owner.id)
        else:
            # discussion is not updated, inform the user
            print('Not updated')

        # print(xmltodict.parse(response.text)['RESPONSE']['SINGLE']['KEY'][0]['MULTIPLE'].keys())


    for Setting in Settings.objects.all():
 
        if Setting.owner.id in updatedDiscs:
            print(f'user {Setting.owner} with phone {Setting.phone} has to be notified')
            # SMS SENDING HERE

            message_to_broadcast = ("Please visit e-learnig discussion has been updated")
            client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
            client.messages.create(to=Setting.phone,from_=settings.TWILIO_NUMBER,body=message_to_broadcast)
        else:
            print(f'user {Setting.owner} with phone {Setting.phone} should not be notified')
    # entry_list = list(discussions)

 

    return HttpResponse(discussions, 200)

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(broadcast_sms, 'interval', minutes=1)
    scheduler.start()


start()