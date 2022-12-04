<template>
  <header class="header">
    <h1>Hey ! 👋 You wanna drink something? 🍸</h1>
    <h2>We can purpose you some sweets to quench your thirst 👇</h2>
  </header>
  <main class="layout">
    <slot />
  </main>
  <footer class="footer">
    <p>
      We can imagine some new content right below 👇 like a search bar to query
      a specific cocktail based on its name or its category or alcohols. We can
      also imagine the possiblity to clic on one of the cards to open a detail
      in another page or in a modal.
    </p>
  </footer>
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
  max-width: 160rem;
  margin: 0 auto;
  padding: 1rem;
}

.footer {
  max-width: 50vw;
  margin: 5rem auto 0;
  text-align: center;
}
</style>
