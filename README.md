## EEA FLIS
FLIS is a website based on Django (http://djangoproject.com) and Wagtail CMS (http://wagtail.io).

### Prerequisites

- Install [Docker](https://docs.docker.com/installation/)
- Install [Compose](https://docs.docker.com/compose/install/)

### First time installation

Clone the repository

    $ cd /var/local/deploy
    $ git clone https://github.com/eea/flis
    $ cd flis

During the first time deployment, create the secret environment file

    $ cp .env.example .env

Enter production ready variables into .env file:

    $ vim .env
    
Follow [import existing data](#import-existing-data) if you need to import existing data

Start Flis services as a daemon:

    docker-compose -f docker-composer.prod.yml up -d
    
#### Import existing data
If you already have a Flis installation than follow the steps below to import the media files and postgres db into the data containers.

NOTE: Before following these steps, make sure that containers have been launched via 
    
    docker-compose -f docker-composer.prod.yml up -d

##### Import initial media files:
1. Unzip contents of media.tar.gz files into any location (<initial_media_dir_path>) on your docker host:

       tar vfxz <initial_media_dir_path>/media.tar.gz

2. Copy its contents into running django container:

       docker cp <initial_media_dir_path>/media <django_container_id>:/app/media
 
##### Import initial database:
1. Copy database.pqsl.gz into any location (<initial_db_file_path>) on your docker host and then copy its contents
into running postgres container:

        docker cp <initial_db_file_path>/database.pqsl.gz <postgres_container_id>:/backups

2. Restore database from backup file:

        docker-compose run postgres restore database.psql.gz
    
### Running backups
    
To create a backup, run:

        docker-compose run postgres backup

To list backups, run:

        docker-compose run postgres list-backups

To restore a backup, run:

        docker-compose run postgres restore database.psql.gz
    
To copy the files from the running Postgres container to the host system:

        docker cp <containerId>:/backups /host/path/target

where <containerId> is the ID of the Postgres container. To get it, run:

       docker ps