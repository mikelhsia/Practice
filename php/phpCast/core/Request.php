<?php

namespace App\Core;

class Request {
	public static function getUri () {
	    return trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
	}

	public static function getMethod () {
        return $_SERVER['REQUEST_METHOD'];  // Either GET or POST
    }
}