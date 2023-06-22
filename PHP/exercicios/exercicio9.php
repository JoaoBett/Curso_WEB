<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $random_number = 0;
        $counter = 0;
        while($counter < 20):
            $counter++;
            $random_number = rand(1,100);
            echo "$random_number * 3 = ". $random_number * 3 ."<br>";
        endwhile;
    ?>
</body>
</html>