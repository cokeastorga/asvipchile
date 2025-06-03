<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  $: currentPath = $page.url.pathname;
  $: currentLang = currentPath.startsWith('/en') ? 'en' : 'es';

  function switchLang() {
    const otherLang = currentLang === 'en' ? 'es' : 'en';
    const restOfPath = currentPath.replace(/^\/(en|es)/, '');
    goto(`/${otherLang}${restOfPath}`);
  }
</script>


<nav class="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur text-white shadow-sm">
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <!-- Logo + texto -->
    <a href={`/${currentLang}`} class="flex items-center gap-3">
      <img src="/logo.jpg" alt="ASVip Logo" class="h-10 w-10 object-cover rounded-lg shadow" />
      <span class="text-lg font-semibold tracking-wide whitespace-nowrap">
        ASVip Transporte de lujo
      </span>
    </a>

    <!-- Controles: botón y selector idioma -->
    <div class="flex items-center gap-4">
      <a href={`/${currentLang}#reservar`} class="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md font-medium transition">
        {currentLang === 'en' ? 'Book Now' : 'Reservar'}
      </a>
      <button
        on:click={switchLang}
        class="text-sm border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition"
      >
        {currentLang === 'en' ? 'ES' : 'EN'}
      </button>
    </div>
  </div>
</nav>
