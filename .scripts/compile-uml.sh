#!/usr/bin/env bash

# You need PlantUML for this script
# For MacOS run `brew install plantuml`
# Otherwise see http://plantuml.com/download.html

set -e

dir=$(cd `dirname $0`/.. && pwd)
cd ${dir}

files=`ls **/*.puml`
plantuml ${files} -tsvg -o "$dir/.uml"
