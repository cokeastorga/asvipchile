<script lang="ts">
  let nombre = '';
  let empresa = '';
  let fecha = '';
  let hora = '';
  let retiro = '';
  let destino = '';
  let pasajeros = 1;
  let preferencias = '';

  function enviarWhatsApp() {
    const mensaje = `Hola, quiero reservar un traslado VIP:\n\n` +
      `👤 Nombre: ${nombre}\n` +
      `🏢 Empresa: ${empresa}\n` +
      `📅 Fecha: ${fecha}\n🕒 Hora: ${hora}\n` +
      `📍 Desde: ${retiro}\n📍 Hacia: ${destino}\n` +
      `👥 Pasajeros: ${pasajeros}\n` +
      `💬 Preferencias: ${preferencias || 'Ninguna'}`;

    const numero = '56996413813';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
</script>

<section id="reservar" class="relative py-24 text-white">
  <!-- 🎥 Video de fondo -->
  <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
    <source src="/video.mp4" type="video/mp4" />
    Tu navegador no soporta video HTML5.
  </video>

  <!-- 🔲 Capa oscura para legibilidad -->
  <div class="absolute inset-0 bg-black/60 z-10"></div>

  <!-- 🧾 Formulario contenido -->
  <div class="relative z-20 max-w-3xl mx-auto px-6 bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg text-gray-800">
    <h2 class="text-6xl font-bold mb-6 text-center text-gray-900">Reserva tu Traslado</h2>

    <form on:submit|preventDefault={enviarWhatsApp} class="grid gap-4">
      <div class="grid md:grid-cols-2 gap-4">
        <input class="input" type="text" bind:value={nombre} placeholder="Nombre completo" required />
        <input class="input" type="text" bind:value={empresa} placeholder="Empresa (opcional)" />
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <input class="input" type="date" bind:value={fecha} required />
        <input class="input" type="time" bind:value={hora} required />
      </div>
      <input class="input" type="text" bind:value={retiro} placeholder="Lugar de retiro" required />
      <input class="input" type="text" bind:value={destino} placeholder="Destino" required />
      <div class="grid md:grid-cols-2 gap-4">
        <input class="input" type="number" bind:value={pasajeros} min="1" placeholder="Pasajeros" required />
        <input class="input" type="text" bind:value={preferencias} placeholder="Preferencias (opcional)" />
      </div>
      <button type="submit" class="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
        Enviar por WhatsApp
      </button>
    </form>
  </div>
</section>

<style>
  .input {
    @apply w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500;
  }
</style>
