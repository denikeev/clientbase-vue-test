import { defineStore } from "pinia";
import { ref } from "vue";

export const useCarsStore = defineStore('cars', () => {
  const carsData = ref([]);
  const isCarsLoaded = ref(false);

  function fetchCars() {
    import('../../data/cars-1.json')
      .then((data) => {
        carsData.value.push(...data.default);
        isCarsLoaded.value = true;
      })
      .catch(() => {
        isCarsLoaded.value = false;
      });
  }

  return { carsData, fetchCars, isCarsLoaded };
});
