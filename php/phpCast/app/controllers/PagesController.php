<?php

/**
 * Created by PhpStorm.
 * User: puppylpy
 * Date: 2018/4/15
 * Time: 9:30 PM
 */

namespace App\Controllers;

class PagesController
{
    public function home() {
        // Receive the request
        // Delegate
        // Return a response
        return view('index');
    }

    public function about() {

        $author = "Michael Hsia";

//        return view('about', compact('author'));
        return view('about', [ 'author' => $author]);
    }

    public function about_culture() {
        return view('about-culture');
    }

    public function contact() {
        return view('contact');
    }
}