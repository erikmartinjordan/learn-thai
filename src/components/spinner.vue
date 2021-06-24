<template>
    <div class = 'loading'/>
</template>

<script>

export default {
    name: 'spinner'
}
</script>

<style scoped>
.loading {
    animation: spin 0.5s linear infinite;
    border: 3px solid black;
    border-radius: 50%;
    border-top-color: transparent;
    display: inline-block;
    height: 16px;
    width: 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
