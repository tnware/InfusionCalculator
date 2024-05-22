<script lang="ts">
	import * as Card from '$lib/components/ui/card';
    import type { Material } from '$lib/types';
    export let materials: Material[] = []

function toggleSelection(selectedMaterial: Material) {
		const updatedMaterials = materials.map((material) =>
			material.name === selectedMaterial.name
				? { ...material, selected: !material.selected }
				: material
		);
		materials = updatedMaterials;
	}
</script>

<Card.Root class="bg-neutral-800 mt-6 rounded-lg shadow-lg overflow-hidden">
    <Card.Header class="bg-neutral-900 text-white p-4">
        <Card.Title class="text-xl font-bold">Select Your Materials:</Card.Title>
        <Card.Description class="text-neutral-300">Review and customize your selection below.</Card.Description>
    </Card.Header>
    <Card.Content class="p-4 bg-neutral-700">
        <div class="flex flex-wrap justify-center gap-4">
            {#each materials as material, i (material.name)}
                <div class={`max-w-72 rounded overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ${material.selected ? 'shadow-lg' : 'opacity-50'}`}>
                    <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter">
                        <a href="#" on:click={() => toggleSelection(material)}>
                          <img class="rounded-lg" src={material.imageUrl} alt={material.name}>
                        </a>
                        <figcaption class="absolute px-4 text-lg text-white bg-neutral-800 opacity-90 bottom-6 rounded-r">
                            <p>{material.name}</p>
                        </figcaption>
                      </figure>
                    <div class={`rounded-lg mt-2 ${material.selected ? ' p-4 bg-neutral-600' : 'bg-neutral-700'}`}>
                        {#if material.selected}
                            <div class="space-y-2">
                                <div class="flex flex-col mb-2">
                                    <label class="text-sm font-bold text-neutral-200">WEIGHT (g):</label>
                                    <input
                                        class="bg-neutral-500 border border-neutral-700 rounded py-1 px-2 text-neutral-200 leading-tight focus:outline-none focus:ring focus:ring-green-500"
                                        type="number"
                                        bind:value={material.weight}
                                        min="0"
                                        step="any"
                                    />
                                </div>
                                <div class="flex justify-between items-center mb-2">
                                    <div class="flex flex-col w-1/2 mr-2">
                                        <label class="text-sm font-bold text-neutral-200">THC (%):</label>
                                        <input
                                            class="bg-neutral-500 border border-neutral-700 rounded py-1 px-2 text-neutral-200 leading-tight focus:outline-none focus:ring focus:ring-green-500"
                                            type="number"
                                            bind:value={material.thc}
                                            min="0"
                                            step="any"
                                        />
                                    </div>
                                    <div class="flex flex-col w-1/2">
                                        <label class="text-sm font-bold text-neutral-200">CBD (%):</label>
                                        <input
                                            class="bg-neutral-500 border border-neutral-700 rounded py-1 px-2 text-neutral-200 leading-tight focus:outline-none focus:ring focus:ring-green-500"
                                            type="number"
                                            bind:value={material.cbd}
                                            min="0"
                                            step="any"
                                        />
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="text-sm font-bold text-neutral-200">COST ($):</label>
                                    <input
                                        class="bg-neutral-500 border border-neutral-700 rounded py-1 px-2 text-neutral-200 leading-tight focus:outline-none focus:ring focus:ring-green-500"
                                        type="number"
                                        bind:value={material.cost}
                                        min="0"
                                        step="any"
                                    />
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </Card.Content>
</Card.Root>