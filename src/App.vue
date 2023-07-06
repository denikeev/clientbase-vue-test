<template>
  <p>Test paragraph {{ greeting }}</p>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return { greeting: 'Hello '};
    },
  };
</script>

