#!/usr/bin/env bash

until cd /project && npm install
do
    echo "Retrying npm install"
done
