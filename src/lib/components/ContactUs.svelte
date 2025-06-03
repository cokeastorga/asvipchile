<script lang="ts">
  let name = '';
  let email = '';
  let message = '';
</script>

<section id="contact" class="bg-white text-gray-800 py-20 px-6">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="text-6xl font-bold mb-4">Contact Us</h2>
    <p class="mb-8 text-gray-600">We're here to help you. Fill out the form and we'll get back to you as soon as possible.</p>
    <form
      class="space-y-4 text-left"
      on:submit|preventDefault={() => {
        alert(`Message sent:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
      }}
    >
      <div>
        <label for="name" class="block text-sm font-medium">Name</label>
        <input id="name" type="text" bind:value={name} class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium">Email</label>
        <input id="email" type="email" bind:value={email} class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" required />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium">Message</label>
        <textarea id="message" bind:value={message} rows="4" class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md" required></textarea>
      </div>
      <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">Send</button>
    </form>
  </div>
</section>
