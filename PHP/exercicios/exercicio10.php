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
        $random_numbers = [];
        while ($counter < 20) {
            $number = rand(1, 100);
            if (!in_array($number, $random_numbers)) {
                $random_numbers[] = $number;
                $counter++;
            }
        }
        sort($random_numbers);
        foreach ($random_numbers as $num) {
            echo $num . "<br>";
        }
    ?>
</body>
</html>