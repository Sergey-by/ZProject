module.exports = (function() {
  return {
    // generateUUID: function() {
    //   return (new Date()).getTime() + '-'+this._s4() + this._s4() + '-' + this._s4() + '-' + this._s4() + '-' +
    //   this._s4() + '-' + this._s4() + this._s4() + this._s4();
    // },
    isResponseValid: function(response) {
      return response && response.statusCode == 200 && response.response && response.response.json;
    },
    isResponseValidLength: function(response) {
      return response && response.statusCode == 200 &&  response.response && response.response.json && response.response.json.length > 0;
    },
    respond: function(res, status, data) {
      var response = {
        status: status,
        data:  data
      }
      res.statusCode = status;
      res.send(response);
    },
    getCurrentTime: function() {
      return Math.round((new Date()).getTime()/1000);
    },
    respondError: function(res, response) {
     res.statusCode = 200;
     res.send(response);
    },
    errorNotFound: function() {
      return {status:404};
    },
    errorServerError: function() {
      return {status:500};
    }
  }
})();