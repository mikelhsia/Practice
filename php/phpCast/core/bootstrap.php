<?php

// Don't need these because composer create class dependency for us
//require 'core/Router.php';
//require 'core/Request.php';
//require 'core/database/Connection.php';
//require 'core/database/QueryBuilder.php';
/*
$app = [];

$app['config'] = require 'config.php';

$app['database'] = new QueryBuilder(
	Connection::make($app['config']['database'])
);
*/

/*
 Key name = config
 Find the configuration array, and store it in our container
*/
App::bind('config', require 'config.php');

//Grab the configuration array
//$config = App::get('config');

App::bind('database', new QueryBuilder(
    Connection::make(App::get('config')['database'])));

function views($name, $data = []) {
    // extract:
    // ['author' => 'Michael']
    // then create $author = 'Michael'
    extract($data);
    return require "views/${name}.view.php";
}

function redirect($path) {
    header('Location: /' . $path);
}