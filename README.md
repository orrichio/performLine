# PerformLine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Install Latest Stable Node 

Install Node [Node 8.11.4](https://nodejs.org/en/)

## Install Angular CLI

npm install -g @angular/cli

## Clone this Repo to local machine

## Follow instructions in article to generate a SSL Certificate client side and run localhost as HTTPS 

We need to run the localhost site with https since the request is only allowed with an SSL over that specific port. 

Here is a good step by step guide that I followed: [Running Angular App with HTTPS](https://medium.com/@rubenvermeulen/running-angular-cli-over-https-with-a-trusted-certificate-4a0d5f92747a)

## Verify that the SSL cert is trusted and installed

If there are any issues, please let me know. There should be a decent troubleshooting section in the article.

## If that all checks out, run the local server with this command 

ng serve --ssl true --ssl-cert "ssl/server.crt" --ssl-key "ssl/server.key" --proxy-config=proxy.conf.json

We need to run this with a proxy server because the api is a little tricky and needs to be rerouted through a server it trusts? 

## Project should be good to go!




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

