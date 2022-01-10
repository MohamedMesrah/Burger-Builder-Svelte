<script>
    import { ingredients } from '../store/ingredients';
    import { price } from '../store/price';
    import { user } from '../store/user';
    import { useNavigate } from "svelte-navigator";

    const navigate = useNavigate();

    const controls = [
        { label: "Salad", type: "salad" },
        { label: "Cheese", type: "cheese" },
        { label: "Meat", type: "meat" }
    ];
</script>

<div class='controls'>
    <div class='price'><strong>Current Price: {$price} $</strong></div>
    {#each controls as {label, type} (type)}
        <div class='control'>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label><strong>{label}</strong></label>
            <button 
                disabled="{$ingredients.filter(ing => ing.type == type).length <= 0}"
                on:click={e => { ingredients.minus(type); price.minus(type); }}
            >-</button>
            <button 
                on:click={e => { ingredients.pluse(type); price.pluse(type); }}
            >+</button>
        </div>
    {/each}
    <button 
        on:click={e => navigate($user.loggedIn ? '/checkout' : '/auth', { state : { fromOrder: true } })}
        class="order-now"
        disabled={!$ingredients.length}
    >
        { $user.loggedIn ? 'ORDER NOW' : 'SIGNUP TO ORDER' }
    </button>
</div>

<style>
    .controls {
        width: 100%;
        height: auto;
        background: #d87727;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        animation: appear 0.5s linear;
    }
    .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
    }
    .order-now {
        width: calc(40% - 20px);
        margin: 10px auto 30px auto;
    }
    .price {
        margin: 20px auto;
    }
    label {
        width: 20%;
        margin: 0 10px;
    }
    button {
        padding: 10px;
        margin: 10px 0;
        color: white;
        background-color: #ca9400;
        border: 1px solid black;
        width: 20%;
    }
    button:hover {
        background-color: #c06d00;
    }
    button:disabled {
        background-color: #968965;
        color: rgb(54, 54, 54);
        cursor: not-allowed;
    }

    @media (min-width: 0) {
        .control, .order-now {
            width: 90%;
        }
    }
    @media (min-width: 400px) {
        .control, .order-now {
            width: 360px;
        }
    }
    @media (min-width: 700px) {
        .control, .order-now {
            width: 500px;
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