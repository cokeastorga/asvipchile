<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import SobreNosotros from '$lib/components/SobreNosotros.svelte';
    import Servicios from '$lib/components/Servicios.svelte';
     import Contacto from '$lib/components/Contacto.svelte';
  import Clientes from '$lib/components/Clientes.svelte';
  import Ventajas from '$lib/components/Ventajas.svelte';
  import Reservar from '$lib/components/Reservar.svelte';
    import { goto } from '$app/navigation';
  
  import Footer from '$lib/components/Footer.svelte';

   function irAIngles() {
    goto('/en#reservar');
  }
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
