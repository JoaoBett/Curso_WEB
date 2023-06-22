<?php
    $frutos = ["Maçã","Laranja", "Banana", "Pêra", "Mamão", "Melancia", "Melão"];
    sort($frutos);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <?php
            foreach($frutos as $frutos):
        ?>
        <li>
            <? echo $frutos ?>
        </li>
        <?php endforeach ?>
    </ul>
</body>
</html>