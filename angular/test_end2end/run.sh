#!/usr/bin/env bash

# @file
# Script for running Protractor tests
set -e

cd `dirname $0`

`npm bin`/protractor "config.js"
