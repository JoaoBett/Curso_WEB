<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $counter = 0;
    $random_number = [];
    while($counter < 20){
        $number = rand(1,100);
        if(!in_array($number,$random_number) && $number % 10 != 0){
            $random_number[] = $number;
            $counter++;
        }
    }
    sort($random_number);
    foreach ($random_number as $number) {
        echo $number . "<br>";
    }
    ?>
</body>
</html>