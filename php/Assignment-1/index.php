<?php
    $myFile = fopen('input.txt', 'r');

    $text = fread($myFile, filesize("input.txt"));
    
    $calory_carried = explode("\n\n", $text);

    foreach ($calory_carried as $calory) {
        $sum_calory[] = array_sum(explode("\n", $calory));
    }
    
    $max = max($sum_calory);
    echo ("Maximum calory carried by a monk is: $max ");
    rsort($sum_calory);

    echo nl2br("\nHighest three calories carried by a monk: ");
    for ($i = 0; $i < 3; $i++) {
        echo ( "<br/>".$sum_calory[$i] );
    }
?>