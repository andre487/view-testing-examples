#!/usr/bin/env bash

# @file
# Test runner
set -e

dir=$(cd `dirname $0` && pwd)
cd ${dir}

`npm bin`/mocha --require bootstrap.js --compilers js:babel/register --recursive ./*.jsx
