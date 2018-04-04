<?php

function connectToDB (){
	try {
		echo "<div class='alert alert-success'>";
		echo "</div>";
		return new PDO('mysql:host=127.0.0.1;dbname=laravel', 'root', '');
	} catch (PDOException $e) {
		echo "<div class='alert alert-danger'>";
		die($e->getMessage());
		echo "</div>";
	}
}

function dd ($value) {
	echo "<pre>";
	die(var_dump($value));
	echo "</pre>";
}

function fetchAllPosts($pdo) {
	$statement = $pdo->prepare('select * from posts');
	$statement->execute();

	// echo "<div class='alert alert-success'>";
	// dd($statement->fetchAll());
	// echo "</div>";

	// $results = $statement->fetchAll(PDO::FETCH_OBJ);
	// echo "<div class='alert alert-success'>";
	// dd($results[0]->body);
	// echo "</div>";

	// Fetch data and stuff those data into class "Task"
	$results = $statement->fetchAll(PDO::FETCH_CLASS, "Task");
	// dd($results);
	return $results;
}