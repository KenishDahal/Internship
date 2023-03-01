<?php

class Laptop {
  private $brand;
  private $model;
  private $price;

  public function __construct($brand, $model, $price) {
    $this->brand = $brand;
    $this->model = $model;
    $this->price = $price;
  }

  public function get_brand() {
    return $this->brand;
  }

  public function get_model() {
    return $this->model;
  }

  public function get_price() {
    return $this->price;
  }

  public function __toString() {
    return "This laptop is a " . $this->brand . " " . $this->model . " and costs $" . $this->price . ".";
  }

  public function __get($property) {
    if (property_exists($this, $property)) {
      return $this->$property;
    }
  }

  public function __set($property, $value) {
    if (property_exists($this, $property)) {
      $this->$property = $value;
    }
  }

  public function __call($name, $arguments) {
    if ($name == "double_price") {
      return $this->price * 2;
    }
  }
  
  public function __destruct() {
    echo "The " . $this->brand . " " . $this->model . " laptop has been destroyed.";
  }


  public function __debugInfo() {
    return [
      'brand' => $this->brand,
      'model' => $this->model,
      'price' => $this->price,
      'discounted_price' => $this->price * 0.9
    ];
  }

  
}

$laptop = new Laptop("Dell", "XPS 13", 1299.99);

$laptop->brand = "Apple";
$laptop->model = "m1";


echo $laptop->get_brand() . "<br>"; // Outputs "Apple" after setting the brand using __set() magic method

echo $laptop->double_price() . "<br>"; // Outputs "2599.98" using the __call() magic method

?>
