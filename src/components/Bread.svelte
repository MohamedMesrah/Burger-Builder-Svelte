<script>
    export let type;
</script>

<div class="{type == 'breadTop' ? 'breadTop' : 'breadBottom' }">
    {#if type == 'breadTop'}
        <div class='seeds'></div>
        <div class='seeds2'></div>
    {/if}
</div>

<style>
    .breadTop {
        width: 80%;
        height: 40%;
        border-radius: 50% 50% 2% 2%;
        background: linear-gradient(
            rgb(255, 115, 0),
            rgb(255, 163, 87),
            rgb(255, 115, 0)
        );
        box-shadow: inset -15px 0 rgb(214, 114, 0);
        margin: 1.5% auto;
        position: relative;
    }
    .seeds {
        width: 15%;
        height: 20%;
        position: absolute;
        background-color: white;
        left: 45%;
        top: 30%;
        border-radius: 40%;
        transform: rotate(0deg);
        box-shadow: inset -3px -2px rgb(226, 222, 219);
    }
    .seeds:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: -200%;
        top: 100%;
        border-radius: 40%;
        transform: rotate(30deg);
        box-shadow: inset -3px -2px rgb(226, 222, 219);
    }
    .seeds2 {
        width: 15%;
        height: 20%;
        position: absolute;
        background-color: white;
        right: 17%;
        top: 40%;
        border-radius: 40%;
        transform: rotate(-10deg);
        box-shadow: inset -3px -2px rgb(226, 222, 219);
    }
    .seeds2:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: -200%;
        top: 0%;
        border-radius: 40%;
        transform: rotate(30deg);
        box-shadow: inset -3px -2px rgb(226, 222, 219);
    }

    .breadBottom {
        width: 80%;
        height: 25%;
        border-radius: 0 0 25px 25px;
        background: linear-gradient(
            rgb(255, 115, 0),
            rgb(255, 163, 87),
            rgb(255, 115, 0)
        );
        box-shadow: inset -15px 0 rgb(214, 114, 0);
        margin: 1.5% auto;
    }
</style>