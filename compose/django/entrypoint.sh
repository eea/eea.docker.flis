#!/bin/bash
set -e

function postgres_ready(){
python << END
import sys
import psycopg2
try:
    conn = psycopg2.connect(dbname="$POSTGRES_DB", user="$POSTGRES_USER", password="$POSTGRES_PASSWORD", host="postgres")
except psycopg2.OperationalError:
    sys.exit(-1)
sys.exit(0)
END
}

until postgres_ready; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - continuing..."

# Run database migrations
python /app/manage.py migrate

# Launch uwsgi
uwsgi --chdir /app --wsgi-file flis/wsgi.py --master --processes 4 --threads 2 --touch-reload flis/wsgi.py --socket 0.0.0.0:5000 --protocol=http

exec "$@"