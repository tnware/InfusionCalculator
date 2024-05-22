<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import type { Material } from '$lib/types';
  export let materials: Material[] = [];

  let totalWeight = 0, totalTHCMg = 0, totalCBDMg = 0;

  $: if (materials && materials.length > 0) {
      const selectedMaterials = materials.filter(m => m.selected);
      totalWeight = selectedMaterials.reduce((acc, material) => acc + material.weight, 0);
      totalTHCMg = selectedMaterials.reduce((acc, material) => acc + (material.weight * 1000) * (material.thc / 100), 0);
      totalCBDMg = selectedMaterials.reduce((acc, material) => acc + (material.weight * 1000) * (material.cbd / 100), 0);
  } else {
      totalWeight = 0;
      totalTHCMg = 0;
      totalCBDMg = 0;
  }
</script>

<Card.Root class="bg-neutral-800 rounded-lg shadow-lg overflow-hidden">
  <Card.Header class="bg-neutral-900 text-white p-4">
      <Card.Title class="text-lg font-bold">Recipe Components</Card.Title>
      <Card.Description class="text-neutral-400">At-a-glance overview of selected materials and totals.</Card.Description>
  </Card.Header>
  <Card.Content class="bg-neutral-700 p-4">
      <div class="overflow-x-auto">
          <table class="w-full text-neutral-200">
              <thead class="text-left">
                  <tr>
                      <th class="py-2">Material</th>
                      <th>Weight (g)</th>
                      <th>THC (%)</th>
                      <th>CBD (%)</th>
                  </tr>
              </thead>
              <tbody>
                  {#each materials.filter((m) => m.selected) as material}
                  <tr class="border-b border-neutral-600">
                      <td class="py-2">{material.name}</td>
                      <td><Badge class="bg-red-500">{material.weight}g</Badge></td>
                      <td><Badge class="bg-purple-500">{material.thc}%</Badge></td>
                      <td><Badge class="bg-amber-500">{material.cbd}%</Badge></td>
                  </tr>
                  {/each}

                  <tr class="font-bold">
                      <td>Total</td>
                      <td><Badge class="bg-green-500">{totalWeight} g</Badge></td>
                      <td><Badge class="bg-green-700">{totalTHCMg.toFixed(2)} mg</Badge></td>
                      <td><Badge class="bg-green-900">{totalCBDMg.toFixed(2)} mg</Badge></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </Card.Content>
  <Card.Footer class="bg-neutral-800 text-right p-4">
      <Button variant="outline" class="text-neutral-200 border border-neutral-600 hover:bg-neutral-700">Customize</Button>
  </Card.Footer>
</Card.Root>
