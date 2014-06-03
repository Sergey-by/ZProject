var resp = require('../libs/responses.js');

module.exports = (function() {
  return {
  	showGallery: function(req, res) {
		resp.respond(res, 200, 'ZProject in action!!! your request is :' + req.params.any_text);
    }
  }
})();