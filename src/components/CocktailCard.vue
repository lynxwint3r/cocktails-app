<script setup lang="ts">
import type { Cocktail } from '@/core/models/Cocktail'
import { computed, reactive, ref } from 'vue'

type CocktailCardProps = {
  cocktail: Cocktail
}
const props = defineProps<CocktailCardProps>()

const card = ref<HTMLDivElement>()
function handleMouseMove(event: MouseEvent) {
  const { clientX, clientY } = event

  const rect = card.value?.getBoundingClientRect(),
    x = clientX - rect?.left!,
    y = clientY - rect?.top!

  card.value?.style.setProperty('--mouse-x', `${x}px`)
  card.value?.style.setProperty('--mouse-y', `${y}px`)
}

const cocktail = reactive(props.cocktail)
const measuredIngredients = computed(() => {
  return cocktail.ingredients.map(
    (ingredient, index) => `${cocktail.measures[index] || ''} ${ingredient}`
  )
})
</script>

<template>
  <div class="card card--container" ref="card">
    <div class="cocktail__category">{{ cocktail.category }}</div>
    <div class="content content--cocktail" @mousemove="handleMouseMove($event)">
      <div
        role="img"
        aria-label="A image of the cocktail"
        class="cocktail__image"
        :style="{
          '--img-url': `url(${cocktail.imgUrl})`,
        }"
      ></div>
      <div class="cocktail__body">
        <h3 class="cocktail__name">{{ cocktail.name }}</h3>
        <p class="cocktail__instructions">
          {{ cocktail.instructions }}
        </p>
        <div class="cocktail__ingredients">
          <span v-for="(value, index) of measuredIngredients" :key="index">
            {{ value }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card--container {
  container-type: inline-size;
  container-name: card;
  margin: 0 auto;
}

.card {
  background-color: var(--bgcolor-primary);
  width: 100%;
  //cursor: pointer;
  border-radius: 10px;
  position: relative;
  z-index: 3;

  &:hover::before,
  &:hover::after {
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
    pointer-events: none;
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

.content--cocktail {
  overflow: hidden;
  display: grid;
}

.cocktail__image {
  background-image: linear-gradient(hsl(0 0% 10% / 0.4), hsl(0 0% 10% / 0.4)),
    var(--img-url);
  background-repeat: no-repeat;
  background-position: center 20%;
  background-size: cover;
  min-height: 20rem;
  min-width: 15rem;
}

.cocktail {
  &__body {
    margin: 0.5rem;
    display: grid;
    height: 100%;
  }

  &__name {
    font-weight: var(--font-weight-extra-bold);
  }

  &__category {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    background-color: var(--bgcolor-secondary);
    border: calc(var(--border-width) / 2) solid var(--border-color);
    padding: 0.4rem 0.8rem;
    border-radius: 0.4rem;

    translate: -0.5rem -30%;
  }

  &__instructions {
    font-weight: var(--font-weight-medium-plus);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-line-clamp: 8;
  }

  &__ingredients {
    display: flex;
    gap: 0.5rem;
    align-self: flex-end;

    margin-top: 1rem;
    overflow-x: auto;
    padding-bottom: 3rem;

    > span {
      border: 1px solid var(--border-color);
      padding: 0.4rem 0.8rem;
      font-weight: var(--font-weight-light-plus);
      border-radius: 0.3rem;
      white-space: nowrap;
    }
  }
}

@container card (450px < width) {
  .content--cocktail {
    display: grid;
    grid-template-columns: 2fr 3fr;
  }
}
/* .content {
  display: grid;
  grid-template-rows: 2fr 5fr;
} */
</style>
