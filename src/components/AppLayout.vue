<template>
  <header class="header">
    <h1>Hey ! 👋 You wanna drink something? 🍸</h1>
    <h2>We can purpose you some sweets to quench your thirst 👇</h2>
  </header>
  <main class="layout">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;

  > h1 {
    margin-bottom: 1rem;
  }
}

.layout {
  max-width: 140rem;
  margin: 0 auto;
  padding: 1rem;
}
</style>
