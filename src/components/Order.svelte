<script>
    import { Icon } from 'sveltestrap';
    import { orders } from "../store/orders";

    export let order;
    let salad = 0;
    let cheese = 0;
    let meat = 0;

    order.ingredients.map(e => {
        (e.type == 'salad') && (salad++);
        (e.type == 'cheese') && (cheese++);
        (e.type == 'meat') && (meat++);
    })

</script>

<div class="order">
    <div class="order-head">
        <strong>{order.time}</strong>
        <span class='trash' on:click="{() => orders.remove(order.time)}">
            <Icon name="trash" />
        </span>
    </div>
    <div class="ingredients">
        ingredients:
        {#if salad}
             <span class="salad">Salad ({salad})</span>
        {/if}
        {#if cheese}
             <span class="cheese">Cheese ({cheese})</span>
        {/if}
        {#if meat}
             <span class="meat">Meat ({meat})</span>
        {/if}
    </div>
    <div class="price">
        Total Price:
        <span class="price-color">{order.price} $</span>
    </div>
    <div class="contact-data">
        <strong class="contact-head">Contact Information</strong>
        <div>
            <i>Name: {order.name} | street: {order.street} | Postal Code: {order.postalCode} | Delivary Method: {order.delivaryMethod}</i>
        </div>
    </div>
</div>

<style>
    .order {
        margin: 20px auto;
        padding: 10px;
        border: 1px solid #ccc;
        width: 70%;
        box-shadow: 0 1px 2px rgb(218, 218, 218);
    }
    .order-head {
        padding: 10px;
        border-bottom: 1px solid #ddd;
    }
    .trash {
        color: brown;
        float: right;
        cursor: pointer;
        font-size: large;
    }
    .trash:hover {
        color: rgb(255, 0, 0);
    }
    .ingredients {
        display: flex;
        align-items: center;
        padding: 10px auto;
        margin: 15px auto;
    }
    .cheese,.salad,.meat {
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 5px;
    }
    .cheese {
        color: yellow;
        box-shadow: 1px 1px 2px 1px yellow;
    }
    .salad {
        color: green;
        box-shadow: 1px 1px 2px 1px green;
    }
    .meat {
        color: brown;
        box-shadow: 1px 1px 2px 1px brown;
    }
    .price {
        padding: 20px 0;
        border-bottom: 1px solid #ccc;
    }
    .price-color {
        color: red;
    }
    .contact-head {
        margin: 20px 0;
    }

    @media (min-width: 0) {
        .ingredients {
            flex-direction: column;
        }
        .cheese,.salad,.meat {
            width: 50%;
            margin: 10px auto;
        }
    }
    @media (min-width: 660px) {
        .ingredients {
            flex-direction: row;
        }
        .cheese,.salad,.meat {
            margin: auto 10px;
            width: fit-content;
        }
    }
</style>