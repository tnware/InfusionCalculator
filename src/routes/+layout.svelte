<script>
  import "../app.css";
</script>

<div class="container mx-auto px-4 py-6">
	<nav class="bg-green-900 text-white p-4 flex justify-between items-center rounded-t-lg shadow">
		<h1 class="text-2xl font-bold tracking-tight">Infusion Calculator</h1>
		<div class="flex space-x-4">
			<a href="/" class="hover:text-green-500 transition-colors">Home</a>
			<a href="/about" class="hover:text-green-500 transition-colors">About</a>
		</div>
	</nav>
<slot />
</div>