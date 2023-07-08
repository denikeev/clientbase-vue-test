import { defineStore } from "pinia";
import { ref } from "vue";
import cars from './../../data/cars-1.json';

export const useCarsStore = defineStore('cars', () => {
  const carsData = ref(cars);

  return { carsData };
});
