<script lang="ts">
  let name = '';
  let company = '';
  let date = '';
  let time = '';
  let pickup = '';
  let destination = '';
  let passengers = 1;
  let preferences = '';

  function sendWhatsApp() {
    const message = `Hello, I want to book a VIP transfer:\n\n` +
      `👤 Name: ${name}\n` +
      `🏢 Company: ${company}\n` +
      `📅 Date: ${date}\n🕒 Time: ${time}\n` +
      `📍 From: ${pickup}\n📍 To: ${destination}\n` +
      `👥 Passengers: ${passengers}\n` +
      `💬 Preferences: ${preferences || 'None'}`;

    const number = '56996413813'; // 🔁 Replace with real number
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
</script>

<section id="book" class="relative py-24 text-white">
  <!-- 🎥 Background Video -->
  <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0">
    <source src="/video.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>

  <!-- 🔲 Overlay -->
  <div class="absolute inset-0 bg-black/60 z-10"></div>

  <!-- 🧾 Form Content -->
  <div class="relative z-20 max-w-3xl mx-auto px-6 bg-white/90 backdrop-blur p-8 rounded-lg shadow-lg text-gray-800">
    <h2 class="text-5xl font-bold mb-6 text-center text-gray-900">Book Your Ride</h2>

    <form on:submit|preventDefault={sendWhatsApp} class="grid gap-4">
      <div class="grid md:grid-cols-2 gap-4">
        <input class="input" type="text" bind:value={name} placeholder="Full name" required />
        <input class="input" type="text" bind:value={company} placeholder="Company (optional)" />
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <input class="input" type="date" bind:value={date} required />
        <input class="input" type="time" bind:value={time} required />
      </div>
      <input class="input" type="text" bind:value={pickup} placeholder="Pickup location" required />
      <input class="input" type="text" bind:value={destination} placeholder="Destination" required />
      <div class="grid md:grid-cols-2 gap-4">
        <input class="input" type="number" bind:value={passengers} min="1" placeholder="Passengers" required />
        <input class="input" type="text" bind:value={preferences} placeholder="Preferences (optional)" />
      </div>
      <button type="submit" class="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
        Send via WhatsApp
      </button>
    </form>
  </div>
</section>

<style>
  .input {
    @apply w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500;
  }
</style>
