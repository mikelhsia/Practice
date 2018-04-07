<?php 

$routes->define([
	'' => 'controllers/index.php',
	'about' => 'controllers/about.php',
	'about/culture' => 'controllers/about-culture.php',
	'contact' => 'controllers/contact.php'
]);

// or

/*
$routes->define('', 'controllers/index.php');
$routes->define('about', 'controllers/about.php', );
$routes->define('about/culture', 'controllers/about-culture.php', );
$routes->define('contact', 'controllers/contact.php');
*/