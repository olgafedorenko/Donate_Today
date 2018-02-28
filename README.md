# Donate_Today

My project Donate_Today helps people to donate money to others who needs.You can create your own projects or send money whom needs it. 

I used SynopseFi APIs for all banking transactions:
1. User APIs
   After typing user name, I'm cheching if it already in our system and if user can make any transactions. If no, create a new user
2. Oauth Key
    Getting oauth key after user login
3. Node
    Getting all users nodes and if he doesn't have anyone, create a new for him.
4.  Tansactions
     Using to get all node transactions of  this node, when user wants to see who donate money for him. Also to post a new transaction when donate money.

 Also I used one more API what was create to store all projects.

To run an app:
     1. Run a file  "olga.py" from folder python-server
     2. Run a program with "npm start"
     3. open http://localhost:3001 or http://localhost:3000 (depends if you have other running process)
     4. Make sure to turn on Google Chrome extenssion "Allow-Control-Allow-Origin"

