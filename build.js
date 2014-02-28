var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./index-browser');
bundle.bundle({standalone: 'webrtcsupport'}).pipe(fs.createWriteStream('webrtcsupport.bundle.js'));
