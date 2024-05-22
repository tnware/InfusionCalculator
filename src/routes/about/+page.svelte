<script>
    import * as Card from '$lib/components/ui/card';
    import { onMount } from "svelte";

    onMount(() => {
        console.log('The About page has been mounted');
    });
</script>

<div class="container mx-auto p-4 cannabis-background">
    <div class="text-center mb-6">
        <h1 class="text-4xl font-bold cannabis-accent">About the Infusion Calculator</h1>
    </div>

    <Card.Root class="bg-neutral-800 bg-opacity-90 rounded-lg shadow-lg overflow-hidden mb-6">
        <Card.Content class="p-6">
            <p class="text-neutral-200 leading-relaxed">
                The <span class="cannabis-accent">Infusion Calculator</span> is an innovative tool designed to simplify the process of creating personalized cannabis-infused oils. ...
            </p>
            <p class="text-neutral-200 leading-relaxed mt-4">
                Our calculator enables users to accurately measure and balance the potency of THC and CBD in their infusions, ensuring a consistent and reliable outcome. Whether you're looking to craft edibles, topicals, or just enhance your culinary creations, the Infusion Calculator is the perfect companion for your infusion journey.
            </p>
        </Card.Content>
    </Card.Root>

    <Card.Root class="bg-neutral-800 bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
        <Card.Content class="p-6">
            <h2 class="text-2xl font-bold text-neutral-100 mb-4">
                Meet the <span class="cannabis-accent">Developer</span>
            </h2>
            <p class="text-neutral-200 leading-relaxed">
                Behind the Infusion Calculator is <span class="cannabis-accent">Jane Doe</span>, a passionate software engineer and cannabis enthusiast. ...
            </p>
            <p class="text-neutral-200 leading-relaxed mt-4">
                Jane's expertise in cannabis, combined with her commitment to empowering individuals through technology, has culminated in the creation of this calculator. She believes in the potential of cannabis to bring therapeutic benefits and joy, and this tool is her contribution to the community.
            </p>
            <p class="text-neutral-200 leading-relaxed mt-4">
                When she's not coding or experimenting with new recipes, Jane enjoys exploring the outdoors and educating others about the benefits of cannabis. She is an advocate for legalization and responsible use, aiming to destigmatize cannabis use through her work.
            </p>
        </Card.Content>
    </Card.Root>
</div>

<style>
    .cannabis-accent {
        color: #76b947; /* A green accent color */
    }

    .cannabis-background {
        background-image: url('/img/cannabis-background.jpg'); /* A cannabis leaf pattern */
        background-repeat: repeat;
    }
</style>