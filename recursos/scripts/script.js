'use strict';



// função de alternância de elemento
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// variáveis da barra lateral
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// funcionalidade de alternância da barra lateral para mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// variáveis de depoimentos
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// variáveis do modal
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// função de alternância do modal
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// adicionar evento de clique a todos os itens do modal
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// adicionar evento de clique ao botão de fechar do modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// variáveis de seleção personalizada
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// adicionar evento em todos os itens de seleção
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// variáveis de filtro
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// adicionar evento em todos os itens de botão de filtro para telas grandes
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// variáveis do formulário de contato
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const feedbackDiv = document.getElementById("form-feedback");

// Inicializar EmailJS (você precisará substituir por suas próprias credenciais)
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pela sua chave pública do EmailJS
})();

// Função para mostrar feedback
function showFeedback(type, message) {
  const feedbackContent = feedbackDiv.querySelector('.feedback-content');
  const icon = feedbackContent.querySelector('.feedback-icon');
  const messageElement = feedbackContent.querySelector('.feedback-message');
  
  // Remover classes anteriores
  icon.className = 'feedback-icon';
  
  if (type === 'success') {
    icon.classList.add('success');
    icon.setAttribute('name', 'checkmark-circle');
  } else {
    icon.classList.add('error');
    icon.setAttribute('name', 'close-circle');
  }
  
  messageElement.textContent = message;
  feedbackDiv.style.display = 'block';
  
  // Esconder feedback após 5 segundos
  setTimeout(() => {
    feedbackDiv.style.display = 'none';
  }, 5000);
}

// Função para enviar email
function sendEmail(formData) {
  const templateParams = {
    from_name: formData.get('fullname'),
    from_email: formData.get('email'),
    message: formData.get('message'),
    to_email: 'arthurbrunocesar2005@hotmail.com' // Seu email
  };

  // Substitua 'YOUR_SERVICE_ID' e 'YOUR_TEMPLATE_ID' pelas suas credenciais do EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
      console.log('Email enviado com sucesso!', response.status, response.text);
      showFeedback('success', 'Mensagem enviada com sucesso! Entrarei em contato em breve.');
      form.reset(); // Limpar formulário
      formBtn.setAttribute("disabled", ""); // Desabilitar botão novamente
    }, function(error) {
      console.log('Erro ao enviar email:', error);
      showFeedback('error', 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email.');
    });
}

// Adicionar evento de submit ao formulário
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevenir envio padrão
  
  const formData = new FormData(form);
  
  // Validar campos
  if (!form.checkValidity()) {
    showFeedback('error', 'Por favor, preencha todos os campos corretamente.');
    return;
  }
  
  // Mostrar loading no botão
  const originalText = formBtn.innerHTML;
  formBtn.innerHTML = '<ion-icon name="hourglass-outline"></ion-icon><span>Enviando...</span>';
  formBtn.setAttribute("disabled", "");
  
  // Simular envio (substitua por sendEmail(formData) quando configurar EmailJS)
  setTimeout(() => {
    // Para demonstração, vamos simular um envio bem-sucedido
    showFeedback('success', 'Mensagem enviada com sucesso! Entrarei em contato em breve.');
    form.reset();
    formBtn.innerHTML = originalText;
    formBtn.setAttribute("disabled", "");
    
    // Descomente a linha abaixo quando configurar o EmailJS:
    // sendEmail(formData);
  }, 2000);
});

// adicionar evento a todos os campos de entrada do formulário
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // verificar validação do formulário
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// variáveis de navegação de página
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// adicionar evento a todos os links de navegação
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      const pageName = this.innerHTML.toLowerCase();
      const pageData = pages[j].dataset.page;
      
      // Mapear textos em português para os data-page em inglês
      if (pageName === "sobre" && pageData === "about") {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else if (pageName === "currículo" && pageData === "resume") {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else if (pageName === "portfólio" && pageData === "portfolio") {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else if (pageName === "blog" && pageData === "blog") {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else if (pageName === "contato" && pageData === "contact") {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}