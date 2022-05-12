- ```docker run -d -P dockersamples/static-site```
- ```docker port container_id```
- ```docker run -d -P -e AUTHOR="Deive" --name site-estatico dockersamples/static-site```
- ```docker stop $(docker ps -q)```
- ```docker stop -t 0 209f389e491a```
- ```docker inspect container_id```
- ```docker run -it -v "/home/deive/Desktop:/var/www" ubuntu```
- ```docker run -d -p 8080:3000 -v "/home/deive/workspaces/docker_workspace/teste_volume_container:/var/www" -w "/var/www" node npm start```
- ```docker run -d -p 8080:3000 -v "$(pwd):/var/www" -w "/var/www" node npm start```
- ```docker build -f dockerfile -t deivealtoe/node_test .```
- ```docker pause container_id```
- ```docker unpause container_id```


### Como instalar o docker no Raspbian OS Lite - Raspberry Pi Zero W

```https://www.jfrog.com/connect/post/install-docker-compose-on-raspberry-pi/```
