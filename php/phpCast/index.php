<?php

// require the autoload file that composer created
require 'vendor/autoload.php';
require 'core/bootstrap.php';

// var_dump($app);

// $routes = new Router();
// require 'routes.php';

// redirect function return a php file path, therefore you require a view template file by using 'require'
// require $routes->redirect($uri);

// Simplified version
Router::load('routes.php')
	->redirect(Request::getUri(), Request::getMethod());