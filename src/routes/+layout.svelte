<script>
  import '../app.css'; // Ajusta la ruta según donde estén tus estilos
</script>

<slot />

<style>
  /* Estilos globales, si los necesitas */
  :global(body) {
    margin: 0;
    font-family: Arial, sans-serif;
  }
</style>