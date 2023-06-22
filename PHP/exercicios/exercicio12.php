<?php
    $informacoes = [
        "nome" => "Joao",
        "idade" => 20,
        "altura" => 1.80,
        "peso" => 80,
        "profissao" => "Programador",
    ]

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        foreach($informacoes as $key => $value){
           echo ucfirst($key) . " = " . $value . "<br>";
        }
    ?>
</body>
</html>