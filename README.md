# Flexbox Fox

### Background

Flexbox Fox is a CSS flexbox tutorial game inspired by Flexbox Froggy (flexboxfroggy.com). The idea is to lead the foxes
to their dens using CSS flexbox tricks such as justify-content, align-items, flex-direction, etc.

### Functionality & MVP  

With Flexbox Fox, users will be able to:

- [ ] Type in CSS flexbox commands via a console
- [ ] See previews of the various flexbox commands via the movement of the foxes on the screen
- [ ] Advance through a variety of different stages to learn all of the available commands

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn,
and the About modal.

![wireframes](http://res.cloudinary.com/dfufqfnjx/image/upload/v1479104494/Flexbox_Fox_qepjjv.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic
- CSS to render new styling to the board
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be two scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary CSS Flexbox elements and rendering them to the DOM.

`console.js`: this script will be responsible for rendering the console that the user will interact with as well as housing the logic that translates the user's inputs to CSS

'fox.js': this script will be responsible for rendering the foxes onto the board.
### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of both scripts outlined above.  Goals for the day:

- Get a green bundle with `webpack`

**Day 2**: Get started on board.js and do research on how to render a console to the DOM. Goals for the day:

- Complete the `board.js` module
- Render a board to the `Canvas` using `Easel.js`
- Begin researching how to implement a console to the DOM
- Design unique challenges for each level

**Day 3 + 4 **: Create the CSS logic backend, and attach that logic to the foxes. 
- Export a `Console` object with correct type and handling logic
- Export a `Fox` object with functions mapped to the console logic
- Have a functional frontend that correctly handles each level of the game
- Have a styled interface, nice looking controls and title


### Bonus features

The biggest anticipated update is:

- [ ] Add more levels with advanced challenges
