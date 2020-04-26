<template>
  <div id="app">
    <h1 class="headline">Hello</h1>
    <div class="box">Hello!</div>
    <div>
      <div class="interactive_bright">interactive 1</div>
      <div class="interactive_dark">interactive 2</div>
    </div>
  </div>
</template>

<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100vw;
}

:root {
  --color-background-main: 242, 236, 228;
  --color-background-contrast: 2, 64, 64;
  --color-interactive-dark: 191, 117, 90;
  --color-interactive-bright: 242, 183, 5;
  --color-font-bright: var(--color-background-main);
  --color-font-dark: var(--color-background-contrast);
}

#app {
  background: rgb(var(--color-background-main));
}

.headline {
  color: rgb(var(--color-font-dark));
  margin: 0;
  padding: 0;
}

.interactive_dark {
  background: rgb(var(--color-interactive-dark));
  width: 100px;
  height: 100px;
}

.interactive_bright {
  background: rgb(var(--color-interactive-bright));
  width: 100px;
  height: 100px;
}

.box {
  background: rgb(var(--color-background-contrast));
  color: rgb(var(--color-font-bright));
  height: 300px;
  width: 300px;
  margin: auto;
}
</style>
