<script>
    import { useNavigate, useLocation } from "svelte-navigator";
    import { Spinner } from 'sveltestrap';
    import { user } from "../store/user";

    let isSignIn = true;
    let username = '';
    let password = '';
    let loading = false;
    let navigate = useNavigate();
    let location = useLocation();

    const handleSubmit = () => {
        loading = true;
        setTimeout(() => {
            loading = false;
            $user = {
                loggedIn:true,
                username
            };
            navigate($location.state.fromOrder ? '/checkout' : '/');
        }, 2000);
    }

</script>

{#if loading}
    <div class="loading">
        <div class="spinner">
            <Spinner color='warning' type='grow' />
        </div>
    </div>
{:else}
    <div class="auth-form">
        <h4>Sign {isSignIn ? 'In' : 'Up'}</h4>
        <input 
            placeholder="Username..."
            bind:value={username}
        />
        <input bind:value={password} type="password" placeholder="Password..." />
        <div class="btns">
            <button class="submit"
                on:click="{handleSubmit}"
            >Submit</button>
            <button
                class="sign"
                on:click="{() => (isSignIn = !isSignIn)}"
            >Switch To Sign {isSignIn ? 'Up' : 'In'}</button>
        </div>            
        <span>
            <sub>
                <i>
                    *<strong>Dumy Registration</strong>
                </i>
            </sub>
        </span>
    </div>
{/if}

<style>
    h4 {
        text-align: center;
        margin: 20px auto;
    }
    input, button {
        padding: 7px;
        margin: 10px auto;
        width: 100%;
        border: 1px solid #aaa;
        border-radius: 5px;
    }
    strong {
        color: red;
    }
    .auth-form {
        border: 1px solid #aaa;
        border-radius: 5px;
        padding: 20px;
        margin: 20px auto;
        width: 50%;
        box-shadow: 1px 1px 1px #996337;
    }
    .btns {
        display: flex;
        justify-content: space-between;
    }
    .submit {
        color: white;
        background-color: rgb(231, 177, 0);
        border: 1px solid rgb(231, 177, 0);
    }
    .submit:hover {
        color: rgb(231, 177, 0);
        background-color: #fff;
    }
    .sign {
        color: white;
        background-color: #653208;
        border: 1px solid #653208;
    }
    .sign:hover {
        color: #653208;
        background-color: #fff;
    }
    .loading {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.404);
    }
    .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
    }

    @media (min-width: 0) {
        .auth-form {
            width: 90%;
        }
    }
    @media (min-width: 400px) {
        .auth-form {
            width: 380px;
        }
    }
    @media (min-width: 700px) {
        .auth-form {
            width: 550px;
        }
    }
</style>