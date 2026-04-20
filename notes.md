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

