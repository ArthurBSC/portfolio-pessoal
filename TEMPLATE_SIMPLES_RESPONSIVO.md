# 📧 Template Simples e Responsivo com Dark Mode

## Template HTML Simples para EmailJS

### **Template Name:**
```
Portfolio Contact Form - Simple Responsive
```

### **Subject:**
```
📧 Nova mensagem do portfólio - {{from_name}}
```

### **Content (HTML Simples e Responsivo):**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem - Portfólio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 24px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .header p {
            font-size: 14px;
            opacity: 0.9;
        }
        
        /* Content */
        .content {
            padding: 30px 20px;
        }
        
        .contact-info {
            margin-bottom: 25px;
        }
        
        .info-item {
            display: flex;
            align-items: center;
            padding: 15px;
            margin-bottom: 10px;
            background: #f8f9fa;
            border-radius: 6px;
            border-left: 3px solid #667eea;
        }
        
        .info-icon {
            font-size: 18px;
            margin-right: 12px;
            color: #667eea;
            width: 20px;
            text-align: center;
        }
        
        .info-content h3 {
            font-size: 12px;
            color: #666;
            margin-bottom: 4px;
            font-weight: 600;
            text-transform: uppercase;
        }
        
        .info-content p {
            font-size: 16px;
            color: #333;
            font-weight: 500;
        }
        
        /* Message Section */
        .message-section {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #e9ecef;
        }
        
        .message-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .message-icon {
            font-size: 20px;
            color: #28a745;
            margin-right: 10px;
        }
        
        .message-title {
            font-size: 18px;
            color: #333;
            font-weight: 600;
        }
        
        .message-content {
            background: white;
            padding: 20px;
            border-radius: 4px;
            border-left: 3px solid #28a745;
            font-size: 15px;
            line-height: 1.6;
            color: #555;
        }
        
        /* Footer */
        .footer {
            background: #343a40;
            color: white;
            padding: 25px 20px;
            text-align: center;
        }
        
        .footer-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }
        
        .footer-item {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            color: #adb5bd;
        }
        
        .footer-icon {
            margin-right: 6px;
            color: #667eea;
        }
        
        .footer-bottom {
            border-top: 1px solid #495057;
            padding-top: 15px;
            font-size: 12px;
            color: #6c757d;
        }
        
        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
            body {
                background-color: #1a1a1a;
                color: #e0e0e0;
            }
            
            .email-container {
                background: #2d2d2d;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            }
            
            .info-item {
                background: #3a3a3a;
                border-left-color: #8b5cf6;
            }
            
            .info-icon {
                color: #8b5cf6;
            }
            
            .info-content h3 {
                color: #b0b0b0;
            }
            
            .info-content p {
                color: #e0e0e0;
            }
            
            .message-section {
                background: #3a3a3a;
                border-color: #4a4a4a;
            }
            
            .message-title {
                color: #e0e0e0;
            }
            
            .message-content {
                background: #2d2d2d;
                color: #d0d0d0;
                border-left-color: #10b981;
            }
            
            .message-icon {
                color: #10b981;
            }
            
            .footer {
                background: #1a1a1a;
            }
            
            .footer-item {
                color: #8b8b8b;
            }
            
            .footer-icon {
                color: #8b5cf6;
            }
            
            .footer-bottom {
                border-top-color: #4a4a4a;
                color: #8b8b8b;
            }
        }
        
        /* Mobile Responsive */
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 6px;
            }
            
            .header {
                padding: 25px 15px;
            }
            
            .header h1 {
                font-size: 20px;
            }
            
            .content {
                padding: 20px 15px;
            }
            
            .info-item {
                padding: 12px;
            }
            
            .message-section {
                padding: 15px;
            }
            
            .message-content {
                padding: 15px;
            }
            
            .footer {
                padding: 20px 15px;
            }
            
            .footer-info {
                grid-template-columns: 1fr;
                gap: 10px;
            }
        }
        
        @media (max-width: 400px) {
            .header h1 {
                font-size: 18px;
            }
            
            .header p {
                font-size: 13px;
            }
            
            .info-content p {
                font-size: 14px;
            }
            
            .message-content {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>📧 Nova Mensagem</h1>
            <p>Contato recebido através do portfólio</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Contact Information -->
            <div class="contact-info">
                <div class="info-item">
                    <div class="info-icon">👤</div>
                    <div class="info-content">
                        <h3>Nome</h3>
                        <p>{{from_name}}</p>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-icon">📧</div>
                    <div class="info-content">
                        <h3>Email</h3>
                        <p>{{from_email}}</p>
                    </div>
                </div>
            </div>
            
            <!-- Message Section -->
            <div class="message-section">
                <div class="message-header">
                    <div class="message-icon">💬</div>
                    <div class="message-title">Mensagem</div>
                </div>
                <div class="message-content">
                    {{message}}
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-info">
                <div class="footer-item">
                    <span class="footer-icon">🌐</span>
                    <span>Portfólio Web</span>
                </div>
                <div class="footer-item">
                    <span class="footer-icon">👨‍💻</span>
                    <span>Arthur Bruno</span>
                </div>
                <div class="footer-item">
                    <span class="footer-icon">💻</span>
                    <span>Desenvolvedor</span>
                </div>
                <div class="footer-item">
                    <span class="footer-icon">⏰</span>
                    <span>{{sent_date}}</span>
                </div>
            </div>
            <div class="footer-bottom">
                <p>📱 Enviado através do formulário de contato seguro</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 🎨 Características do Template:

### ✨ **Design Simples e Limpo**
- **Ícones emoji** padrão - Sem dependências externas
- **Layout limpo** e profissional
- **Cores suaves** e agradáveis
- **Tipografia** moderna do sistema

### 🌙 **Dark Mode Automático**
- **Detecção automática** do tema do sistema
- **Cores adaptadas** para modo escuro
- **Contraste otimizado** para legibilidade
- **Transições suaves** entre temas

### 📱 **Totalmente Responsivo**
- **Mobile-first** design
- **Breakpoints** otimizados (600px, 400px)
- **Grid flexível** para footer
- **Texto adaptativo** para telas pequenas

### 🔧 **Funcionalidades**
- **Sem dependências** externas
- **Compatibilidade** máxima com clientes de email
- **CSS inline** para melhor suporte
- **Estrutura semântica** HTML5

---

## 🚀 Como Usar:

1. **Copie o código HTML** acima
2. **Cole no EmailJS** como conteúdo do template
3. **Salve o template** e copie o Template ID
4. **Atualize o código** com o Template ID real
5. **Teste o formulário**!

---

## 📱 Responsividade:

- **Desktop**: Layout completo com grid
- **Tablet** (≤600px): Layout adaptado
- **Mobile** (≤400px): Layout compacto
- **Dark Mode**: Automático baseado no sistema

---

*Template simples e responsivo criado para o portfólio do Arthur Bruno* 🚀
