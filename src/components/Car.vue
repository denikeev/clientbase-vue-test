<script>

export default {
  props: ['car'],
};

</script>

<template>
  <div class="table__row">
    <div class="table__cell">{{ car.Name }}</div>
    <div class="table__cell">{{ car.Miles_per_Gallon ?? 'null' }}</div>
    <div class="table__cell">{{ car.Cylinders }}</div>
    <div class="table__cell">{{ car.Displacement }}</div>
    <div class="table__cell">{{ car.Horsepower }}</div>
    <div class="table__cell">{{ car.Weight_in_lbs }}</div>
    <div class="table__cell">{{ car.Acceleration }}</div>
    <div class="table__cell">{{ car.Year }}</div>
    <div class="table__cell">{{ car.Origin }}</div>
  </div>
</template>
