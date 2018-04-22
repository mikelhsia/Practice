<?php

namespace App\Core;

class Router {
//    protected $routes = [ ];

    // Making it an array of array
	protected $routes = [
	    'GET' => [],
        'POST' => []
    ];

	public function define ($routes) {
		$this->routes = $routes;
	}

	public function get ($uri, $controller) {
        $this->routes['GET'][$uri] = $controller;
    }

    public function post ($uri, $controller) {
        $this->routes['POST'][$uri] = $controller;
    }

    public static function load($file) {
        $routes = new static;
        require $file;

        return $routes;
    }

    public function redirect ($uri, $requestType) {
        if (! array_key_exists($uri, $this->routes[$requestType])) {
            throw new Exception('No routes defined for this URI');
        }

        // return $this->routes[$requestType][$uri];
        // If you pass an array into a function with "Splat operator", then array will be converted into variables of the function
        // https://lornajane.net/posts/2014/php-5-6-and-the-splat-operator
        return $this->callAction(
            ...explode('@', $this->routes[$requestType][$uri])
        );

    }

    protected function callAction ($controller, $action) {
	    $controller = "App\\Controllers\\{$controller}";
	    $controller = new $controller;

	    if (! method_exists($controller, $action)) {
	        throw new Exception("${controller} does not respond to the ${action} action");
        }
	    return $controller->$action();

    }

}