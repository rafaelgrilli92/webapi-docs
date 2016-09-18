var router = require('express').Router();
var fs = require('fs');

function getJsonStorage(file) {
	return JSON.parse(fs.readFileSync('./public/storage/'+ file +'.json', 'utf8'));
}

function compare(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

router.get('/', function(req, res){
	var projects = getJsonStorage('projects');
	
	for (i = 0; i < projects.length; i++) {
		var endpoints = projects[i]['endpoints'];
		for (j = 0; j < endpoints.length; j++) {
			var methods = endpoints[j]['methods'];	
			endpoints[j]['methods'] = methods.sort(compare);
		}
	}

	res.render('index', { projects: projects});
});

module.exports = router;