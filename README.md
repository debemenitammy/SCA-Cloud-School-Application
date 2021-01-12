# SCA-Cloud-School-Application
A node application that uses a Docker container
#STEPS TO RUN THIS APPLICATION
-Run the application with this command below: 
```
sudo docker run -p 49160:8080 -d deborahemeni/sca-cloud-app
```
-Get the container ID with this command below:
```
sudo docker ps
```
-Print the Output of the Application with this command below:
```
sudo docker logs <container id>
```
Example of the output of this command above `Running on http://0.0.0.0:8080`

#STEPS TO TEST THIS APPLICATION
To test this application, get the port of the app that Docker mapped by running this command
```
sudo docker ps
```
Example of the output of this command above 
```
CONTAINER ID   IMAGE                        COMMAND                  CREATED         STATUS         PORTS                     NAMES
b36b8b722916   deborahemeni/sca-cloud-app   "docker-entrypoint.s…"   7 minutes ago   Up 7 minutes   0.0.0.0:49160->8080/tcp   lucid_hertz
```
-From the output of this command above, copy the number under the PORTS heading to the right before the forward slash.
Then call the app using 
```
curl -i <the number you copied>
```
Example: `curl -i 0.0.0.0:49160`
Example of the output is described below as: 
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 39
ETag: W/"27-68Tl1A9FRDv4b6vjkm9rQgq+3wA"
Date: Tue, 12 Jan 2021 22:18:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Welcome to SCA Cloud School Application
```
and this will output the text **Welcome to SCA Cloud School Application**

#TO DEPLOY TO DOCKERHUB
For deployment to dockerhub;
Run this command, 
`sudo docker push deborahemeni/sca-cloud-app`
and the docker image `deborahemeni/sca-cloud-app` was pushed to dockerhub which can be accessed via this link (https://hub.docker.com/repository/docker/deborahemeni/sca-cloud-app) 
