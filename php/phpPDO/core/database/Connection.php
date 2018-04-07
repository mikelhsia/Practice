<?php

class Connection {
	// static function would allow this function to be called/used without instantiate this class
	public static function make($config){
	   	try {
			echo "<div class='alert alert-success'>";
			echo "</div>";
			// return new PDO('mysql:host=127.0.0.1;dbname=laravel', 'root', '');
			return new PDO(
				$config['connection'] . ';dbname=' . $config['name'], 
				$config['username'],
				$config['password'], 
				$config['options']
			);
		} catch (PDOException $e) {
			echo "<div class='alert alert-danger'>";
			die($e->getMessage());
			echo "</div>";
		}
	}
}