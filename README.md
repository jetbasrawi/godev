# godev

Example setup that will create a Docker container with a running Go web application. When you save your Go or HTML code, the application will be recompiled and the new code will be run.

The solution works with both docker-machine on OSX and Windows as well as Docker running in a Linux Vagrant VM.

If you are using with Vagrant, clone the repository into a location that is shared with your Vagrant VM. 
If you are using with docker-machine, clone the repository to your preferred location, ideally this would be on the GOPATH. 

You will need to install Gulp on your workstation. This will require you to npm install Gulp at the global level and then into the application folder godev.

See.

https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

Gulp is required in the application directory on the workstation because this directory will be mounted into the web container and Gulp running on the web container will look for it there.

$ npm rm --global gulp

$ npm install --global gulp-cli

From the project directory run
$ npm install --save-dev gulp

Once you have installed Gulp you should be good to go.

From the CLI in your vagrant VM or docker-machine navigate to the project folder and run the docker-compose up command.

$ docker-compose up

The web container should be built and run in attached mode. 

You should see the Grunt tasks logging to the command line.

The code runs on port 8080. If you are running vagrant, you can forward this port to your workstation and you can view the running application at http://localhost:8080 in the browser on your workstation.

If you are using docker-machine you can view the application at the IP address of your docker-machine at port 8080 e.g http://192.168.99.100:8080

Edit the index.html file or the main.go file in your preferred editor and then refresh the application in the browser and you should see the changes.

