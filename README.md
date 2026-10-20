# 🏨 Template Bitz Hotel - Next.js (App Router)

Template front-end profissional, modular, altamente escalável e 100% otimizado para SEO, desenvolvido especificamente para hotéis, pousadas e resorts clientes do ecossistema **Bitz Softwares**.

Baseado na identidade e recursos do site de referência [bitzhotel.com.br](https://bitzhotel.com.br/), este template substitui sites legados em WordPress/Elementor por uma aplicação moderna em **Next.js (App Router)** com **TypeScript** e **Tailwind CSS**, pronta para deploy instantâneo na **Vercel**.

---

## 🚀 Destaques e Diferenciais

- ⚡ **Desempenho Extremo**: Geração 100% estática (SSG) no Edge da Vercel. TTFB quase instantâneo e pontuação máxima em Core Web Vitals.
- 🎯 **Configuração Centralizada em 1 Arquivo (`siteConfig.ts`)**: Troque o nome do hotel, slogan, fotos, quartos, comodidades, contatos, token de chat e link do motor Bitz em **um único lugar**.
- 🏨 **Integração Nativa com o Motor Bitz**: Barra flutuante de disponibilidade que repassa check-in, check-out e quantidade de hóspedes direto para o motor de reservas oficial (`reservas.bitzsoftwares.com.br`).
- 💬 **Suporte ao Widget Oficial Bitz Chat**: Integração pronta do script `bitz-widget-chat.s3.us-east-2.amazonaws.com/chat.min.js` com inicialização automática (`window.initChat`).
- 🔍 **SEO Técnico Completo**:
  - Dados estruturados Schema.org (`Hotel`, `LodgingBusiness`, `FAQPage`, `AggregateRating`, `GeoCoordinates`).
  - Geração automática de `robots.txt` e `sitemap.xml`.
  - Tags Open Graph e Twitter Cards completas.
- 📱 **100% Responsivo & Mobile First**: Design de luxo com tipografia refinada (Playfair Display + Montserrat), menu retrátil e botão flutuante com WhatsApp.

---

## 📂 Arquitetura Modular

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Estilos luxuosos, animações sutis e variáveis
│   ├── layout.tsx           # Fontes Google, Metadados Open Graph e JSON-LD
│   ├── page.tsx             # Composição limpa das seções da página
│   ├── robots.ts            # Gerador automático do robots.txt
│   └── sitemap.ts           # Gerador automático do sitemap.xml
│
├── config/
│   └── siteConfig.ts        # 🌟 O CORAÇÃO DO TEMPLATE: Altere tudo aqui!
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Barra de navegação com glass effect e menu mobile
│   │   ├── Footer.tsx           # Rodapé institucional completo com créditos Bitz
│   │   ├── WhatsAppButton.tsx   # Botão flutuante com animação de pulso
│   │   └── BitzChatWidget.tsx   # Script assíncrono do chat oficial Bitz
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Carrossel com imagens em alta resolução e CTAs
│   │   ├── BookingBar.tsx       # Barra de motor de reservas com datas e hóspedes
│   │   ├── AboutSection.tsx     # Sobre nós, selos de qualidade e estatísticas
│   │   ├── RoomsSection.tsx     # Vitrine de acomodações com cards interativos
│   │   ├── AmenitiesSection.tsx # Grade de comodidades e valores de hospitalidade
│   │   ├── LeisureSection.tsx   # Lazer, eventos e instalações de destaque
│   │   ├── GallerySection.tsx   # Galeria com abas de categoria e lightbox
│   │   ├── TestimonialsSection.tsx # Avaliações reais (Google, TripAdvisor, Booking)
│   │   ├── LocationSection.tsx  # Endereço, distâncias turísticas e mapa Google
│   │   ├── FaqSection.tsx       # Perguntas frequentes (acordeão interativo)
│   │   └── CtaBanner.tsx        # Banner final de alta conversão
│   │
│   ├── ui/
│   │   ├── SectionHeading.tsx   # Títulos padronizados com taglines douradas
│   │   └── RoomDetailModal.tsx  # Modal completo com fotos e especificações do quarto
│   │
│   └── seo/
│       └── JsonLd.tsx           # Injeção de Schema.org para o Google
│
└── lib/
    └── utils.ts                 # Utilitários de classes e formatação monetária (BRL)
```

---

## 🛠️ Como Personalizar para um Novo Cliente Bitz

Para criar um novo site de cliente usando este template, basta abrir o arquivo:
👉 **`src/config/siteConfig.ts`**

Nele você altera:

1. **Dados do Hotel**:
   ```typescript
   hotel: {
     name: "Nome do Hotel ou Pousada",
     tagline: "Sua frase de destaque",
     description: "Descrição completa institucional...",
     checkInTime: "14:00",
     checkOutTime: "12:00",
   }
   ```

2. **Links do Motor de Reservas & Chat Bitz**:
   ```typescript
   bitzEngine: {
     bookingUrl: "https://reservas.bitzsoftwares.com.br/{TOKEN_DO_HOTEL}/pt-BR",
     chatWidget: {
       enabled: true,
       token: "{TOKEN_DO_HOTEL}",
       hotelName: "{NOME_COMERCIAL}",
       primaryColor: "#0A60D9",
       position: "bottom-left"
     }
   }
   ```

3. **Contatos & Localização**:
   - Telefone, WhatsApp, E-mail, endereço completo e link embed do Google Maps.

4. **Lista de Quartos (`rooms`)**:
   - Nome, diária a partir de, fotos, comodidades inclusas, capacidade e metragem.

---

## 💻 Executando Localmente

1. Clone ou acesse o repositório:
   ```bash
   cd template-site-clientes-bitz
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse em seu navegador: `http://localhost:3000`

---

## ☁️ Como Fazer o Deploy na Vercel

### Opção 1: Via GitHub / GitLab / Bitbucket (Recomendado)
1. Suba este projeto para um repositório no seu GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**.
3. Importe o repositório.
4. A Vercel detectará automaticamente o framework como **Next.js**.
5. Clique em **"Deploy"**.
6. Em menos de 1 minuto o site estará publicado com HTTPS automático e CDN global!

### Opção 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📄 Licença
Desenvolvido para clientes e parceiros do ecossistema **Bitz Softwares**.
