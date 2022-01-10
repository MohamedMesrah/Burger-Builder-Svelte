<script>
	import { Router, Route } from "svelte-navigator";
	import NavBar from "./components/NavBar.svelte";
	import Burger from "./components/Burger.svelte";
    import Controls from "./components/Controls.svelte";
	import Auth from "./components/Auth.svelte";
	import Checkout from "./components/Checkout.svelte";
	import ContactData from "./components/ContactData.svelte";
	import Logout from "./components/Logout.svelte";
	import Orders from "./components/Orders.svelte";
</script>

<Router primary={false} >
	<NavBar />
	<div>
		<Route path="/" >
			<Burger />
			<Controls />
		</Route>
		<Route path="/auth" ><Auth /></Route>
		<Route path="/logout" ><Logout /></Route>
		<Route path="/orders" ><Orders /></Route>
		<Route path="/checkout/*" >
			<Route path="/">
				<Checkout />
			</Route>
			<Route path="contact-data" >
				<ContactData />
			</Route>
		</Route>
		<Route><h1>Not Found</h1></Route>
	</div>
</Router>