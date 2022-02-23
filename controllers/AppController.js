const User = require('../models/model')

module.exports = {
	index: function(req, res){
		res.render('index', {layout: 'layouts/main'})
	},

}