docker rm \$(docker ps -q -f status=exited) || true
docker volume rm \$(docker volume ls -qf dangling=true) || true
docker rmi \$(docker images -qf dangling=true --no-trunc) || true
docker pull cambria/devpostgres:latest
docker pull cambria/aliceredis:latest
docker pull cambria/alice:latest
