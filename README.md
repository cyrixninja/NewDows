# NewDows
## Inspiration
We have heard of new year themed websites, new year themed games and so on but we had never heard of a new year themed OS, and that's what inspired us to create one. With the new year festivities going on and while hacking this weekend, we thought about how we could integrate new year in our style and that's how we thought of NEWdows.

## What it does
It is an OS. Not like you can install it on your PC, but you can experience its simulated version through the Try It Out links mentioned below. So apart from being a simulated new year themed OS, our OS, just like any other operating system comes with its own applications for our use. Keeping the new year vibe in our mind, the applications we built include -
1. New Year Resolution Generator - This helps you generate a random new year resolution, a random new year resolution on your profession or a random new year resolution based on your goals.
2. New Year Greeting Generator - This allows you to choose one of the three greeting card templates available and to send them to your loved ones on their email.
3. Document Resolution - This helps you to organize and maintain your resolution. This works as a memo/diary for you to document your resolution so that you dont end up forgetting about them.
4. Chat - This application allows you to join one out of the 6 chat rooms available. Once you join the chat room, you can vent out discussion or just talk to people in the room. Once you leave the room, everything from the chat disappears, leaving you with no regrets when you join again.
5. Twilio Based WhatsApp Resolution Bot - This is our value added feature. We have created a WhatsApp bot that you can use to get a random resolution ides based on you profession or goals or just a random one through WhatsApp.

## How we built it
Our project is composed of different modules, the tech stack used for each application is mentioned below -
1. Main OS page - This is built using HTML, CSS and JavaScript.
2. New Year Resolution Generator - This is built using Python and Streamlit, it is hosted using heroku and added to the website as an iframe.
3. New Year Greeting Generator - This is built using HTML, CSS and JavaScript. It makes use of sendgrid to send emails. It is hosted on replit and added to the website as an iframe.
4. Document Resolution - This is built using using HTML, CSS and JavaScript. It is hosted on replit and added to the website as an iframe.
5. Chat - This is built using HTML, CSS, Node.js and Socket.io. It is hosted on replit and added to the website as an iframe.
6. Twilio Based WhatsApp Resolution Bot - This is made with the help of Twilio and allows users to ask for resolutions through WhatsApp.

## Challenges we ran into
First of all we struggled thinking about what to build this weekend. We didn't want to make things that were already available, so finding something unique to work upon was the first challenge for us. We also struggled while thinking about the applications that we should add to the OS. We had issues with the API used in the resolution generator. We also had issues sending HTML based emails via JavaScript. At first we were trying to implement a Firebase based Chat Web-app but we had to drop it due to lack of time and the challenges that we were facing to implement it. But as a countermeasure, we created a Node.js and Socket.io based chat webapp. We also faced issues building the Twilio based WhatsApp resolution bot but we were able to overcome them.

## Accomplishments that we're proud of
Despite all the challenges and deadlocks, we were finally able to make something presentable and unique. We liked out idea and learnt a lot building this project. We made this without using any fancy tech stack and by following the basics and we are proud of making something that can be used by everyone.

## What we learned
We learnt a lot of new things this weekend. All of us were responsible for different sections of the OS and that made us learn how to collaborate effectively. We helped each other out, sorted out the errors together. All of this helped us learn the quality of team building. Secondly, we learnt that how simple HTML, CSS and JavaScript could be used to make a vast range of projects. We also learnt about the use of Twilio and how bots are created and brought into existence using Twilio. Lastly, we learnt how we can create apps in a completely different environment(For example - python) and then integrate it with our website.

## What's next for NEWDows
We plan on adding new applications that add to the new year vibe. We also want to make the UI prettier. We would also try to implement the Firebase Chat App which we failed to do this time.

## Built With
css
heroku
html
javascript
node.js
python
replit
socket.io
streamlit
twilio
