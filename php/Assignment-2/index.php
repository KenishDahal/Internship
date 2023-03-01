<?php

class Student {
  protected $name;
  protected $age;
  protected $gender;
  protected $grade;

  public function __construct($name, $age, $gender, $grade) {
    $this->name = $name;
    $this->age = $age;
    $this->gender = $gender;
    $this->grade = $grade;
    
  }

  public function get_name() {
    return $this->name;
  }

  public function get_age() {
    return $this->age;
  }

  public function get_gender() {
    return $this->gender;
  }

    public function get_grade() {
    return $this->grade;
  }
}

class ComputerScience extends Student {
  protected $subject1;
  protected $subject2;
  protected $subject3;

  public function __construct($name, $age, $gender,$grade, $subject1, $subject2, $subject3) {
    parent::__construct($name, $age, $gender,$grade);
    $this->subject1 = $subject1;
    $this->subject2 = $subject2;
    $this->subject3 = $subject3;
  }

  public function get_subject1() {
    return $this->subject1;
  }

  public function get_subject2() {
    return $this->subject2;
  }

  public function get_subject3() {
    return $this->subject3;
  }

  public function get_average() {
    $total = $this->subject1 + $this->subject2 + $this->subject3;
    return $total / 3;
  }
}

class Mathematics extends Student {
  protected $subject1;
  protected $subject2;
  protected $subject3;

  public function __construct($name, $age, $gender,$grade ,$subject1, $subject2, $subject3) {
    parent::__construct($name, $age, $gender,$grade);
    $this->subject1 = $subject1;
    $this->subject2 = $subject2;
    $this->subject3 = $subject3;
  }

  public function get_subject1() {
    return $this->subject1;
  }

  public function get_subject2() {
    return $this->subject2;
  }

  public function get_subject3() {
    return $this->subject3;
  }

  public function get_average() {
    $total = $this->subject1 + $this->subject2 + $this->subject3;
    return $total / 3;
  }
}

function main(){
    $cs_student = new ComputerScience("Alice", 20, "female",10, 85, 90, 95);
    $math_student = new Mathematics("Bob", 19, "male",10, 90, 80, 85);

    echo "Computer Science student average: " .$cs_student->get_average() . "<br/>";
    echo "Mathematics student average: " . $math_student->get_average();
}

main()

?>
