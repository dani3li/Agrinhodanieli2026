# 🎨 Design System - EcoFeira Local

## Introdução

Este é um **Design System Profissional e Moderno** para o projeto EcoFeira Local. Ele garante **consistência visual**, **profissionalismo** e **escalabilidade** em toda a plataforma.

---

## 📦 Componentes do Design System

### 1. **Paleta de Cores**

#### **Cores Primárias**

| Nome | Código | Uso | Aparência |
|------|--------|-----|-----------|
| **Verde Primário** | `#2D9B6F` | Botões CTA, destaques principais, links ativos | ![#2D9B6F](https://via.placeholder.com/50/2D9B6F/2D9B6F) |
| **Verde Escuro** | `#1F6F50` | Footer, hover effects, seções ativas, headers | ![#1F6F50](https://via.placeholder.com/50/1F6F50/1F6F50) |
| **Verde Claro** | `#50C89C` | Backgrounds suaves, efeitos hover, acentos | ![#50C89C](https://via.placeholder.com/50/50C89C/50C89C) |

#### **Cores Secundárias**

| Nome | Código | Uso | Aparência |
|------|--------|-----|-----------|
| **Terracota** | `#C9704D` | Acentos, badges, destaques secundários | ![#C9704D](https://via.placeholder.com/50/C9704D/C9704D) |
| **Terracota Escuro** | `#9D5635` | Hover de badges, textos em destaque | ![#9D5635](https://via.placeholder.com/50/9D5635/9D5635) |

#### **Cores Neutras**

| Nome | Código | Uso | Aparência |
|------|--------|-----|-----------|
| **Branco Puro** | `#FFFFFF` | Fundo principal, cartões | ![#FFFFFF](https://via.placeholder.com/50/FFFFFF/FFFFFF?text=white) |
| **Bege Claro** | `#F9F7F4` | Fundos secundários, seções alternadas | ![#F9F7F4](https://via.placeholder.com/50/F9F7F4/F9F7F4) |
| **Bege Médio** | `#E8E4DE` | Bordas, divisórias, separadores | ![#E8E4DE](https://via.placeholder.com/50/E8E4DE/E8E4DE) |
| **Cinza Escuro** | `#2C3E50` | Textos principais, headings | ![#2C3E50](https://via.placeholder.com/50/2C3E50/2C3E50) |
| **Cinza** | `#6B7280` | Textos secundários, subtítulos | ![#6B7280](https://via.placeholder.com/50/6B7280/6B7280) |

#### **Cores Semânticas**

| Nome | Código | Uso |
|------|--------|-----|
| **Sucesso** | `#10B981` | Confirmações, checkmarks |
| **Erro** | `#EF4444` | Avisos, erros, validações |
| **Aviso** | `#F59E0B` | Alertas, notificações importantes |

---

## 🔤 Tipografia

### **Fontes do Google Fonts**

#### **1. Títulos - Poppins**
- **Font Family:** `'Poppins', sans-serif`
- **Pesos:** 400, 500, 600, 700
- **Características:** Moderna, clean, elegante, amigável
- **Uso:** Todos os headings (h1-h6), títulos de seções, CTAs

```css
font-family: 'Poppins', sans-serif;
font-weight: 600; /* ou 700 para mais peso */
```

**Exemplos Visuais:**
- **H1 (48px, Bold):** O título mais impactante
- **H2 (32px, Bold):** Títulos de seções
- **H3 (24px, Bold):** Subtítulos
- **H4-H6:** Variações menores

#### **2. Corpo do Texto - Inter**
- **Font Family:** `'Inter', sans-serif`
- **Pesos:** 400, 500, 600, 700
- **Características:** Legível, clean, profissional, ótima para web
- **Uso:** Textos do corpo, parágrafos, descrições, labels

```css
font-family: 'Inter', sans-serif;
font-weight: 400; /* regular */
line-height: 1.5; /* melhor legibilidade */
```

---

## 📏 Escala Tipográfica

```
--font-size-xs:    0.75rem  (12px)   → Labels pequenos
--font-size-sm:    0.875rem (14px)   → Subtítulos, captions
--font-size-base:  1rem     (16px)   → Texto normal
--font-size-lg:    1.125rem (18px)   → Destaques
--font-size-xl:    1.5rem   (24px)   → Subtítulos grandes
--font-size-2xl:   2rem     (32px)   → Títulos de seções
--font-size-3xl:   2.5rem   (40px)   → Hero titles
--font-size-4xl:   3rem     (48px)   → Mega titles
```

### **Pesos de Fonte**

```
--font-weight-regular:   400  → Textos normais
--font-weight-medium:    500  → Ênfase leve
--font-weight-semibold:  600  → Botões, labels
--font-weight-bold:      700  → Headings, destaques
```

### **Line Heights**

```
--line-height-tight:    1.2   → Títulos
--line-height-normal:   1.5   → Textos corpo
--line-height-relaxed:  1.75  → Textos longos
```

---

## 📐 Espaçamento

O espaçamento segue uma escala harmoniosa baseada em **8px**:

```
--spacing-xs:    0.5rem  (8px)
--spacing-sm:    0.75rem (12px)
--spacing-base:  1rem    (16px)
--spacing-md:    1.5rem  (24px)
--spacing-lg:    2rem    (32px)
--spacing-xl:    3rem    (48px)
--spacing-2xl:   4rem    (64px)
--spacing-3xl:   6rem    (96px)
```

**Exemplos de Uso:**
- `padding: var(--spacing-base);` → 16px em todos os lados
- `margin-bottom: var(--spacing-lg);` → 32px abaixo
- `gap: var(--spacing-md);` → 24px entre elementos

---

## 🎭 Componentes

### **Border Radius**

```
--border-radius-sm:     8px     → Inputs, badges
--border-radius-base:   12px    → Cards, buttons padrão
--border-radius-lg:     16px    → Modais, painéis grandes
--border-radius-full:   9999px  → Chips, avatares
```

### **Sombras (Drop Shadows)**

```
--shadow-sm:    0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-base:  0 4px 12px 0 rgba(0, 0, 0, 0.08);
--shadow-md:    0 8px 20px 0 rgba(45, 155, 111, 0.15);     ← Com cor primária
--shadow-lg:    0 12px 30px 0 rgba(45, 155, 111, 0.2);     ← Com cor primária
--shadow-xl:    0 20px 40px 0 rgba(0, 0, 0, 0.12);
```

**Uso:**
```css
.card {
    box-shadow: var(--shadow-base);  /* Sutil */
}

.card:hover {
    box-shadow: var(--shadow-md);    /* Mais prominente */
}
```

### **Transições**

```
--transition-fast:   all 0.15s ease  → Hovers rápidos
--transition-base:   all 0.3s ease   → Animações padrão
--transition-slow:   all 0.5s ease   → Animações suaves
```

---

## 🎯 Z-Index Scale

```
--z-dropdown:        10   → Menus suspensos
--z-sticky:          20   → Headers sticky
--z-fixed:           30   → Elementos fixed
--z-modal-backdrop:  40   → Fundo do modal
--z-modal:           50   → Modal principal
```

---

## 💻 Como Usar as Variáveis CSS

### **No seu CSS:**

```css
/* Exemplo 1: Botão com cores e tipografia */
.button {
    background-color: var(--color-primary);
    color: var(--color-neutral-white);
    font-family: var(--font-body);
    font-weight: var(--font-weight-semibold);
    padding: var(--spacing-base) var(--spacing-lg);
    border-radius: var(--border-radius-base);
    box-shadow: var(--shadow-sm);
    transition: var(--transition-base);
}

.button:hover {
    background-color: var(--color-primary-dark);
    box-shadow: var(--shadow-md);
}

/* Exemplo 2: Cartão */
.card {
    background: var(--color-neutral-white);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-base);
    border: 1px solid var(--color-neutral-medium);
}

/* Exemplo 3: Título */
h2 {
    font-family: var(--font-title);
    font-size: var(--font-size-2xl);
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-base);
}

/* Exemplo 4: Seção com espaçamento */
.section {
    padding: var(--spacing-xl) var(--spacing-lg);
    background: var(--color-neutral-light);
}
```

---

## 🎨 Paleta Visual Completa

```
┌─────────────────────────────────────┐
│   CORES PRIMÁRIAS (Sustentabilidade) │
├─────────────────────────────────────┤
│ #2D9B6F  Verde Primário             │
│ #1F6F50  Verde Escuro (Footer)      │
│ #50C89C  Verde Claro (Hover)        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   CORES SECUNDÁRIAS (Agro, Terra)    │
├─────────────────────────────────────┤
│ #C9704D  Terracota                  │
│ #9D5635  Terracota Escuro           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   CORES NEUTRAS (Profissionalismo)   │
├─────────────────────────────────────┤
│ #FFFFFF  Branco Puro                │
│ #F9F7F4  Bege Muito Claro           │
│ #E8E4DE  Bege Médio                 │
│ #2C3E50  Cinza Escuro (Textos)      │
│ #6B7280  Cinza (Subtítulos)         │
└─────────────────────────────────────┘
```

---

## 📱 Responsividade

O Design System é **mobile-first** e adaptável:

### **Breakpoints:**
- **Mobile:** até 480px
- **Tablet:** 481px a 768px
- **Desktop:** 769px+

### **Adaptação Automática:**

```css
@media (max-width: 768px) {
    /* Espaçamentos menores em tablets */
    :root {
        --spacing-lg: 1.5rem;
        --spacing-xl: 2rem;
    }
}

@media (max-width: 480px) {
    /* Tamanhos de fonte menores em mobile */
    :root {
        --font-size-4xl: 2.5rem;
        --font-size-3xl: 2rem;
    }
}
```

---

## ✨ Boas Práticas

### **1. Sempre Use Variáveis**
```css
/* ✅ Correto */
color: var(--color-primary);

/* ❌ Evitar */
color: #2D9B6F;
```

### **2. Combine Variáveis**
```css
/* ✅ Correto */
.button {
    background: var(--color-primary);
    color: var(--color-neutral-white);
    padding: var(--spacing-base) var(--spacing-lg);
    border-radius: var(--border-radius-base);
    transition: var(--transition-base);
}
```

### **3. Respeite a Hierarquia de Cores**
- **Primary:** Ações principais, CTAs
- **Secondary:** Acentos, badges
- **Neutral:** Textos, backgrounds
- **Semantic:** Feedback (sucesso, erro, aviso)

### **4. Tipografia Clara**
- Títulos: Use `var(--font-title)` (Poppins) + Bold
- Corpo: Use `var(--font-body)` (Inter) + Regular
- Sempre define `line-height` apropriado

### **5. Espaçamento Consistente**
Toda margem/padding deve usar as variáveis de espaçamento.

---

## 🚀 Próximos Passos

Se precisar adicionar novos componentes:

1. **Use as variáveis existentes** quando possível
2. **Se precisar de novas cores**, adicione ao `:root`
3. **Mantenha a escala tipográfica** estabelecida
4. **Teste em mobile** para responsividade
5. **Documente** qualquer adição ao Design System

---

## 📖 Referências Rápidas

### **Import do Google Fonts**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
```

### **Variáveis do :root**
Todas as variáveis estão definidas no arquivo `style.css` dentro do seletor `:root`

### **Exemplo Completo**

```html
<!-- HTML -->
<h2>Bem-vindo</h2>
<button class="cta-button">Clique aqui</button>
```

```css
/* CSS */
h2 {
    font-family: var(--font-title);
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-base);
}

.cta-button {
    background: var(--color-primary);
    color: var(--color-neutral-white);
    padding: var(--spacing-base) var(--spacing-lg);
    border-radius: var(--border-radius-base);
    font-weight: var(--font-weight-semibold);
    transition: var(--transition-base);
}

.cta-button:hover {
    background: var(--color-primary-dark);
    box-shadow: var(--shadow-md);
}
```

---

## ✅ Conclusão

Este Design System oferece uma **fundação sólida, moderna e profissional** para o projeto EcoFeira Local. Com cores harmoniosas, tipografia clara e componentes bem definidos, você conseguirá manter **consistência visual** e **escalabilidade** em todo o desenvolvimento.

**Desenvolvido com** ❤️ **e sustentabilidade** 🌱
