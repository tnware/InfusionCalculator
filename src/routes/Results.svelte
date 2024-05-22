<script>
    import * as Card from '$lib/components/ui/card';
    import * as Tabs from "$lib/components/ui/tabs";
    export let results;
</script>

<Card.Root class="bg-neutral-800 mt-6 rounded-lg shadow-lg overflow-hidden">
    <Card.Header class="bg-neutral-900 text-white p-4">
        <Card.Title class="text-lg font-bold">Results</Card.Title>
        <Card.Description class="text-neutral-400">Overview of your infusion calculations</Card.Description>
    </Card.Header>
    <Card.Content class="bg-neutral-700 p-4">
        <Tabs.Root class="w-full">
            <Tabs.List class="flex border-b border-neutral-600">
                <Tabs.Trigger value="infusionDetails" class="tab-trigger px-4 py-2 text-neutral-300 hover:text-white">Infusion Details</Tabs.Trigger>
                <Tabs.Trigger value="potencyBreakdown" class="tab-trigger px-4 py-2 text-neutral-300 hover:text-white">Potency Breakdown</Tabs.Trigger>
                <Tabs.Trigger value="costAnalysis" class="tab-trigger px-4 py-2 text-neutral-300 hover:text-white">Cost Analysis</Tabs.Trigger>
            </Tabs.List>
            
            <Tabs.Content value="infusionDetails" class="tab-content pt-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="result-card">Oil Volume (ml): <span>{results.oilVolumeMl.toFixed(2)} ml</span></div>
                    <div class="result-card">Total Capsules: <span>{results.totalCapsules.toFixed(2)}</span></div>
                    <div class="result-card">Total ML Infused: <span>{results.totalMlInfused.toFixed(2)} ml</span></div>
                </div>
            </Tabs.Content>
            
            <Tabs.Content value="potencyBreakdown" class="tab-content pt-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="result-card">Total THC (mg): <span>{results.totalThcMg.toFixed(2)} mg</span></div>
                    <div class="result-card">Total CBD (mg): <span>{results.totalCbdMg.toFixed(2)} mg</span></div>
                    <div class="result-card">THC per Capsule (mg): <span>{results.thcPerCapsule.toFixed(2)} mg</span></div>
                    <div class="result-card">CBD per Capsule (mg): <span>{results.cbdPerCapsule.toFixed(2)} mg</span></div>
                    <div class="result-card">THC per ML (mg): <span>{results.thcPerMl.toFixed(2)} mg</span></div>
                    <div class="result-card">CBD per ML (mg): <span>{results.cbdPerMl.toFixed(2)} mg</span></div>
                </div>
            </Tabs.Content>
            
            <Tabs.Content value="costAnalysis" class="tab-content pt-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="result-card">Total Product Cost ($): <span>${results.totalProductCost.toFixed(2)}</span></div>
                    <div class="result-card">Cost per Capsule ($): <span>${results.costPerCapsule.toFixed(2)}</span></div>
                    <div class="result-card">Cost per ML ($): <span>${results.costPerMl.toFixed(2)}</span></div>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    </Card.Content>
</Card.Root>

<style>
    .tab-trigger {
        @apply text-sm font-medium rounded-t-lg focus:outline-none;
    }
    
    .result-card {
        @apply bg-neutral-800 p-4 rounded-lg shadow flex justify-between items-center;
    }
</style>