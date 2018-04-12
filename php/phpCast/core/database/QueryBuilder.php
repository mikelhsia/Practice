<?php

class QueryBuilder {
	protected $pdo;

	public function __construct($pdo) {
		$this->pdo = $pdo;
	}


	public function selectAll($table, $intoClass) {
		// dd("select * from {$table}");
		// dd('select * from {$table}');
		$statement = $this->pdo->prepare("select * from {$table}");
		$statement->execute();
		return $statement->fetchAll(PDO::FETCH_CLASS, $intoClass);
	}

	public function insert ($table, $parameters) {
	    $sql = sprintf('insert into %s (%s) values (%s)',
            $table,
            implode(', ', array_keys($parameters)),
            ':' . implode(', :', array_keys($parameters)));

	    try {
            $statement = $this->pdo->prepare($sql);

            // Here you need to bind the values
            $statement->execute($parameters);
        } catch (Exception $e) {
	        die('Whoops! Something went wrong: ' . $e->getMessage());
        }
    }
}