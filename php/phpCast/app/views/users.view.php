<?php
/**
 * Created by PhpStorm.
 * User: puppylpy
 * Date: 2018/4/15
 * Time: 10:32 PM
 */

use App\Core\App;

$title = 'Homepage';

// Don't need these because composer
//require 'views/Task.php';
//require 'views/User.php';
require 'app/views/index.function.php';
require 'app/views/index.view.header.php';


echo '<div class="page-header">
            <h2 class="panel-title">Submit your name</h2>
        </div>
        <div>
            <form class="form-control" method="POST" action="/users">
                <div>
                    <input name="name">
                </div>
                <div>
                    <input type="checkbox" id="boy" name="gender" value="boy">
                    <label for="boy">boy</label>
                </div>
                <div>
                    <input type="checkbox" id="girl" name="gender" value="girl">
                    <label for="girl">girl</label>
                </div>
                <div class="right">
                    <button class="btn-default btn-info" type="submit">Submit</button>
                </div>
            </form>
        </div>

        <div class="page-header">
            <h2>My Posts</h2>
        </div>';

// $pdo = Connection::make();
// $results = fetchAllPosts($pdo);
// $query = new QueryBuilder($pdo);

$results = App::get('database')->selectAll('users', User::class);
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

echo '<table class="table table-striped table-bordered table-hover table-condensed table-responsive">
            <caption>条纹表格布局</caption>
            <thead>
            <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>email</th>
                <th>Created At</th>
            </tr>
            </thead>
            <tbody>';
$last = array_pop($results);
foreach ($results as $user):
    echo "<tr>";
    echo "<td>" . $user->id . "</td>";
    echo "<td>" . $user->name . "</td>";
    echo "<td>" . $user->email . "</td>";
    echo "<td>" . $user->created_at . "</td>";
    echo "</tr>";
endforeach;

echo "<tr class='bg-success'>";
echo "<td>" . $last->id . "</td>";
echo "<td>" . $last->name . "</td>";
echo "<td>" . $last->email . "</td>";
echo "<td>" . $last->created_at . "</td>";
echo "</tr>";

echo '</tbody>
        </table>';

require 'app/views/index.view.bottom.php';
