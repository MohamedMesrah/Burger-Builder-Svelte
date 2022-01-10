<script>
    import { beforeUpdate } from 'svelte';
    import { useNavigate } from "svelte-navigator";
    import { user } from '../store/user';
    import { ingredients } from '../store/ingredients';
    import { price } from '../store/price';
    
    const navigate = useNavigate();

    beforeUpdate(() => {
        $user = {
            loggedIn: false,
            username: ''
        }
        ingredients.reset();
        price.reset();
        navigate('/');
    })
</script>