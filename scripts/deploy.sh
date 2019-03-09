#!/bin/bash
echo "Building..."

ng build --prod --base-href https://andythsu.github.io/26am/

echo "Deploying.."

ngh --no-silent