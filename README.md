# SCA-Cloud-School-Application
A node application that uses a Docker container

To test this application,get the port of the app that Docker mapped by running this command
```
sudo docker ps
```
From the output of this command above, copy the number under the PORT to the right before the forward slash.
Then call the app using 
```
curl -i <the number you copied>
```
and this will output the text **Welcome to SCA Cloud School Application**

For deployment to dockerhub;
This command, 
`sudo docker push deborahemeni/sca-cloud-app`
was run and the docker image `deborahemeni/sca-cloud-app` was pushed to dockerhub which can be accessed via this link (https://hub.docker.com/repository/docker/deborahemeni/sca-cloud-app) 
