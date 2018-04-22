<?php
/**
 * Created by PhpStorm.
 * User: puppylpy
 * Date: 13/04/2018
 * Time: 11:55 PM
 */

namespace App\Core;

// Dependency injection container
class App {

    // Make variable static as well, so that you could access it even before the instance is created
    protected static $registry = [];
    public static function bind  ($key, $value) {
        static::$registry[$key] = $value;
    }

    public static function get ($key) {
        if (! array_key_exists($key, static::$registry)) {
            throw new Exception('No {$key} is bound in the container.');
        }

        return static::$registry[$key];
    }
}