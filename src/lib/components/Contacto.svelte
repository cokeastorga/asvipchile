<section id="contact" class="bg-white text-gray-800 py-16 px-6 md:px-20">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-6xl font-bold mb-4">Contáctanos</h2>
    <p class="mb-8 text-gray-600">¿Tienes dudas o deseas una cotización personalizada? Escríbenos y te responderemos a la brevedad.</p>
    
    <div class="grid gap-6 md:grid-cols-2 text-left">
      <div>
        <h3 class="font-semibold mb-2">Teléfono</h3>
        <p class="mb-4">+56 9641 3813</p>
        
        <h3 class="font-semibold mb-2">Correo electrónico</h3>
        <p class="mb-4">sayala@asvipchile.cl</p>

        <h3 class="font-semibold mb-2">Dirección</h3>
        <p>Las Condes, Santiago, Chile</p>
      </div>

      <form class="bg-gray-100 p-6 rounded-lg shadow" on:submit|preventDefault={() => alert('Formulario enviado.')}>
        <label class="block mb-4">
          <span class="text-gray-700">Nombre</span>
          <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
        </label>
        <label class="block mb-4">
          <span class="text-gray-700">Correo</span>
          <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required />
        </label>
        <label class="block mb-4">
          <span class="text-gray-700">Mensaje</span>
          <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required></textarea>
        </label>
        <button type="submit" class="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">Enviar</button>
      </form>
    </div>
  </div>
</section>