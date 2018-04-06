<?php 
class Boy {
  protected $girl;

  public function __construct() {
  	// 我们会发现Boy的女朋友被我们硬编码到Boy的身体里去了。。。 每次Boy重生自己想换个类型的女朋友都要把自己扒光才行。。。
  	// 某天Boy特别喜欢一个LoliGirl ,非常想让她做自己的女朋友。。。怎么办？
	// 重生自己。。。扒开自己。。。把Girl扔了。。。把 LoliGirl塞进去。。。
    $this->girl = new Girl();
  }
}

class Girl {
  // 
}

$boy = new Boy();  // Error; Boy must have girlfriend!

// so 必须要给他一个女朋友才行 
$girl = new Girl();

// Right! So Happy!
$boy = new Boy($girl); 
