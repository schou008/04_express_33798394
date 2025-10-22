//Create a new router 
const express = require("express"); 
const router = express.Router();

//Handles the main routes
//Defines the route for the Home Page
router.get("/", (req, res) => res.send("Hello World!"));

//Defines the route for the "/about" Page
router.get("/about", (req, res) => res.send("<h1>This is about page</h1>"));

//Defines the route for the "/contact" Page
router.get("/contact", (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <p>If you’d like to get in touch, here are my contact details:</p>
    <ul>
      <li><strong>Name:</strong> Saqib Choudhury</li>
      <li><strong>Email:</strong> schou008@gold.ac.uk</li>
    </ul>
    <p>We’ll get back to you as soon as possible!</p>
  `);
});

//Defines the route for the "/date" Page
router.get("/date", (req, res) => {
  //Gets the current Date and Time
  const currentDate = new Date();
  res.send(`<h1>Today's date and time is: ${currentDate}</h1>`);
});

//Defines the route for the "/welcome/name" Page
router.get("/welcome/:name", (req, res) => {
  //Accesses the "name" parameter from the URL
  const name = req.params.name;
  //Sends a personalized Welcome Message
  res.send(`<h1>Welcome, ${name}</h1>`);
});

//Defines the route with two Chained Handlers
router.get("/chain", (req, res, next) => { console.log("First handler running...");
    //Request Message
    req.message = "Hello from the first route handler!";
    //Passes control to the next Function
    next();
  },
  (req, res) => { console.log("Second handler running...");
    //Uses the data set from the First Handler
    res.send(`<h1>${req.message} This is the second route handler!</h1>`);
  }
);

//Export the router object so index.js can access it 
module.exports = router; 