// Get the form elements
const form = document.querySelector('main');
const nomeInput = document.querySelector('input[placeholder="Nome"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const assuntoInput = document.querySelector('input[placeholder="Assunto"]');
const mensagemTextarea = document.querySelector('textarea[placeholder="Sua mensagem"]');
const submitButton = document.querySelector('input[type="submit"]');

// Add an event listener to the form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form values
  const nome = nomeInput.value;
  const email = emailInput.value;
  const assunto = assuntoInput.value;
  const mensagem = mensagemTextarea.value;

  // Create a new Pessoa instance and call the insert and create methods
  const pessoa = new Pessoa();
  pessoa.insert({ nome, email, mensagem });
  pessoa.create({ nome, email, mensagem });

  // Redirect to index.html
  window.location.href = 'index.html';
});

// Pessoa class
class Pessoa {
  constructor() {}

  insert(data) {
    // Extract values from the data object
    const nome = data.nome;
    const email = data.email;
    const mensagem = data.mensagem;
  }

  create(data) {
    // Create a new email using a JavaScript email library (e.g., EmailJS)
    const email = new EmailJS();
    email.setFrom(email, nome);
    email.addRecipient('inspectords06@gmail.com', 'Inspector');
    email.setSubject('Contato do site');
    email.setBody(`Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);
    email.send().then(() => {
      console.log('E-mail enviado com sucesso!');
    }).catch((error) => {
      console.error('Erro ao enviar e-mail:', error);
    });
  }
}