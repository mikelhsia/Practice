<?php

class Router {
	protected $routes = [];

	public function define ($routes) {
		$this->routes = $routes;
	}

	public function redirect ($uri) {
		if (array_key_exists($uri, $this->routes)) {
			return $this->routes[$uri];
		}

		throw new Exception('No routes defined for this URI');
	}

	public static function load($file) {
		$routes = new static;
		require $file;

		return $routes;
	}
}