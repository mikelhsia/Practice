<?php 

/*
$routes->define([
	'' => 'controllers/index.php',
	'about' => 'controllers/about.php',
	'about/culture' => 'controllers/about-culture.php',
	'contact' => 'controllers/contact.php',
	'names' => 'controllers/add-name.php'   // only for POST types
]);
*/

// or

/*
$routes->define('', 'controllers/index.php');
$routes->define('about', 'controllers/about.php', );
$routes->define('about/culture', 'controllers/about-culture.php', );
$routes->define('contact', 'controllers/contact.php');
*/



$routes->get('', 'PagesController@home');
$routes->get('about', 'PagesController@about');
$routes->get('about/culture', 'PagesController@about_culture');
$routes->get('contact', 'PagesController@contact');
$routes->get('users', 'UsersController@index');

$routes->post('users', 'UsersController@store');
