<?php
class Pessoa{
  public function insert($_POST){
    //Inserts the person's information to the array
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];
  }
  public function create{
    // Create a new email using PHPMailer
    require 'PHPMailer/PHPMailerAutoload.php';
    $mail = new PHPMailer;
    $mail->setFrom($email, $nome);
    $mail->addAddress('inspectords06@gmail.com', 'Inspector');
    $mail->Subject = 'Contato do site';
    $mail->Body = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";
  }
  if (!$mail->send()) 
    {
      echo 'Erro ao enviar e-mail: ' . $mail->ErrorInfo;
    } 
    else
    {
      echo 'E-mail enviado com sucesso!';
    }
  }
  header('Location: index.html'); 
exit;
// Check if the form has been submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") 
    $pessoa = new Pessoa;
    $pessoa->insere($_POST);