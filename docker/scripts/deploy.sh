docker rm $(docker ps -q -f status=exited) || true
docker volume rm $(docker volume ls -qf dangling=true) || true
docker rmi $(docker images -qf dangling=true --no-trunc) || true
docker pull cambria/devpostgres:latest
docker pull cambria/aliceredis:latest
docker pull cambria/alice:latest
docker tag cambria/devpostgres:latest devpostgres:latest
docker tag cambria/aliceredis:latest aliceredis:latest
docker tag cambria/alice:latest alice:latest
cd $HOME/docker/postgres && ./stoppostgres && ./runpostgres
cd $HOME/docker/redis && ./stopredis && ./runredis
cd $HOME/docker/alice && ./stopalice && ./runalice
