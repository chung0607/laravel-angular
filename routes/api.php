<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('companies', 'CompanyController')->only([
    'index', 'store'
]);

Route::resource('markets', 'MarketController')->only([
    'index'
]);

Route::resource('stocks', 'StockController')->only([
    'index', 'store'
]);