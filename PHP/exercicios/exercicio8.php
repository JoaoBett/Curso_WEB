<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        for($i=2; $i<=6; $i++):
            for($j=1; $j<=10; $j++):
                echo "$i x $j = ". $i*$j . "<br>";
            endfor;
            echo $i < 6 ? "<hr>" : "";
        endfor;
    ?>
</body>
</html>