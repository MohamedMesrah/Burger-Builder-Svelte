<script>
    import Order from './Order.svelte'
    import { orders } from "../store/orders";
</script>

<div class='orders'>
{#each $orders as order (order.time)}
    <Order {order} />
{:else}
    <h1>There is no orders yet..</h1>
{/each}
</div>

<style>
    .orders {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        text-align: center;
        position: absolute;
        top: 50%;
        text-shadow: 2px 2px 2px orange;
    }

    @media (min-width: 0) {
        .orders {
            padding: auto;
        }
    }
    @media (min-width: 650px) {
        .orders {
            padding: 20px;
        }
    }
</style>