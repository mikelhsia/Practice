<?php 
interface Girl {
  // Boy need knows that I have some abilities.
}

class LoliGril implement Girl {
  // I will implement Girl's abilities.
}

class Vixen implement Girl {
  // Vixen definitely is a girl, do not doubt it.
}

class Boy {
  protected $girl;

  public function __construct(Girl $girl) {
    $this->girl = $girl;
  }
}

$loliGirl = new LoliGirl();
$vixen = new Vixen();

$boy = new Boy($loliGirl);
$boy = new Boy($vixen);


/* Summary
 * 因为大多数应用程序都是由两个或者更多的类通过彼此合作来实现业务逻辑，这使得每个对象都需要获取与其合作的对象
 *（也就是它所依赖的对象）的引用。如果这个获取过程要靠自身实现，那么将导致代码高度耦合并且难以维护和调试。
 */