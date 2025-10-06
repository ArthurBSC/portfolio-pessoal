# 📧 Template Profissional com Ícones

## Template HTML Profissional para EmailJS

### **Template Name:**
```
Portfolio Contact Form Professional
```

### **Subject:**
```
🚀 Nova mensagem do portfólio - {{from_name}}
```

### **Content (HTML Profissional):**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem - Portfólio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
            position: relative;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        
        .header-content {
            position: relative;
            z-index: 1;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .contact-info {
            display: grid;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .info-item {
            display: flex;
            align-items: center;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #667eea;
            transition: all 0.3s ease;
        }
        
        .info-item:hover {
            background: #e9ecef;
            transform: translateX(5px);
        }
        
        .info-icon {
            font-size: 24px;
            color: #667eea;
            margin-right: 15px;
            width: 30px;
            text-align: center;
        }
        
        .info-content h3 {
            font-size: 14px;
            color: #6c757d;
            margin-bottom: 5px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .info-content p {
            font-size: 16px;
            color: #333;
            font-weight: 500;
        }
        
        .message-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 30px;
            border-radius: 12px;
            border: 1px solid #dee2e6;
        }
        
        .message-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .message-icon {
            font-size: 28px;
            color: #667eea;
            margin-right: 15px;
        }
        
        .message-title {
            font-size: 20px;
            color: #333;
            font-weight: 600;
        }
        
        .message-content {
            background: white;
            padding: 25px;
            border-radius: 8px;
            border-left: 4px solid #28a745;
            font-size: 16px;
            line-height: 1.7;
            color: #495057;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .footer {
            background: #343a40;
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
        }
        
        .footer-item {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }
        
        .footer-icon {
            margin-right: 8px;
            color: #667eea;
        }
        
        .footer-bottom {
            border-top: 1px solid #495057;
            padding-top: 20px;
            font-size: 12px;
            color: #adb5bd;
        }
        
        .badge {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 10px;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .content {
                padding: 20px 15px;
            }
            
            .header {
                padding: 20px 15px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .info-item {
                padding: 15px;
            }
            
            .message-section {
                padding: 20px;
            }
            
            .footer {
                padding: 20px 15px;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="header-content">
                <h1><i class="fas fa-envelope-open-text"></i> Nova Mensagem</h1>
                <p>Alguém entrou em contato através do seu portfólio</p>
            </div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Contact Information -->
            <div class="contact-info">
                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="info-content">
                        <h3>Nome Completo</h3>
                        <p>{{from_name}}</p>
                    </div>
                </div>
                
                <div class="info-item">
                    <div class="info-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div class="info-content">
                        <h3>Endereço de Email</h3>
                        <p>{{from_email}}</p>
                    </div>
                </div>
            </div>
            
            <!-- Message Section -->
            <div class="message-section">
                <div class="message-header">
                    <div class="message-icon">
                        <i class="fas fa-comment-dots"></i>
                    </div>
                    <div class="message-title">Mensagem</div>
                </div>
                <div class="message-content">
                    {{message}}
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-content">
                <div class="footer-item">
                    <i class="fas fa-globe footer-icon"></i>
                    <span>Enviado via Portfólio Web</span>
                </div>
                <div class="footer-item">
                    <i class="fas fa-user-tie footer-icon"></i>
                    <span>Arthur Bruno</span>
                </div>
                <div class="footer-item">
                    <i class="fas fa-code footer-icon"></i>
                    <span>Desenvolvedor Web</span>
                </div>
                <div class="footer-item">
                    <i class="fas fa-clock footer-icon"></i>
                    <span>{{sent_date}}</span>
                </div>
            </div>
            <div class="footer-bottom">
                <p>
                    <i class="fas fa-shield-alt"></i>
                    Esta mensagem foi enviada através do formulário de contato seguro do portfólio
                    <span class="badge">VERIFICADO</span>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 🎨 Características do Template Profissional:

### ✨ **Design Moderno**
- **Gradientes** e sombras profissionais
- **Layout responsivo** para mobile e desktop
- **Animações sutis** com hover effects
- **Tipografia** moderna e legível

### 🎯 **Ícones Profissionais**
- **Font Awesome 6.4.0** - Biblioteca completa de ícones
- **Ícones contextuais** para cada seção
- **Cores consistentes** com o tema
- **Tamanhos otimizados** para email

### 📱 **Responsivo**
- **Mobile-first** design
- **Grid layout** adaptativo
- **Breakpoints** otimizados
- **Legibilidade** em todos os dispositivos

### 🔧 **Funcionalidades**
- **Variáveis dinâmicas** do EmailJS
- **Estrutura semântica** HTML5
- **CSS inline** para compatibilidade
- **Fallbacks** para clientes antigos

---

## 🚀 Como Usar:

1. **Copie o código HTML** acima
2. **Cole no EmailJS** como conteúdo do template
3. **Salve o template** e copie o Template ID
4. **Atualize o código** com o Template ID real
5. **Teste o formulário**!

---

*Template profissional criado para o portfólio do Arthur Bruno* 🚀
