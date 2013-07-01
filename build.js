var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./webrtcsupport');
bundle.bundle({standalone: 'webrtcsupport'}).pipe(fs.createWriteStream('webrtcsupport.bundle.js'));
