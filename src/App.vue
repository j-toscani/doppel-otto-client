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
