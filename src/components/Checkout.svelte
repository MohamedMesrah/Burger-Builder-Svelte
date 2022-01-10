<script>
    import { useNavigate } from "svelte-navigator";
    import { Button } from "sveltestrap";
	import Burger from "./Burger.svelte";

    const navigate = useNavigate();
    
</script>

<div class="checkout">
    <h1>We Hope It Tastes Well!</h1>
    <Burger />
    <div class='btns'>
        <Button on:click={() => navigate('/')}>Cancel</Button>
        <Button color="primary" on:click={() => navigate('contact-data')}>Continue</Button>
    </div>
</div>

<style>
    .checkout {
        text-align: center;
    }
    :global(.checkout .burger) {
        overflow: visible;
    }
    .btns {
        clear: both;
    }
</style>