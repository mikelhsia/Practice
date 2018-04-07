<?php
$title = 'Homepage';

require 'views/Task.php';
require 'views/index.function.php';
require 'views/index.view.header.php';

?>

<div class="page-header">
	<h2>My Posts</h2>
</div>

<?php 
// $pdo = Connection::make();
// $results = fetchAllPosts($pdo);
// $query = new QueryBuilder($pdo);

$results = $app['database']->selectAll('posts', Task::class);
// $results = $query->selectAll('posts', Task::class);
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

// dd($results);
?>

<table class="table table-striped table-bordered table-hover table-condensed table-responsive">
  <caption>条纹表格布局</caption>
  <thead>
    <tr>
      <th>User ID</th>
      <th>Title</th>
      <th>Body</th>
      <th>Created At</th>
    </tr>
  </thead>
  <tbody>
  	<?php foreach ($results as $task):
  		echo "<tr>";
  		echo "<td>" . $task->user_id . "</td>";
  		echo "<td>" . $task->title . "</td>";
  		echo "<td>" . $task->body . "</td>";
  		echo "<td>" . $task->created_at . "</td>";
  		echo "</tr>";
    endforeach; ?>
  </tbody>
</table>

<?php
require 'views/index.view.bottom.php';
?>