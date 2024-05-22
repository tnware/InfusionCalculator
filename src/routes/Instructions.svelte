<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { Button } from '$lib/components/ui/button';
    import type { Process, Processes, Material } from '$lib/types';
    export let materials: Material[] = [];

    const processes: Processes ={
        A: {
            title: 'Process A - Trimmings and Buds',
            steps: [
                'Decarboxylation: Heat your trimmings or buds at 240°F (115°C) for approximately 40 minutes to activate the THC. This process converts THCA, which is not psychoactive, into THC, which is.',
                'Infusion: After decarboxylation, combine the activated material with your choice of oil (e.g., coconut, olive) and heat at a low temperature (around 160-200°F or 71-93°C) for 2 to 4 hours. This allows the THC to infuse into the oil.',
                'Straining: Once the infusion is complete, strain the mixture to remove the plant material, leaving you with cannabis-infused oil.'
            ]
        },
        B: {
            title: 'Process B - Concentrates',
            steps: [
                'Partial Decarboxylation (Optional): Though concentrates like wax, shatter, or rosin are often already activated, a short decarboxylation period can ensure maximum activation. Heat your concentrate at 240°F (115°C) for 20 minutes.',
                'Direct Infusion: Combine the concentrate with your choice of oil and heat the mixture at a low temperature (around 160-200°F or 71-93°C) for about an hour. Since concentrates are more potent and usually decarboxylated, this process does not require as much time.',
                'Mix Thoroughly: Ensure the concentrate is fully dissolved in the oil for a uniform infusion.'
            ]
        },
        C: {
            title: 'Process C - Distillates',
            steps: [
                'Mixing: Since distillates are already activated (decarboxylated), you can directly mix them with your choice of oil. This process does not require heat, but gentle warming can help integrate the distillate more smoothly.',
                'Stirring: Stir the mixture thoroughly to ensure the distillate is evenly distributed throughout the oil.',
                'No Further Processing: Distillates are ready-to-use post-mixing and do not require any additional steps.'
            ]
        }
    };

    let selectedProcesses: Process[] = [];

    $: {
        let selectedMaterials = materials.filter(m => m.selected);
        selectedProcesses = [];

        if (selectedMaterials.some(m => m.name === 'Trimmings' || m.name === 'Buds')) {
            selectedProcesses.push(processes.A);
        }

        if (selectedMaterials.some(m => m.name === 'Concentrates')) {
            selectedProcesses.push(processes.B);
        }

        if (selectedMaterials.some(m => m.name === 'Distillate')) {
            selectedProcesses.push(processes.C);
        }
    }
</script>

<Card.Root class="bg-neutral-800 rounded-lg shadow-lg overflow-hidden mt-6">
  <Card.Header class="bg-neutral-900 text-white p-4">
    <Card.Title class="text-lg font-bold">Infusion Instructions</Card.Title>
    <Card.Description class="text-neutral-400">Detailed step-by-step guide based on selected materials.</Card.Description>
  </Card.Header>
  <Card.Content class="bg-neutral-700 p-4 space-y-4">
    {#if selectedProcesses.length > 0}
        {#each selectedProcesses as process}
            <div class="process-step space-y-2">
                <h3 class="text-lg text-neutral-200 font-semibold">{process.title}</h3>
                <ol class="list-decimal list-inside space-y-2">
                    {#each process.steps as step, index}
                        <li class="flex items-start">
                            <span class="text-sm text-neutral-400 font-medium flex-none mt-1 mr-2">{index + 1}.</span>
                            <p class="flex-1">{step}</p>
                        </li>
                    {/each}
                </ol>
            </div>
        {/each}
    {:else}
        <p class="text-neutral-200">Please select at least one material to see the infusion process.</p>
    {/if}
  </Card.Content>
  <Card.Footer class="bg-neutral-800 text-right p-4">
    <Button variant="outline" class="text-neutral-200 border border-neutral-600 hover:bg-neutral-700">Restart</Button>
  </Card.Footer>
</Card.Root>
