<script>
    import { useNavigate } from "svelte-navigator";
    import { contactData } from "../store/contactData";
    import { ingredients } from "../store/ingredients";
    import { price } from "../store/price";
    import { orders } from "../store/orders";

    const navigate = useNavigate();
    
    const handleOrder = () => {
        let time = (new Date()).toISOString();
        time = `${time.substring(0, 10)}  ${time.substring(11, 18)}`;

        orders.add({
            ...$contactData,
            ingredients: [...$ingredients],
            price: $price,
            time
        });
        ingredients.reset();
        price.reset();
        navigate('/');
    }

</script>

<div class="contact">
    <h5>Enter Your Contact Data</h5>
    <input type="text" placeholder="Name..." bind:value={$contactData.name} />
    <input type="text" placeholder="Street..." bind:value={$contactData.street} />
    <input type="text" placeholder="Postal Code..." bind:value={$contactData.postalCode}  />
    <select bind:value={$contactData.delivaryMethod}>
        <option value="" selected disabled>Delivary Method</option>
        <option value="Fastest">Fastest</option>
        <option value="cheapest">Cheapest</option>
    </select>

    <button class="order" on:click="{handleOrder}">Order</button>
</div>

<style>
    input, button, select {
        padding: 7px;
        margin: 10px auto;
        width: 100%;
        border: 1px solid #aaa;
        border-radius: 5px;
    }
    select {
        background-color: #fff;
    }
    h5 {
        text-align: center;
        padding: 20px 0;
    }
    .contact {
        align-items: center;
        width: 50%;
        margin: 20px auto;
        border: 1px solid #aaa;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 1px 1px 1px rgba(255, 153, 0, 0.353);
    }
    .order {
        color: white;
        background-color: rgb(255, 153, 0);
        border: 1px solid rgb(255, 153, 0);
    }
    .order:hover {
        color: rgb(255, 153, 0);
        background-color: #fff;
    }

    @media (min-width: 0) {
        .contact {
            width: 90%;
        }
    }
    @media (min-width: 400px) {
        .contact {
            width: 380px;
        }
    }
    @media (min-width: 700px) {
        .contact {
            width: 550px;
        }
    }
</style>