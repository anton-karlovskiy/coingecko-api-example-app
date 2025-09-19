# 📊 Cryptocurrency Exchanges Directory (Coingecko API)  

A simple **Next.js + TypeScript** web application that consumes the **[Coingecko public API](https://www.coingecko.com/en/api)** to display a directory of cryptocurrency exchanges.  
Users can browse high-level exchange information and view detailed pages for each exchange.  

## 🚀 Features  

- Fetches data from the **Coingecko API**  
- Displays the **top 10 cryptocurrency exchanges** with key details:  
  * Name  
  * Country  
  * Website URL  
  * Logo  
  * Trust rank  
- Dedicated **exchange detail page** with:  
  * Name, country, trust rank, logo  
  * Year of establishment  
  * Social media links  
  * Description  
  * Back-to-main-page navigation  

## 🛠️ Tech Stack  

- [Next.js](https://nextjs.org/) (via `create-next-app`)  
- [TypeScript](https://www.typescriptlang.org/)  
- [TailwindCSS](https://tailwindcss.com/) for styling  
- ESLint (`eslint-config-google`) for code linting  
- `husky` & `lint-staged` for pre-commit checks  

## ⚙️ Getting Started  

Install dependencies:  
```bash
yarn install
```

Run the project in development mode:
```bash
yarn dev
```

Build for production:
```bash
yarn build
yarn start
```

## 🎯 Purpose

This project demonstrates how to:

- Integrate with a public crypto API (Coingecko)

- Build a modern Next.js frontend with TypeScript and TailwindCSS

- Follow best practices for code quality (linting, pre-commit hooks)

- Deliver a clean, responsive UI for cryptocurrency-related apps

## 📄 License

MIT — free to use and modify.