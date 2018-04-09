#!/bin/bash

set -e

psql postgres -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE USER ci_tester WITH PASSWORD 'pa33word';

    CREATE DATABASE travis_ci_test;

    GRANT ALL PRIVILEGES ON DATABASE travis_ci_test TO ci_tester;

EOSQL
