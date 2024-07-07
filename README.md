# AngularStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## About the project

The goal of this project was to create a basic store frontend in Angular as
a single-page web application.

The list of products is fetched from the sample file at github and then used
to present the products in an overview. You can choose to get more information
by clicking on the product image which will lead you to a separate product page.
On that page and on the list as well, you can add items to your cart. That's
reported by a plain `alert` message - didn't bother to create an extra
component as the demo video uses that to give feedback.

At any time, you may visit the shopping cart by using the navigation bar at the
top. It may be empty or contain items. If it contains items, you'll see the
subtotals depending on the number of items that you put into the shopping cart.
You can decide to change the number here. You'll also see the total sum.

You will then have to enter your full name (minimum 6 chars), an address
(minimum 12 chars) and a credit card number (minimum 16 chars). Pretty crude
validation, no color coding, etc. but that should suffice.

And then you can send your order!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
