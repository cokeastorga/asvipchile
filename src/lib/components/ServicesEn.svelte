<script lang="ts">
  const services = [
    {
      title: 'VIP Transfers',
      description: 'Punctual and elegant service for your transfers to and from airports, hotels or events.',
      icon: '🚗'
    },
    {
      title: 'Private Tours',
      description: 'Discover the most iconic destinations in Chile with exclusive guides and premium transportation.',
      icon: '🗺️'
    },
    {
      title: 'Corporate Services',
      description: 'Executive transportation with confidentiality and comfort for your meetings and events.',
      icon: '🏢'
    },
    {
      title: 'Custom Experiences',
      description: 'Design your perfect trip: wine routes, excursions, gastronomy and more, tailored for you.',
      icon: '✨'
    }
  ];
</script>

<section id="services" class="bg-white text-gray-800 py-16 px-6">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-6xl font-bold mb-4">Our Services</h2>
    <p class="text-lg mb-10 text-gray-600">Luxury transportation and personalized experiences throughout Chile.</p>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {#each services as service}
        <div class="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
          <div class="text-5xl mb-4">{service.icon}</div>
          <h3 class="text-xl font-semibold mb-2">{service.title}</h3>
          <p class="text-gray-600 text-sm">{service.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>