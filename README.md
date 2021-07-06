# SCA-Cloud-School-Application

This project contains three branches; the main, Start and feature branches, which display texts: 'Welcome to SCA Cloud School Application' and 'Welcome to SCA Cloud School Application, this is my first assessment', with Nodejs and creates a Container with Docker. Then, creates a Docker Container from the node image on [Docker Hub](https://hub.docker.com/), runs the Docker image, and deploys the Docker image on Docker hub which can be accessed via this link: [sca-cloud-school-application] (https://hub.docker.com/repository/docker/deborahemeni/sca-cloud-school-application)


# Information on the Files in the Start Branch of this Repository
## - The Docker Folder 
- **package.json**: This file contains the description of the application and its dependencies.
- **server.js**: This file uses the Express framework to define the web application that displays text on a webpage.
- **Dockerfile**: This file builds the Docker Container for this application from the node:14 image found on [Docker Hub](https://hub.docker.com/_/node), creates the directory `/usr/src/app` that holds the application code inside the image, installs the necessary dependencies with npm, copies the package.json, copies the application's source code into the Docker image with the COPY keyword, maps the port the application should run on Port 8080 by the docker daemon with the EXPOSE keyword, defines the command to run the application with the CMD keyword.

# Information on the Files in the feature Branch of this Repository
- **server.js**: This file uses the Express framework to define the web application that displays the text ''Welcome to SCA Cloud School Application, this is my first assessment'' on a webpage.


## Steps for Running Docker
1. To get this Docker image pushed to [Docker Hub](https://hub.docker.com/repository/docker/deborahemeni/sca-cloud-school-application), run the Docker pull command as described below:
`docker pull deborahemeni/sca-cloud-school-application`
2. To run this Docker container, run the following command below:
`docker run deborahemeni/sca-cloud-school-application`

The application is accessible via port 0.0.0.0:49160 on a browser.
