<?php

require('Task.php');
require('index.function.php');
require('index.layout.header.php');


$conn = connectToDB();

$results = fetchAllPosts($conn);
dd($results);

require('index.layout.bottom.php');
?>