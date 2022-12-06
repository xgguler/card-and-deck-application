# Card and Deck Demo Application

A sample card and deck application to provide basic CRUD operations and build a REST API with Node.js, TypeScript, Mongoose and Docker.

In addition to the inclusion of dependencies, some development dependencies were added to [NOTES.md](NOTES.md) file which are required for execution.

You likely have to `npm install --global yarn` as well.

Note: This repository includes the postman collection for the finished API.([cards and decks collection.postman_collection.json](https://github.com/xgguler/card-and-deck-application/blob/main/cards%20and%20decks%20collection.postman_collection.json))

## What you will need
* A running instance of MongoDB on your local Docker environment
* Pull image of MongoDB from Docker Repository
* Postman
* An IDE or text editor (VS Code)
* A web browser
* A package manager such as NPM or Yarn
* Node.js installed
* Docker
* For testing Chai, Mocha and Supertest
* Zod library for validation 

## Technologies
* Node.js
* MongoDB with Mongoose
* Docker
* TypeScript
* Express.js & Express.js middleware
* Zod validation framework

## What we are using
* Docker (image)
* docker-compose (container)

## Execution Steps
* Install yarn as package manager `npm install --global yarn`
* Check NOTES.md file for required dependencies and execute the commands on application terminal.
* Install Docker on your local machine 
* Pull Mongo Db image and run 
* Install MongoDB Compass to connect database
* On application terminal run the `docker compose up` command
* To run application execute the `yarn dev` command
* To run test cases execute `yarn test` command

Note: You will need Docker installed locally if you want to test your Docker configutation
