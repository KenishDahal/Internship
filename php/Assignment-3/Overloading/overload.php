<?php
class Integer {
  private $value;

  public function __construct($value) {
    $this->value = $value;
  }

  public function __invoke() {
    $this->value--;
  }

  public function getValue() {
    return $this->value;
  }
}

$num = new Integer(10);
// Decrease the value by 1 using the '-' operator
$num();

echo $num->getValue(); // Output: 9

?>
