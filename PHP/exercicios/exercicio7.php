<?php
    $nomes = [
        "João Oliveira",
        "Maria Teixeira",
        "José Silva",
        "Ana Santos",
        "Pedro Rodrigues",
        "Paula Castro",
        "Lucas Dinis",
        "Luiz Matias",
        "Paula Cardoso",
        "Paulina Fernandes"
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
  <ul>
    <?php foreach($nomes as $nomes):
            if(strlen($nomes) > 12):
                continue;
            endif;
    ?>    
    <li>
         <?php echo $nomes ?>
    </li>
    <?php endforeach ?>
  </ul>  
</body>
</html>