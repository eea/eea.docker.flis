FROM python:3.6
#
# Dockerfile for automated production builds that doesn't copy the .env file to the image.
# HOWEVER, THE IMAGE IS STILL BUILT WITH SECRETS INSIDE. MUST BE FIXED BEFORE PRODUCTION.
#

ENV PYTHONUNBUFFERED=1 DJANGO_READ_DOT_ENV_FILE=False \
    POSTGRES_DB=postgres POSTGRES_USER=postgres  POSTGRES_PASSWORD=changeit POSTGRES_HOST=postgres

# Install postgres-client-9.5 so Django could use pg_dump for DB backups.
RUN set -ex; \
    key='B97B0AFCAA1A47F044F244A07FCC7D46ACCC4CF8'; \
	export GNUPGHOME="$(mktemp -d)"; \
	gpg --keyserver ha.pool.sks-keyservers.net --recv-keys "$key"; \
	gpg --export "$key" > /etc/apt/trusted.gpg.d/postgres.gpg; \
	rm -r "$GNUPGHOME"; \
	apt-key list \
	&& \
	echo 'deb http://apt.postgresql.org/pub/repos/apt/ jessie-pgdg main' 9.5 > /etc/apt/sources.list.d/pgdg.list \
    && \
    apt-get update && apt-get install -y --no-install-recommends \
		postgresql-client-9.5 \
	&& rm -rf /var/lib/apt/lists/*

# Install uwsgi and psycopg2
RUN pip install --no-cache-dir uwsgi psycopg2

# Add Django user
RUN groupadd -r django \
    && useradd -r -g django django

# Install requirements
COPY ./requirements.txt /requirements.txt
RUN pip install --no-cache-dir -r /requirements.txt

# Setup entry point
COPY ./compose/django/entrypoint.sh /
RUN chmod +x /entrypoint.sh \
    && chown django /entrypoint.sh

# Setup Django project and its dependencies
COPY ./code /app

# Copy env variables file
#COPY .env /app/.env

# Set project dir as working directory
WORKDIR /app

# Make sure statifiles dir exists, collect and compress static files and set Django as project owner
RUN mkdir -p ./staticfiles && python ./manage.py collectstatic --no-input && python ./manage.py compress --force && chown -R django:django .

# Act as Django from now on
USER django

ENTRYPOINT ["/entrypoint.sh"]
