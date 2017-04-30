// app/routes.js
module.exports = function(app, passport) {

    
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/login',function(req,res){
    res.render('login.ejs',{message: req.flash('loginMessage')});
});

app.get('/account/signup', function (req, res) {
    res.render('signup.ejs',{message: req.flash('signupMessage')});
});
    
app.post('/signup',passport.authenticate('login-signup',{
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
}));
app.get('/account/profile',isLoggedIn,function(req,res){
    res.render('profile.ejs',{ user : req.user});
});

app.get('/logout',function(req,res){
   req.logout();
   res.rediretl()
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
