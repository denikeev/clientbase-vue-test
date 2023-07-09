import { defineStore } from "pinia";
import { ref } from "vue";

export const useCarsStore = defineStore('cars', () => {
  const carsData = ref([]);
  const isCarsLoaded = ref(false);
  const isCarsPartLoaded = ref(false);
  const carsFilesCount = 5;
  let loadedFilesCount = 0;

  function fetchCars() {
    if (loadedFilesCount < carsFilesCount) {
      isCarsPartLoaded.value = false;
      import(`../../data/cars-${loadedFilesCount + 1}.json`)
        .then((data) => {
          carsData.value.push(...data.default);
          isCarsLoaded.value = true;
          isCarsPartLoaded.value = true;
          loadedFilesCount += 1;
        })
        .catch(() => {
          isCarsLoaded.value = false;
          isCarsPartLoaded.value = false;
        });
    }
  }

  function fetchNewData() {
    import(`../../data/cars-2.json`)
      .then((data) => {
        carsData.value.push(...data.default);
      });
  }

  return { carsData, fetchCars, isCarsLoaded, fetchNewData, isCarsPartLoaded };
});
