<?php

/**
 * Created by PhpStorm.
 * User: puppylpy
 * Date: 11/04/2018
 * Time: 9:13 PM
 */
class Post
{
    public $title;
    public $author;
    public $published;

    public function __construct($title, $author, $published)
    {
        $this->title = $title;
        $this->author = $author;
        $this->published = $published;
    }
}


$posts = [
    new Post('My First Post', 'MH', true),
    new Post('My Second Post', 'MH', true),
    new Post('My Third Post', 'MH', true),
    new Post('My Fourth Post', 'MH', false)
];


$unpublishedPosts = array_filter($posts, function (Post $post) {
    return !$post->published;
});

$publishedPosts = array_filter($posts, function (Post $post) {
    return $post->published;
});


$modifiedPosts = array_map(function (Post $post) {
    $post->published = !$post->published;
    return $post;
}, $posts);


$postsTitles = array_column($posts, 'title');

$postsTitlesAuthors = array_column($posts, 'author', 'title');

//var_dump($posts);
//var_dump($publishedPosts);
//var_dump($unpublishedPosts);
//var_dump($modifiedPosts);
//var_dump($postsTitles);
var_dump($postsTitlesAuthors);
