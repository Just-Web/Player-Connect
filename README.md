# Player-Connect


## Project Setup 

### Client Side 
#### Change directory to the '/client' directory
- Install Yeoman, Bower and Grunt - `npm install -g yo bower grunt-cli`
- Install generator-angular and generator-karma `npm install generator-angular generator-karma`
- Install local grunt `npm install grunt-cli --save-dev`
- Install compass `sudo gem install compass`
##### if 'gem' is not recognized, install the rubygems package manager for your machine

### Server Side 
#### Change directory to the '/server' directory
- Install Express.js - `npm install express --save`
- Install Mongoose - `npm install mongoose --save`
- Install Body-Parser - `npm install body-parser --save`
- Install Nodemon - `sudo npm i -g nodemon`
- Install Passport - `npm install passport-local`

### Setup Environment Variables 
- export PORT = 5000 (for mac)
- set PORT = 5000 (for windows)


## Running the Project Locally 

### Client - ` grunt serve` 
### Server - `nodemon index.js`
### Database - `mongod` `mongo` `use nodekb`
