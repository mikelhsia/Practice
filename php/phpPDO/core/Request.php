<?php

class Request {
	public static function getUri () {
		return trim($_SERVER['REQUEST_URI'], '/');
	}
}