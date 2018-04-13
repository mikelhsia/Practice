<?php
/**
 * Created by PhpStorm.
 * User: puppylpy
 * Date: 12/04/2018
 * Time: 12:00 AM
 */

//echo "<pre>";
//var_dump($_POST);
//echo "</pre>";

$title = 'Names';

App::get('database')->insert('users', [
    'name' => $_POST['name'],
    'password' => $_POST['name'],
    'email' => $_POST['gender'] . "@hotmail.com"
]);

//require 'views/index.function.php';
//require 'views/index.view.header.php';

//echo "<h2> You typed " . $_POST['name'] . ", and I am a " . $_POST['gender'] . "</h2>";
//
//require 'views/index.view.bottom.php';

// Redirect the page to homepage
header('Location: /');
