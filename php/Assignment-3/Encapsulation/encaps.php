<?php
class ATM
{
    private $custid;
    private $atmpin;
    private $balance;

    public function PinChange($custid, $atmpin)
    {
        $this->custid = $custid;
        $this->atmpin = $atmpin;
    }
    public function getpin()
    {
        echo "<br/> customer ID ". $this->custid ;
        echo " <br/> atm pin ". $this->atmpin ;
    
    }


    public function setBalance($custid,$atmpin,$bal)
    {
        $this->custid = $custid;
        $this->atmpin = $atmpin;
        $this->balance = $bal;
    }

    public function getBalance()
    {
        $balance = 10000;
        if ($this->custid && $this->atmpin  !== null) {
            echo "Account balance for customer ID $this->custid : $balance\n";
        } else {
            echo "Provide customer ID or ATM PIN\n <br/>";
        }
    }

}

$obj = new ATM();
$obj->setBalance("101","1234","100000");
$obj->getBalance();
$obj->PinChange("111","234");
$obj->getPin("111","234");




