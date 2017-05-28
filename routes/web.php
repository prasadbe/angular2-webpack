<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$app->group(['prefix' => 'api'], function () use ($app) {
    $app->get('module1', ['uses' => 'Controller@test']);
    $app->post('login', ['uses' => 'Password@doLogin']);
});
$app->get('/{task}', function () use ($app) {
    return view('index');
});
$app->get('/', function () use ($app) {
    return view('index');
});
