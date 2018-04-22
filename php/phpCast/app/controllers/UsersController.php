<?php
/**
 * Created by PhpStorm.
 * User: puppylpy
 * Date: 2018/4/15
 * Time: 10:44 PM
 */
namespace App\Controllers;

use App\Core\App;

class UsersController
{
    public function index () {
        return view('users');
    }

    public function store () {
        //echo "<pre>";
        //var_dump($_POST);
        //echo "</pre>";

        $title = 'Names';

        App::get('database')->insert('users', [
            'name' => $_POST['name'],
            'password' => $_POST['name'] . $_POST['gender'],
            'email' => $_POST['name'] . "@hotmail.com"
        ]);

        //require 'views/index.function.php';
        //require 'views/index.view.header.php';

        //echo "<h2> You typed " . $_POST['name'] . ", and I am a " . $_POST['gender'] . "</h2>";
        //
        //require 'views/index.view.bottom.php';

        // Redirect the page to homepage
        // header('Location: /users');

        return redirect('users');

    }

}