<script>
  export let servicios = [
    {
      titulo: "Transporte ejecutivo",
      descripcion: "Viajes corporativos con chofer privado.",
      icono: "🚘"
    },
    {
      titulo: "Traslados al aeropuerto",
      descripcion: "Puntualidad garantizada 24/7.",
      icono: "✈️"
    },
    {
      titulo: "Tours privados",
      descripcion: "Experiencias exclusivas por la ciudad y sus alrededores.",
      icono: "🗺️"
    }
  ];
</script>

<section id="servicios" class="bg-white py-16 px-6 text-gray-800">
  <div class="max-w-7xl mx-auto text-center">
    <h2 class="text-6xl font-bold mb-8">Nuestros Servicios</h2>
    <div class="grid md:grid-cols-3 gap-8">
      {#each servicios as servicio}
        <div class="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div class="text-5xl mb-4">{servicio.icono}</div>
          <h3 class="text-xl font-semibold mb-2">{servicio.titulo}</h3>
          <p>{servicio.descripcion}</p>
        </div>
      {/each}
    </div>
  </div>
</section>