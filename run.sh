#!/usr/bin/env bash
set -euxo
# This script pretends to start our app only if a given service is up
if [ -z $DB_HOST ]; then
  "$@";
else
  ./wait-for-it.sh ${DB_HOST}:${DB_PORT} --strict -- "$@"
fi
