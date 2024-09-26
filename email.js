/*emailjs.init("tAVoEWJTpleV0wknM");

// Get the form elements
const form = document.querySelector('main');
const nomeInput = document.querySelector('input[placeholder="Nome"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const assuntoInput = document.querySelector('input[placeholder="Assunto"]');
const mensagemTextarea = document.querySelector('textarea[placeholder="Sua mensagem"]');
const submitButton = document.querySelector('input[type="submit"]');

// Add an event listener to the form submission
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir o envio padrão do formulário

  // Get the form values
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const assunto = assuntoInput.value.trim();
  const mensagem = mensagemTextarea.value.trim();

  // Validate inputs
  if (!nome || !email || !assunto || !mensagem) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Create a new Pessoa instance and call the insert and create methods
  const pessoa = new Pessoa();
  pessoa.insert({ nome, email, assunto, mensagem });
  pessoa.create(); // Chama o método create para enviar o email
});

// Pessoa class
class Pessoa {
  constructor() {}

  insert(data) {
    this.nome = data.nome;
    this.email = data.email;
    this.assunto = data.assunto;
    this.mensagem = data.mensagem;
  }

  create() {
    const params = {
      name: this.nome,
      email: this.email, // Incluindo email
      subject: this.assunto, // Incluindo assunto
      message: this.mensagem
    };

    // Log params for debugging
    console.log('Enviando dados para o EmailJS:', params);
  
    emailjs.send("service_ivlnrsp", "template_vor6p67", params)
      .then((response) => {
        alert('Email enviado com sucesso!');
        window.location.href = 'index.html';
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error);
        alert('Erro ao enviar email. Por favor, tente novamente.');
      });
  }
}*/

// Get the form elements
const form = document.querySelector('main');
const nomeInput = document.querySelector('input[placeholder="Nome"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const assuntoInput = document.querySelector('input[placeholder="Assunto"]');
const mensagemTextarea = document.querySelector('textarea[placeholder="Sua mensagem"]');
const submitButton = document.querySelector('input[type="submit"]');

// Add an event listener to the form submission
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the form values
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const assunto = assuntoInput.value.trim();
  const mensagem = mensagemTextarea.value.trim();

  // Validate inputs
  if (!nome || !email || !assunto || !mensagem) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Set the sender's email address (the other person's email address)
  const senderEmail = email;

  // Set the recipient's email address (your email address)
  const recipientEmail = "inspectords06@gmail.com";

  // Create a new EmailJS instance
  emailjs.init("_nLlRr78k-i6tpvEg");

  // Send the email to you with the form information
  emailjs.send("service_ivlnrsp", "service_24bylqd",  "template_vor6p67", {
    from: senderEmail,
    to: recipientEmail,
    name: nome,
    email: email,
    subject: assunto,
    message: mensagem
  })
  .then((response) => {
    console.log('Email sent to you successfully!');
  })
  .catch((error) => {
    console.error('Error sending email to you:', error);
  });

  // Send a confirmation email to the person who filled out the form
  emailjs.send("service_ivlnrsp", "service_24bylqd", "template_2u9wif9", {
    from: recipientEmail,
    to: senderEmail,
    name: nome,
    message: `A equipe INSPECTOR,agradece por entrar em contato conosco! Recebemos sua mensagem e responderemos assim que posssível.`
  })
  .then((response) => {
    console.log('Confirmation email sent to the person successfully!');
  })
  .catch((error) => {
    console.error('Error sending confirmation email:', error);
  });

  alert('Email enviado com sucesso!');
  window.location.href = 'index.html';
});