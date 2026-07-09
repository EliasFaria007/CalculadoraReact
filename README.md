# Calculadora React

Projeto simples de calculadora feito com React e Vite.

## Funcionalidades

- Operações básicas: soma, subtração, multiplicação e divisão
- Entrada de números e operadores pelo teclado visual
- Botões para limpar (`C`), apagar último dígito (`Delete`) e calcular (`=`)
- Tratamento de erros simples para cálculos inválidos

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra a aplicação no navegador usando a URL exibida pelo Vite.

## Build de produção

```bash
npm run build
```

## Scripts disponíveis

- `npm run dev` — inicia o app em modo de desenvolvimento
- `npm run build` — cria a versão de produção
- `npm run preview` — visualiza o build de produção localmente
- `npm run lint` — verifica o código com ESLint

## Estrutura do projeto

- `src/App.jsx` — lógica principal da calculadora
- `src/components/Button/index.jsx` — componente de botão reutilizável
- `src/App.css` — estilos da calculadora
