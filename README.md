# godev

Example showing how to setup an application development environment when you want to run your code on Docker containers during development.

The example uses Gulp to compile the Go application inside the container and to restart the application when file changes are detected. Simply save your Go code or HTML files and refresh your browser.

Many solutions rely on Inotify to watch for file changes. Importantly this works even when Inotify is broken as is the case when using Virtualbox on OSX or Windows to run docker-machine of Linux Vagrant VMs.

The repository contains a simple cononical example of a Go web application using *html/templates* templating serving on port 8080 using *net/http*.

A Dockerfile defines a container from *golang/1.6-alpine* and installs all the required dependencies and sets up the Go application directories and Go paths.

A *docker-compose.yml* file defines the environment and mounts the code that resides on your workstation into the web container.

The solution works with both docker-machine on OSX and Windows as well as Docker running in a Linux Vagrant VM.

You will need to install Gulp on your workstation both globally and 

If you are using with Vagrant, clone the repository into a location that is shared with your Vagrant VM.

If you are using with docker-machine, clone the repository to your preferred location. 

You will need to install Gulp on your workstation. This will require you to npm install Gulp at the global level and then into the application folder godev.

https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

Gulp is required in the application directory and of course you could do this on the container as a RUN command in the Dockerfile. However, when the application folder from your workstation is mounted, it will mask the volume on the container and the local install will not be found.

On your workstation run:

`$ npm rm --global gulp`

`$ npm install --global gulp-cli`


From the application directory .../github.com/jetbasrawi/godev run

`$ npm install --save-dev gulp`

Once you have installed Gulp you should be good to go.

From the CLI in your vagrant VM or docker-machine navigate to the project folder and run the docker-compose up command.

`$ docker-compose up`

The web container should be built and run in attached mode. 

You should see the Grunt tasks logging to the command line.

You should now be able to view the application in the browser of your workstation.

If you are running vagrant, you can forward this port to your workstation and you can view the running application at http://localhost:8080.

If you are using docker-machine you can view the application at the IP address of your docker-machine at port 8080 e.g http://192.168.99.100:8080.

To test the setup, edit the index.html file or the main.go file in your preferred editor on your workstation and then refresh the application in the browser and you should see the changes.