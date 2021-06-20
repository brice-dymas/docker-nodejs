#!/usr/bin/env bash
# This script pretends to start our app only if a given service is up

./wait-for-it.sh ${DB_HOST}:${DB_PORT} --strict -- "$@"
