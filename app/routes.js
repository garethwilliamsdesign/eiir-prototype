const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/v1/index', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var search = req.session.data['search']
  
    // Check whether the variable matches a condition
    if (search == "individual"){
      // Send user to next page
      res.redirect('/citizen/v1/individual-search-page')
    } else {
      // Send user to ineligible page
      res.redirect('/citizen/v1/trading-name-search-page')
    }
  
  })

router.post('/admin/v1/subscriber-profile-page-1-remove', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var remove = req.session.data['remove']

  // Check whether the variable matches a condition
  if (remove == "yes"){
    // Send user to next page
    res.redirect('/admin/v1/subscriber-profile-page-1')
  } else {
    // Send user to ineligible page
    res.redirect('/admin/v1/subscriber-profile-page-1-added')
  }

})

module.exports = router