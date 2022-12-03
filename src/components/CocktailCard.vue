<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="content"></div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--bgcolor-primary);
  width: 100%;
  //cursor: pointer;
  border-radius: 10px;
  position: relative;
  z-index: 3;

  &:hover::before {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    border-radius: inherit;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 500ms;
    top: 0px;
    left: 0px;
  }

  &::before {
    background: radial-gradient(
      var(--shadow-width, 300px) circle at var(--mouse-x) var(--mouse-y),
      rgb(255 255 255 / 0.05),
      transparent 40%
    );
    z-index: 3;
  }

  &::after {
    background: radial-gradient(
      var(--shadow-width, 300px) circle at var(--mouse-x) var(--mouse-y),
      var(--border-color),
      transparent 40%
    );
    z-index: 1;
  }

  > .content {
    height: 100%;
    --border-spacing: calc(100% - var(--border-width));
    --margin-content: calc((100% - var(--border-spacing)) / 2);
    height: var(--border-spacing);
    width: var(--border-spacing);
    margin: var(--margin-content);
    background-color: var(--card-color);
    border-radius: inherit;
    z-index: 2;
    position: relative;
    min-height: 15rem;
  }
}
</style>
