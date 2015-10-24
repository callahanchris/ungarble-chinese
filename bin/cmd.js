#!/usr/bin/env node
var ungarble = require('../');
var infile = process.argv[2];
var outfile = process.argv[3] || 'output.txt';

ungarble(infile, outfile)
  .on('finish', () => {
    console.log('output ungarbled file to: %s', outfile);
  });
