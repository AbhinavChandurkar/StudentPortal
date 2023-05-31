/**
 * This file will act as the route for all the html pages
 * !work on authjwt  
 */

// define the routes - REST endpoints for user ui
const path = require('path')
const {authJwt,upload} = require('../middleware');
module.exports = (app)=>{
    
    //home page http://localhost:3000/
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../Public', 'home.html'));
    });
  
    //Admin Page http://localhost:3000/Admin.html
    app.get('/admin',(req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'admin.html'));
    });

    //Dashboard http://localhost:3000/Dashboard.html
    app.get('/dashboard',(req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'Dashboard.html'));
    });
  
    //Registration page http://localhost:3000/registration
    app.get('/registration', (req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'registration.html'));
    });
  
    //Events Page http://localhost:3000/events
    app.get('/events', (req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'events.html'));
    });

    app.get('/internship', (req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'internship.html'));
    });

    app.get('/seminar', (req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'seminar.html'));
    });

    //help page route 
    app.get('/help', (req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'help.html'));
    });


    //Events Page http://localhost:3000/events
    app.post('/eventsPayment',upload.single('image'), (req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'events.html'));
    });

    app.get('/logout', (req, res) => {
      res.sendFile(path.join(__dirname, '../Public', 'home.html'));
    });



    // app.get('/admin/dashboard', (req, res) => {
    //   res.sendFile(path.join(__dirname, '../view', 'index.ejs'));
    // });
}