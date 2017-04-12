var passport  = require('passport'),
    Yelp = require("yelp-api-v3"),
    keys = require('./keys.js')

var yelp      = new Yelp({
  app_id      : keys.YELP_ID,
  app_secret  : keys.YELP_SECRET
});

function search(req, res) {
  console.log(req.query)
  var searchTerm = req.query.term,
      // openNow    = req.query.open === true ? true : false,
      openNow    = req.query.open === 'true' ? true : false,
      price      = String(req.query.price),
      zipSearch = req.query.location
      // zipSearch  = req.query.zip === '' || req.query.zip.length !== 5 ? '90401' : req.query.zip;

  console.log(process.env.YELP_ID)
  console.log('zipSearch:', zipSearch);
  console.log('searchTerm:', searchTerm);
  console.log('openNow:', openNow);
  console.log('price:', price);

  // open_now: openNow,
  yelp.search({location: zipSearch, open_now: openNow, term: searchTerm, price:price, limit:10})
  .then(function (data) {
    var jsonString = JSON.parse(data);
    res.json({businesses: jsonString.businesses});
    // console.log(jsonString.businesses)
  })
  .catch(function (err) {
      console.log('not working')
      console.error(err);
  });
}

// function postSearch(req, res) {
//   // if (req.query.zipSearch === '')
//   //   res.redirect('search/?term=' + req.query.searchTerm + '&open=' + req.body.openNow + '&price=' + req.body.price);
//
//   res.redirect('/search/?term=' + req.body.searchTerm + '&zip=' + req.body.zipSearch + '&open=' + req.body.openNow + '&price=' + req.body.price);
// }


module.exports = {
  search: search
  // ,postSearch: postSearch
}
