<?php
$profissoes = [
    "Programador",
    "Designer",
    "Engenheiro",
    "Médico",
    "Advogado",
    "Professor",
    "Bombeiro",
    "Policial",
    "Piloto",
    "Cientista"
];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Profissões</th>
                <th>Em maiúsculas</th>
                <th>Em minúsculas</th>
                <th>Primeiras 4 letras</th>
                <th>Total de caracteres</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($profissoes as $profissao): ?>
                <tr>
                    <td><?php echo $profissao; ?></td>
                    <td><?php echo strtoupper($profissao); ?></td>
                    <td><?php echo strtolower($profissao); ?></td>
                    <td><?php echo substr($profissao, 0, 4); ?></td>
                    <td><?php echo strlen($profissao); ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
