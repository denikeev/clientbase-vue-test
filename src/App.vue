<script setup>
  import { onMounted } from 'vue';
  import { useCarsStore } from '@/stores/cars';
  import Car from './components/Car.vue';
  import throttle from 'lodash/throttle.js';
  
  const { carsData, fetchCars, isCarsLoaded, isCarsPartLoaded } = useCarsStore();
  onMounted(async () => {
    await fetchCars();

    window.onscroll = throttle(function() {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
          fetchCars();
        }
    }, 3000);
  });

</script>

<template>
  <div>
    <div class="table">
      <div class="table__row table__row--head">
        <div class="table__cell table__cell--head">Название</div>
        <div class="table__cell table__cell--head">Расход топлива мл/г</div>
        <div class="table__cell table__cell--head">Цилиндры</div>
        <div class="table__cell table__cell--head">Рабочий объём</div>
        <div class="table__cell table__cell--head">Л.C</div>
        <div class="table__cell table__cell--head">Вес</div>
        <div class="table__cell table__cell--head">Ускорение м/c2</div>
        <div class="table__cell table__cell--head">Год выпуска</div>
        <div class="table__cell table__cell--head">Производство</div>
      </div>
      <template v-if="isCarsLoaded">
        <Car 
          v-for="car in carsData"
          :key="car.id"
          v-bind:car="car"
          v-bind:key="car.id"
        ></Car>
      </template>
      <img v-show="!isCarsLoaded || !isCarsPartLoaded" class="preloader" src="./preloader.gif" width="64" height="64" alt="Загрузка..." />
    </div>
  </div>
</template>

<style>
  .preloader {
    position: absolute;
    left: calc(50% - 25px);

    margin: 25px;
  }
</style>
