# 📧 Configuração do Formulário de Contato

## ✅ O que já está funcionando:

- ✅ **Validação de campos** - Campos obrigatórios são validados
- ✅ **Feedback visual** - Mensagens de sucesso/erro aparecem
- ✅ **Animação de loading** - Botão mostra "Enviando..." durante o processo
- ✅ **Limpeza automática** - Formulário é limpo após envio
- ✅ **Simulação funcional** - Atualmente simula o envio (funciona para demonstração)

## 🔧 Para fazer funcionar com emails reais:

### Passo 1: Criar conta no EmailJS
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Confirme seu email

### Passo 2: Configurar serviço de email
1. No dashboard do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** (ex: `service_abc123`)

### Passo 3: Criar template de email
1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template assim:

```
Assunto: Nova mensagem do portfólio - {{from_name}}

Corpo:
Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado através do formulário de contato do portfólio.
```

4. **Anote o Template ID** (ex: `template_xyz789`)

### Passo 4: Obter chave pública
1. Vá em **"Account"** → **"General"**
2. **Anote a Public Key** (ex: `user_abc123def456`)

### Passo 5: Atualizar o código
No arquivo `recursos/scripts/script.js`, substitua:

```javascript
// Linha 126 - Substitua pela sua chave pública
emailjs.init("SUA_PUBLIC_KEY_AQUI");

// Linha 165 - Substitua pelas suas credenciais
emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
```

### Passo 6: Ativar envio real
No arquivo `recursos/scripts/script.js`, linha 203:
```javascript
// Descomente esta linha:
sendEmail(formData);

// E comente ou remova o setTimeout de simulação
```

## 🎯 Resultado Final:
- ✅ Emails serão enviados para: `arthurbrunocesar2005@hotmail.com`
- ✅ Você receberá notificações quando alguém enviar mensagem
- ✅ Formulário funciona completamente

## 📱 Teste:
1. Abra o portfólio no navegador
2. Vá na seção "Contato"
3. Preencha o formulário
4. Clique em "Enviar Mensagem"
5. Verifique se recebeu o email!

## 🔒 Limite gratuito do EmailJS:
- **200 emails/mês** gratuitamente
- Perfeito para portfólio pessoal
- Sem necessidade de servidor próprio

---
*Configuração criada para o portfólio do Arthur Bruno* 🚀
