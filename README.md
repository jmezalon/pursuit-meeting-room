# pursuit-meeting-room

### Live Project

[Pursuit-meeting-room](https://radiant-peak-77108.herokuapp.com/)

### Functionality
When a user just open the app they are viewing the home page that is displaying the room that are available to book meetings. If a user wants to add additional rooms, just navigate to the new room tab in the navbar to fill the form and create a new room. That action will redirect the user to the home page where the user can see this new created room. if the user open that room, there is a form to book meetings for that particular room. It will also display the existing bookings in a list below. When a user clicks on a single booking, the user will be able to cancel that booking. There is a confirmation incase the user changes their mind about cancelling. The final page is the booking tab, where a user is able to view all the bookings for all the rooms.

### Technologies
I used Ruby and Ruby on Rails for the backend. I added validation and serialization to my models and controllers. I used PostgreSQL for my database. I added basic seed datas to test functionalities. For the frontend I used React. I used react-router-dom version 5 to control the routing. I used hooks like useEffect, useState, useParams and useRouteMatch. I also download a package, [DateTimePicker](https://ej2.syncfusion.com/react/documentation/datetimepicker/getting-started/), to help me with the calender to select date and time. I deployed to heroku, [challenge](https://radiant-peak-77108.herokuapp.com/)

### HTPP Requests
I made two POST request, that is to create the room and booking. One Delete Request to cancel booking. Finally, three GET request, one to get rooms, one for booking, and a customized one to get the bookings for a single room. There is error handleling that will prevent POST request if the required input fields are empty.

### MVP
I got all the functionalities that I plan for with the time that was allocated to do this challenge. User is able to view the rooms, in the single room they can book a meeting. They can cancel the meeting in the single meeting page. They are able to view all bookings and create a new meeting room.

### Stretch goals
Had I have more time, I would have added the search available room feature for a user to filter through the list of rooms. I would have also made the app mobile friendly to allow users to interact with the app on their cellphones or tablets.

### Final Remarks
I really wanted to complete the optional challenge, that is to search for available room, but I didn't have time. I started the challenge Friday, where I've done the backend, Saturday I tested the backend and completed the client side; and Sunday I added styling to all of the pages that were not styled and completed the README. It was really fun doing this project, I learn a lot as it is always is when doing a new project. And I went out of my way to make sure that my console is clean.
