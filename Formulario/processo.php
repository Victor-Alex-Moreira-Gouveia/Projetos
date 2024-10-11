<?php 
SESSION_start();
$servidor = "localhost";
$usuario = "Victor";
$senha = "19032007";
$dbname = "banco";

$conecxao = mysqli_connect($servidor, $usuario, $senha, $dbname);

$nome = filter_input(INPUT_POST, 'nome');
$email = filter_input(INPUT_POST, 'email');
$senha = filter_input(INPUT_POST, 'senha');

// echo"Nome: $nome <br>";
// echo"E-mail: $email <br>";
// echo"Senha: $senha <br>";

$result_usuario = "INSERT INTO users(Nome, Email, Senha) VALUES ('$nome', '$email', '$senha')";
$resultado_usuario = mysqli_query($conecxao, $result_usuario);

if (mysqli_insert_id($conecxao)) {
    header("Location: index.php");
    $_SESSION['msg'] ="<p style = 'color:green;'>Sua conta foi criado com sucesso!</p>";

}else {
    $_SESSION['msg'] ="<p style = 'color:red;'>Sua conta não foi criado tente novamente</p>";
    header("Location: idex.php");
}
?>