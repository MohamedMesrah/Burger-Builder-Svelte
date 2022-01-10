<script>
    import Bread from "./Bread.svelte";    
    import Ingredient from "./Ingredient.svelte";
    import { ingredients } from '../store/ingredients';
</script>

<div class="burger">
    <Bread type="breadTop" />
        {#each $ingredients as { id, type } (id)}
            <Ingredient {type}/>
        {:else}
            <div>Empty</div>
        {/each}
    <Bread type="breadBottom" />
</div>

<style>
    .burger {
        height: auto;
        margin: 40px auto;
        overflow: auto;
        text-align: center;
        font-weight: bold;
        animation: appear 0.5s linear;
    }
    .burger::after {
        content: "";
        float: right;
    }

    @media (min-width: 0) {
        .burger {
            width: 100%;
            height: 250px;
        }
    }
    @media (min-width: 400px) {
        .burger {
            width: 400px;
            height: 250px;
        }
    }
    @media (min-width: 700px) {
        .burger {
            width: 550px;
            height: 350px;
        }
    }
    @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
