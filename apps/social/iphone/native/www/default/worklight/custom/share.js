var share = {
    shareFile: function(success, failure, params) {
        
        var filename = params.filename || null;
        var text = params.text || null;
        var urlLink = params.urlLink || null;
        console.log(filename)

        cordova.exec(success, failure, [filename, text, urlLink]);
    }
};

module.exports = share;
