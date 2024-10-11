<?php 
SESSION_start();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="index.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="camada1">
        <h1>Cadastrar usuário</h1>
        <form action="processo.php" method="post" accept="on">
            <div>
                <label for="nome">Nome: </label>
                <input type="text" name="nome" id="nome" placeholder="Nome Completo"><br><br>
            </div>

            <div>
                <label for="email">E-mail: </label>
                <input type="email" name="email" id="email" placeholder="Ex: nome@gmail.com"><br><br>
            </div>

            <div>
                <label for="senha">Senha</label>
                <input type="password" name="senha" id="senha" placeholder="Min: 8 caracteres"><br><br>
            </div>

            <input type="submit" value="Cadastrar-se" id="btn">
            <?php 
        if (isset($_SESSION['msg'])) {
            echo $_SESSION['msg'];
            unset($_SESSION['msg']);
        }
        ?>
        </form>
    </div>
</body>
</html>