## Production

[路徑請點 => next-js-mvp](https://next-js-mvp-pink.vercel.app/)

## Feature

- 提供 index、about、user 及動態 user 頁面
- 透過 user 頁面了解動態資料的簡易使用 - `getStaticProps`、`getStaticPaths`

## 資料夾

### components

- 放置不用渲染、共用頁面

### modals

- typescript 共用

### pages

- 放置所有 page 的元件
- 在理想上，每個 page 都有自己的 components
- index.js 是 home page 的概念
- `_app.js` 是一個 root component

### public

- images

### styles

- 共用: global
- module: xxx.moudele.css

## How To Start

> npm run dev
