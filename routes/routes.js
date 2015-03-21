// =============================================================================
// This file handles all routing from directed at the server. This includes
// calls to the API backend as well as the Angular front-end. Any of these 
// routes can be abstracted out to different files if need be, such as
// abstracting out all routes to the API, for example
// =============================================================================

module.exports = function(filepath, app, passport) {
  app.get("/", function(req, res) {
    res.sendFile(filepath + "/client/html/index.html");
  });

  app.get('/auth/github',
    passport.authenticate('github'),
    function(req, res){
    // The request will be redirected to GitHub for authentication, so this
    // function will not be called.
  });

  app.get('/auth/github/callback', 
          passport.authenticate('github', { failureRedirect: '/' }),
          function(req, res) {
            res.redirect('/');
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });
};

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
