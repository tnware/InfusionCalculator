<script lang="ts">
	import RecipeComponents from './RecipeComponents.svelte';
	import * as Card from '$lib/components/ui/card';
	import { fade } from 'svelte/transition';
	import OilConfiguration from './OilConfiguration.svelte';
	import Results from './Results.svelte';
	import Materials from './Materials.svelte';
	import Instructions from './Instructions.svelte';
	import type { Material, Unit } from '$lib/types';

	let materials: Material[] = [
		{
			name: 'Trimmings',
			selected: false,
			imageUrl: '/img/leaf.jpg',
			weight: 28,
			thc: 10,
			cbd: 0.5,
			cost: 0
		},
		{
			name: 'Buds',
			selected: false,
			imageUrl: '/img/nug.jpg',
			weight: 28,
			thc: 15,
			cbd: 3,
			cost: 0
		},
		{
			name: 'Concentrates',
			selected: false,
			imageUrl: '/img/wax.jpg',
			weight: 10,
			thc: 60,
			cbd: 10,
			cost: 0
		},
		{
			name: 'Distillate',
			selected: false,
			imageUrl: '/img/distillate.jpg',
			weight: 10,
			thc: 90,
			cbd: 0,
			cost: 0
		}
	];

	let oilVolume = 1;
	let oilVolumeUnit: Unit = 'ml';
	let capsuleSizeMl = 0.9;
	let oilCost = 0;

    let results = {
        totalThcMg: 0,
        totalCbdMg: 0,
        totalProductCost: 0,
        oilVolumeMl: 0,
        totalCapsules: 0,
        thcPerCapsule: 0,
        cbdPerCapsule: 0,
        totalMlInfused: 0,
        costPerCapsule: 0,
        costPerMl: 0,
        thcPerMl: 0,
        cbdPerMl: 0,
    };

	function convertToMilliliters(volume: number, unit: Unit) {
		const conversionRates = {
			ml: 1,
			oz: 29.5735,
			cup: 240,
			l: 1000
		};
		return volume * conversionRates[unit];
	}

    $: {
        results.totalThcMg = materials.reduce((acc, material) => acc + (material.selected ? material.thc * material.weight * 10 : 0), 0);
        results.totalCbdMg = materials.reduce((acc, material) => acc + (material.selected ? material.cbd * material.weight * 10 : 0), 0);
        results.totalProductCost = materials.reduce((acc, material) => acc + (material.selected ? material.cost : 0), oilCost);
        results.oilVolumeMl = convertToMilliliters(oilVolume, oilVolumeUnit);
        results.totalCapsules = results.oilVolumeMl / capsuleSizeMl;
        results.thcPerCapsule = results.totalThcMg / results.totalCapsules;
        results.cbdPerCapsule = results.totalCbdMg / results.totalCapsules;
        results.totalMlInfused = results.oilVolumeMl;
        results.costPerCapsule = results.totalProductCost / results.totalCapsules;
        results.costPerMl = results.totalProductCost / results.totalMlInfused;
        results.thcPerMl = results.totalThcMg / results.totalMlInfused;
        results.cbdPerMl = results.totalCbdMg / results.totalMlInfused;
    }

</script>




<Materials bind:materials />

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
		<OilConfiguration bind:oilVolume bind:oilVolumeUnit bind:capsuleSizeMl bind:oilCost />
		<RecipeComponents {materials} />
	</div>

	<Instructions {materials} />

	<Results bind:results />

