<?php

function dd ($value) {
	echo "<pre>";
	die(var_dump($value));
	echo "</pre>";
}

/******************
 * Deprecated
 ******************/
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