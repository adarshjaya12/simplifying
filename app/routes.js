// app/routes.js
module.exports = function(app, passport) {

    
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/login',function(req,res){
    res.render('login');
});

app.get('/signup',function(req,res){
    res.render('signup');
});
    
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
