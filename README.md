# Stock Manager

## Server requirement
- PHP >= 7.1.3 (Laravel 5.6)

## Set it up
1. Clone this repo
2. `cp .env.example .env`. Set the database, user and password
3. `npm install`
4. `composer install`
5. `npm run development`
6. Create a database in mysql. Default: `stock_development`
7. Prepare database and seed data `php artisan migrate:refresh --seed`

## Run
 1. Start the server `php artisan serve`
 2. Open with browser `http://localhost:8000/`

## Design
- Everything are fitted into one single page for simplicity
- Company stock overview and highest market prices are combined together due to their similarity. Toggle the switch to change between the views.
- 


## Assumptions
- Company names are unique
- Each type of stock from one company can only be added once

## What's missing (to improve)
- Error handling
- Data validation
