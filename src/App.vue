<script setup>
  import { useCarsStore } from '@/stores/cars';
  import Car from './components/Car.vue';

  const { carsData } = useCarsStore();
</script>

<template>
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
    <Car 
      v-for="car in carsData"
      :key="car.id"
      v-bind:car="car"
      v-bind:key="car.id"
    ></Car>
  </div>
</template>
