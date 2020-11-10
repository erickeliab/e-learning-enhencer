# Lead Manager

> Full stack Django/React/Redux app that uses token based authentication with Knox.

## Quick Start

```bash
# Install dependencies
npm install

# Serve API on localhost:8000
python leadmanager/manage.py runserver

# Run webpack (from root)
npm run dev

# Build for production
npm run build
```

## Problem statement

This project is a web based application that aims mostly to create a pwa that accepts data from the elearning built on top of moodle e-learning platform and also, in the background django api will compare the  discussion that has been sent to the frontend with the one that is present in the moodle api periodically so as to send the text message to the student to inform them about the changes in the state of data.

## Project Goals
There are two basically goals here. 
1. Student to get the content of data when they are offline
2. Student to get sms notification on the update of data 

## Architectural description 

The architecture is abit tricky since the react pwa will be sending requests to the moodle sever throgh rest api to retrieve the data once the user has logged in. Then, data will be pushed to the django server to update the state of data periodically in relation to the account and information neccessary to retrieve these data again from moodle server in the background, which will also be periodically and sms will be sent to the users phone number to inform them that there have been some changes in the certain discussion.


## Database Modeling
    Database will contain tables.
    1.  Accounts 
    2.  Discussions
    3.  Student

### Accounts
This will contain the account information neccessary for the partcular user to log into the application.It will contain
0.  account_id (PK) : STRING
1.  Username : STRING
2.  Password : (STRING)
3.  Email : (STRING)

### Students
This table will contain the accounts settings
    0.  settings_id (PK) : STRING
    1.  user_id
    2.  updatetime
    3.  phone
    4.  email
    5.  updatebysms
    6.  updatebyemail
    7.  account_id (FK)


### Discussions
This table will involve data about the users discussion
    1.id
    2.totalposts
    3.account_id (FK)
    
