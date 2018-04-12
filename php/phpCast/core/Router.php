<?php

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
        if (array_key_exists($uri, $this->routes[$requestType])) {
            return $this->routes[$requestType][$uri];
        }

        throw new Exception('No routes defined for this URI');
    }

}