<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/HeroEn.svelte';
  import SobreNosotros from '$lib/components/SobreNosotrosEn.svelte';
  import Servicios from '$lib/components/ServicesEn.svelte';
  import Contacto from '$lib/components/ContactUs.svelte';
  import Clientes from '$lib/components/ClientesEn.svelte';
  import Ventajas from '$lib/components/VentajasEn.svelte';
  import Reservar from '$lib/components/ReservarEn.svelte';  
  import Footer from '$lib/components/FooterEn.svelte';
</script>


<Navbar />
<main class="pt-16 scroll-smooth">
  <Hero />
    <div class="h-px bg-gray-300 my-8 w-full"></div>

  <SobreNosotros />
  <div class="h-px bg-gray-300 my-8 w-full"></div>

  <Clientes />
  <div class="h-px bg-gray-300 my-8 w-full"></div>

  <Ventajas />
  <div class="h-px bg-gray-300 my-8 w-full"></div>

  <Servicios />
  <div class="h-px bg-gray-300 my-8 w-full"></div>

  <Reservar />
  <div class="h-px bg-gray-300 my-8 w-full"></div>


  <Contacto />
  <div class="h-px bg-gray-300 my-8 w-full"></div>

  <Footer />
</main>
