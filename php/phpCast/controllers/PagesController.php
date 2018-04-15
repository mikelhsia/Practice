<?php

/**
 * Created by PhpStorm.
 * User: puppylpy
 * Date: 2018/4/15
 * Time: 9:30 PM
 */
class PagesController
{
    public function home() {
        // Receive the request
        // Delegate
        // Return a response
        return views('index');
    }

    public function about() {

        $author = "Michael Hsia";

//        return view('about', compact('author'));
        return views('about', [ 'author' => $author]);
    }

    public function about_culture() {
        return views('about-culture');
    }

    public function contact() {
        return views('contact');
    }
}