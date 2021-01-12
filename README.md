# SCA-Cloud-School-Application
A node application that uses a Docker container

To test this application,get the port of the app that Docker mapped by running this command
```
sudo docker ps
```
From the output of this command ran, copy the number under the PORT to the right before the forward slash.
Then call the app using 
```
curl -i <the number you copied>
```
