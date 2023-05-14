# 快速架編譯

- 快速架假 Server，適合測試 code

## 流程

- `npm run dev`
    - 執行 `scripts/dev.ts`
    - 將 `public/index.html` bundle 至 `dist/index.html`
    - 將 `src/index.ts` bundle 至 `dist/index.js`
    - 開啟 `Browser-Sync` 瀏覽器
    - 監聽 `public/` 與 `src/` 的檔案變動，當有變動時就啟動 `Hot Reload`