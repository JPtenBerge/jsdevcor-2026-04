# Notes

## Intro

- stamt uit 1996
- begonnen bij Netscape
  - met Brendan Eich. inmiddels CEO van Brave
- 10 werkdagen "even wat interactiviteit toevoegen"
- Oracle heeft het copyright op de naam JavaScript
- heet formeel ECMAScript. Komt bijv. ook terug bij TypeScript-config met `es` in de target:
    ```json
    "target": "es2022"
    ```
- self Java  Date
- `() {} [] ;`
- flexibele dynamische taal

## Operator `&&`

Cool gebruik met Svelte:

```svelte
<input onkeydown={e => e.key === 'ArrowDown' && func()}>:
```

vs. Angular custom syntax:

```html
<input (keydown.arrowdown)="func()">
```

## JavaScript engines/runtimes

- V8 - Chromium / Node / Deno
- SpiderMonkey - Firefox
- JavaScriptCore - Safari / Bun
- Amazon  LLRT

## Backend JavaScript

- Node
  - Ryan Dahl
  - 2009
    ```sh
    node bla.js
    ```
- Deno
  - Ryan Dahl
  - 2020
  - TypeScript out of the box
  - security
  - v1 was niet compatible met npm packages
    - v2 wel!
  - geen node_modules folder 🎉
  ```sh
  deno run --allow-read c:\temp --allow-net bla.ts
  ```
  - imports ondersteunen npm en gedistribueerde packages:
    ```js
    import {} from 'npm:express';
    import {} from 'https://mijn.server/httpd@1.15.4';
    ```
  - gaat een stuk beter om met meerdere versies van packages
  ```text
  project
  - A
    - B@2.3.4
  - B@4.1.1
  ```

## Bundling

bundlers:
- Rollup / Rolldown
- Gulp - build system
- webpack <== meest krachtige. configuratie is 🤢. 
- Vite
  - zero config
  - heeft twee modi:
    - prod: kwalitatieve build met Rollup/Rolldown, typechecking, optimalisatie met bijv. tree-shaking
    - dev: zo snel mogelijk builden met esbuild/Rolldown. geen typechecking. HMR faciliteren om je webapp zo snel en soepel mogelijk te verversen.

Ecosysteem der JS

Frontend libraries (DOM API)

- React
- Angular
- Vue
- Svelte
- Solid
- Blazor (C#)
- Qwik (wordt nauwelijks gebruikt, maar interessante filosofie)

Meta frameworks (SSR + SSG)

- Next.js (React)
- Nuxt.js (Vue)
- @angular/ssr
- SvelteKit
- SolidStart
- QwikCity

Unittesten

- Vitest (modernste)
  - browser mode
- Jest (OG Meta)
  - ouddated  TypeScript  import/export Babel  mocken
  - mockt de browser weg met JSDOM
- Mocha/Chai/Sinon
- Karma/Jasmine - Angular
  - 3+ jaar deprecate
- Stryker.js (mutation testing)
  ```ts
  // echte productie
  if (value > 5) { ... }

  // mutanten
  if (value < 5) { ... }
  if (value > 5000) { ... }
  if (value === 5) { ... }
  ```

End-to-end testen

- Playwright (Microsoft)
  - auto-waiting
  - browsersupport
  - parallelisatie
  - geen maffe paywalls
- Selenium (oudstgediende)
- Cypress
  - $$$
  - cy.get('https://localhost:25433')
  - API niet tof. TypeScript matig ondersteund, Promises zijn geen native promises, await
- TestCafe
- WebdriverIO
- Nightwatch

Overig testen

- BrowserStack
- Storybook
  - `<app-datepicker />` met alle configuraties deployen
- Chromatic

Handige/utility libraries

- Lodash
- is-even / is-odd / is-number / is-even-ai
- datums: moment.js 👻 / dayjs (niet tree-shakeable) / luxon (niet TS-definities) / date-fns
  - native route: Temporal (met eventueel nog temporal-polyfill)
- async


Module bundlers

- Gulp Grunt requirejs browserify
- Vite
- webpack / Rspack

Transpilers / compilers

- TypeScript
- Babel
- CoffeeScript
