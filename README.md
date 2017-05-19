# BucketChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Requirements

* NodeJS 6.9.0 or higher
* Angular CLI `$ npm install -g @angular/cli`

## Setup

Go to the folder you want to clone the project in and run

`$ git clone https://github.com/mrVers/bucket-challenge.git`

Then install all dependencies

* `$ npm i`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running with Docker

```
# Create the image
$ docker build -t bucket-challenge .

# Serve the image
$ docker run -d --name bucket-challenge -p 4200:4200 bucket-challenge

```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
