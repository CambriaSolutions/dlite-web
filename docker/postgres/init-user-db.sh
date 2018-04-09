#!/bin/bash

set -e

psql postgres -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE USER pguser WITH PASSWORD 'pguser';

    CREATE DATABASE pguser;

    GRANT ALL PRIVILEGES ON DATABASE pguser TO pguser;

EOSQL
