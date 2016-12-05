# Flexbox Fox

[Flexbox Fox live][heroku]

[heroku]: https://nucat176.github.io/Flexbox-Fox/#/

Flexbox Fox is a web tutorial application inspired by Flexbox Froggy (http://flexboxfroggy.com/) for learning CSS Flexbox. This is a purely front-end application, created using Javascript and React, and a clever implementation of DOM manipulation allows the user to input CSS Flexbox commands in order to guide a group of foxes to their dens. The utilization of React Router allows for the user to easily navigate through 13 levels using a wide variety of Flexbox commands.

## Features & Implementation

### Direct DOM Manipulation for Users

The use of React.js to construct the entire application made it easy to implement a pseudo-console for the user to interact directly with the DOM. On the left side of the screen is the "console", which is really just an HTML form for inputting the required CSS flexbox commands for each level. On the right side of the screen is the "garden" where the foxes reside, and the user's goal is to input the correct flexbox command(s) such that the foxes will find their dens. The HTML form that comprises the "console" has a handler method for when the form is submitted. This handler will check if the user has input the correct command(s), and will either render a button to move on to the next level, or display an error message if the command is incorrect.

### Level Hierarchy

This application also utilizes React Router in order to design the ladder of stages that the user can work through. The aforementioned "console" form also has a success callback that tells the Router to push the next stage into the Hash History, should the user input the correct command(s).

### Hand-rolled CSS

While the look and feel of the application is based heavily on its inspiration (Flexbox Froggy), I designed the CSS from scratch, using (you guessed it) flexbox.  
