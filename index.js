var fs = require('fs');
var iconv = require('iconv-lite');

module.exports = function(infile, outfile) {
  return fs.createReadStream(infile)
    .pipe(iconv.decodeStream('GB18030'))
    .pipe(iconv.encodeStream('utf8'))
    .pipe(fs.createWriteStream(outfile));
};
