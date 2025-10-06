# 🎨 Template Ultra Profissional - Material Design

## Template Alternativo com Material Design Icons

### **Template Name:**
```
Portfolio Contact Form - Material Design
```

### **Subject:**
```
💼 Nova mensagem profissional - {{from_name}}
```

### **Content (Material Design):**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensagem Profissional - Portfólio</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            color: #212121;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }
        
        .email-wrapper {
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .email-container {
            max-width: 650px;
            width: 100%;
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            position: relative;
        }
        
        .email-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .header-content {
            position: relative;
            z-index: 2;
        }
        
        .header-icon {
            font-size: 48px;
            margin-bottom: 15px;
            display: block;
        }
        
        .header h1 {
            font-size: 32px;
            font-weight: 300;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .content {
            padding: 50px 40px;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }
        
        .contact-card {
            background: #fafafa;
            border-radius: 12px;
            padding: 25px;
            border: 1px solid #e0e0e0;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .contact-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #667eea, #764ba2);
        }
        
        .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            background: white;
        }
        
        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .card-icon {
            font-size: 28px;
            color: #667eea;
            margin-right: 15px;
            background: rgba(102, 126, 234, 0.1);
            padding: 12px;
            border-radius: 50%;
            width: 52px;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .card-title {
            font-size: 14px;
            color: #757575;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .card-content {
            font-size: 18px;
            color: #212121;
            font-weight: 400;
            word-break: break-word;
        }
        
        .message-section {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 16px;
            padding: 35px;
            border: 1px solid #dee2e6;
            position: relative;
        }
        
        .message-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #28a745, #20c997);
            border-radius: 16px 16px 0 0;
        }
        
        .message-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
        }
        
        .message-icon {
            font-size: 36px;
            color: #28a745;
            margin-right: 20px;
            background: rgba(40, 167, 69, 0.1);
            padding: 15px;
            border-radius: 50%;
            width: 66px;
            height: 66px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .message-title {
            font-size: 24px;
            color: #212121;
            font-weight: 400;
        }
        
        .message-content {
            background: white;
            padding: 30px;
            border-radius: 12px;
            border-left: 4px solid #28a745;
            font-size: 16px;
            line-height: 1.8;
            color: #424242;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            position: relative;
        }
        
        .message-content::before {
            content: '"';
            position: absolute;
            top: -10px;
            left: 20px;
            font-size: 60px;
            color: #28a745;
            opacity: 0.3;
            font-family: serif;
        }
        
        .footer {
            background: #263238;
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }
        
        .footer-item {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #b0bec5;
        }
        
        .footer-icon {
            margin-right: 10px;
            color: #667eea;
            font-size: 20px;
        }
        
        .footer-bottom {
            border-top: 1px solid #37474f;
            padding-top: 25px;
            font-size: 13px;
            color: #90a4ae;
        }
        
        .status-badge {
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            margin-left: 10px;
        }
        
        .status-badge i {
            margin-right: 5px;
            font-size: 14px;
        }
        
        @media (max-width: 768px) {
            .email-wrapper {
                padding: 10px;
            }
            
            .email-container {
                border-radius: 12px;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .header h1 {
                font-size: 28px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .message-section {
                padding: 25px 20px;
            }
            
            .footer {
                padding: 30px 20px;
            }
            
            .footer-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <div class="header-content">
                    <span class="material-icons header-icon">mark_email_unread</span>
                    <h1>Nova Mensagem Profissional</h1>
                    <p class="header-subtitle">Contato recebido através do portfólio</p>
                </div>
            </div>
            
            <!-- Content -->
            <div class="content">
                <!-- Contact Information -->
                <div class="contact-grid">
                    <div class="contact-card">
                        <div class="card-header">
                            <div class="card-icon">
                                <span class="material-icons">person</span>
                            </div>
                            <div class="card-title">Nome Completo</div>
                        </div>
                        <div class="card-content">{{from_name}}</div>
                    </div>
                    
                    <div class="contact-card">
                        <div class="card-header">
                            <div class="card-icon">
                                <span class="material-icons">email</span>
                            </div>
                            <div class="card-title">Endereço de Email</div>
                        </div>
                        <div class="card-content">{{from_email}}</div>
                    </div>
                </div>
                
                <!-- Message Section -->
                <div class="message-section">
                    <div class="message-header">
                        <div class="message-icon">
                            <span class="material-icons">chat_bubble_outline</span>
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
                <div class="footer-grid">
                    <div class="footer-item">
                        <span class="material-icons footer-icon">web</span>
                        <span>Enviado via Portfólio Web</span>
                    </div>
                    <div class="footer-item">
                        <span class="material-icons footer-icon">person</span>
                        <span>Arthur Bruno</span>
                    </div>
                    <div class="footer-item">
                        <span class="material-icons footer-icon">code</span>
                        <span>Desenvolvedor Web</span>
                    </div>
                    <div class="footer-item">
                        <span class="material-icons footer-icon">schedule</span>
                        <span>{{sent_date}}</span>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>
                        <span class="material-icons" style="font-size: 16px; vertical-align: middle; margin-right: 5px;">verified_user</span>
                        Mensagem enviada através do formulário de contato seguro
                        <span class="status-badge">
                            <i class="material-icons" style="font-size: 14px;">check_circle</i>
                            VERIFICADO
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 🎨 Características do Template Material Design:

### ✨ **Material Design 3.0**
- **Google Material Icons** - Biblioteca oficial
- **Roboto Font** - Tipografia oficial do Material Design
- **Elevation** e sombras realistas
- **Motion** e animações suaves

### 🎯 **Design Avançado**
- **Gradientes** e efeitos visuais
- **Cards** com hover effects
- **Grid layout** responsivo
- **Micro-interações** sutis

### 📱 **Responsividade Total**
- **Mobile-first** approach
- **Breakpoints** otimizados
- **Touch-friendly** interfaces
- **Legibilidade** perfeita

### 🔧 **Funcionalidades Premium**
- **Animações CSS** avançadas
- **Pseudo-elementos** criativos
- **Flexbox** e Grid modernos
- **Compatibilidade** máxima

---

## 🚀 Escolha seu Template:

1. **Template Profissional** - Font Awesome + Design moderno
2. **Template Material Design** - Google Icons + Material Design 3.0

Ambos são **ultra profissionais** e prontos para uso! 🎯
