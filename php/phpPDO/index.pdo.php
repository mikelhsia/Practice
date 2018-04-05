<?php


require('Task.php');
require('index.function.php');
require('index.layout.header.php');


// $pdo = Connection::make();
// $results = fetchAllPosts($pdo);
// $query = new QueryBuilder($pdo);

$query = require('bootstrap.php');
$results = $query->selectAll('posts', Task::class);
// If table name not exist
// $results = $query->selectAll('123', Task::class);

// $results = $results.array_map(function ($result) {
// 	$t = new Task();
// 	$t->user_id = $result['user_id'];
// 	$t->title = $result['title'];
// 	$t->body = $result['body'];
// 	$t->created_at = $result['created_at'];
// 	return $t;
// }, $results)

dd($results);

require('index.layout.bottom.php');
?>