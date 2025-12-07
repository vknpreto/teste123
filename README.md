# Quiz Instituto Palabra 📖

Quiz interativo sobre conhecimento bíblico com funil de vendas integrado.

## 🚀 Deploy Rápido

### Vercel (Recomendado)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Clique no botão acima
2. Conecte seu GitHub
3. Deploy automático!

### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## 📦 Tecnologias

- **React 18** - UI Library
- **Vite** - Build tool ultra-rápido
- **Facebook Pixel** - Analytics e conversão

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📊 Features

- ✅ Quiz interativo com 10 perguntas
- ✅ Sistema de pontuação
- ✅ VSL integrado
- ✅ Página de vendas otimizada
- ✅ Facebook Pixel configurado
- ✅ Eventos de conversão (InitiateCheckout)
- ✅ Responsivo para mobile
- ✅ Performance otimizada

## 🎯 Estrutura

```
quiz-instituto-palabra/
├── public/              # Assets estáticos
│   ├── testimonial_*.png
│   └── outras imagens
├── src/
│   ├── steps/          # Componentes dos steps
│   │   ├── FinalSteps.jsx
│   │   ├── QuizSteps.jsx
│   │   └── *.css
│   ├── App.jsx         # App principal
│   └── main.jsx        # Entry point
└── vite.config.js      # Config otimizada
```

## 🔧 Configuração

### Facebook Pixel
Pixel ID já configurado: `1566861514540469`

Para alterar, edite `index.html`:
```javascript
fbq('init', 'SEU_PIXEL_ID');
```

### Links de Checkout
Configurados em `src/steps/FinalSteps.jsx` com código de desconto NAVIDAD.

## 📈 Performance

- **Code Splitting**: React separado em chunk próprio
- **Minificação**: esbuild (ultra-rápido)
- **CSS Otimizado**: Split automático
- **Gzip**: Todos os assets comprimidos

## 🌐 Deploy

Veja o guia completo em `DEPLOY_GUIDE.md`

## 📝 Licença

Privado - Todos os direitos reservados
