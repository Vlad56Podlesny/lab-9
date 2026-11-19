# Лабораторна №9 — що пояснювати на захисті

**1. Підготовка.** Створено новий Vite-проєкт `landing-keepsake-vite`. У `package.json` усі інструменти збірки в `devDependencies`, бо у браузері вони не виконуються. Показати `npm run dev` та `.gitignore`.

**2. Pug.** `src/pages/index.pug` успадковує `src/layouts/main.pug` через `extends`, змінює блоки, а секції додаються через `include`. Дані в `src/data/content.pug`, повторювані елементи створює `each`. У `src/mixins/ui.pug` є `btn`, `icon`, `picture`, `work-card`, `panel`. Показати один міксин і виклик.

**3. SCSS.** Стилі поділені на `abstracts`, `base`, `layout`, `components`. `@use` підключає модулі, `@forward` експортує їх. В `abstracts/_mixins.scss` є `mq` з `min-width`, функція `rem()` та міксини `focus-ring`/`flex-center`. Кольори генеруються через `@each` у CSS-змінні.

**4. PostCSS.** `postcss.config.js` вмикає Autoprefixer; `.browserslistrc` визначає браузери. Показати `npx browserslist`, `npx autoprefixer --info` та мініфікований CSS у `dist/assets` після збірки.

**5. Зображення.** `scripts/images.mjs` використовує Sharp. `+picture` створює AVIF/WebP/JPEG, `srcset`, `sizes`, `width`, `height` і `loading=lazy`. Показати DevTools → Network → Img і перевірити завантажений формат.

**6. Якість коду.** `npm run format` запускає Prettier; `npm run lint` запускає Stylelint і перевірку форматування. `.husky/pre-commit` викликає lint-staged, щоб перевіряти змінені файли перед комітом.

**7. Публікація.** `.github/workflows/deploy.yml` збирає `dist` і публікує GitHub Pages; `base` у `vite.config.js` враховує назву репозиторію. Публікацію потрібно виконати зі свого GitHub.

**Увага:** перед захистом обов'язково запусти `npm install`, `npm run format`, `npm run lint`, `npm run build`. Без цих команд результат збірки не перевірено.
