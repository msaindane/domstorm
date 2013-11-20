
var path = require('path');

exports.set = function(app){

	app.get('/modules', function(req, res){
		if(typeof req.query.id != 'undefined'){
			var module_id = req.query.id;
			var module_path = process.cwd()+'/models/core/modules/' + module_id + '.js';
			var module_object = require(module_path);
			res.render('modules/getModule', {
			'module_id': module_id,
			'module_name': module_object.name,
			'module_description': module_object.description,
			'module_results': module_object.results
			});	
		} else {
			res.render('modules/index', {'title': 'Modules'});	
		}
	});

}