<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import * as HoverCard from "$lib/components/ui/hover-card";
	import CapSizer from './CapSizer.svelte';
    import type { Unit } from '$lib/types';
    export let oilCost: number;
    export let oilVolume: number;
    export let oilVolumeUnit: Unit;
    export let capsuleSizeMl: number;
</script>

<Card.Root class="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
    <Card.Header class="bg-neutral-900 text-white p-4">
        <Card.Title class="text-lg font-bold">Oil Volume & Capsule Size</Card.Title>
        <Card.Description class="text-neutral-400">Adjust your infusion specifics here</Card.Description>
    </Card.Header>
    <Card.Content class="bg-neutral-700 p-4">
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <label for="oilVolume" class="block text-sm font-bold text-neutral-200">Oil to Infuse:</label>
                <div class="flex items-center space-x-2">
                    <input
                        class="bg-neutral-600 shadow appearance-none border border-neutral-500 rounded py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
                        id="oilVolume"
                        type="number"
                        bind:value={oilVolume}
                        min="0"
                    />
                    <select
                        id="oilVolumeUnit"
                        bind:value={oilVolumeUnit}
                        class="bg-neutral-600 shadow border border-neutral-500 rounded py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="ml">ml</option>
                        <option value="oz">oz</option>
                        <option value="cup">cup</option>
                        <option value="l">liter</option>
                    </select>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <HoverCard.Root>
                    <HoverCard.Trigger>
                        <label for="capsuleSizeMl" class="block text-sm font-bold text-neutral-200">
                            Capsule Size (ml): 
                        </label>
                        <span class="text-xs text-neutral-400">(Hover for sizes)</span>
                    </HoverCard.Trigger>
                    <HoverCard.Content>
                      <CapSizer />
                    </HoverCard.Content>
                  </HoverCard.Root>

                <input
                    class="bg-neutral-600 shadow appearance-none border border-neutral-500 rounded py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline w-1/2"
                    id="capsuleSizeMl"
                    type="number"
                    bind:value={capsuleSizeMl}
                    min="0"
                    step="0.01"
                />
            </div>
            <div class="flex items-center justify-between">
                <label for="oilCost" class="block text-sm font-bold text-neutral-200">Oil Cost ($):</label>
                <input
                    class="bg-neutral-600 shadow appearance-none border border-neutral-500 rounded py-2 px-3 text-neutral-200 leading-tight focus:outline-none focus:shadow-outline w-1/2"
                    id="oilCost"
                    type="number"
                    bind:value={oilCost}
                    min="0"
                />
            </div>
        </div>
    </Card.Content>
    <Card.Footer class="bg-neutral-800 text-neutral-400 p-4">
        <p>Adjust settings as needed to refine your infusion calculations.</p>
    </Card.Footer>
</Card.Root>
