<script>
    import { Link } from "svelte-navigator";
    import { user } from "../store/user";

    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'sveltestrap';

    let isOpen = false;
    let navItems = [];
  
    $:{
      if ($user.loggedIn) {
        navItems = [
          { to: '/', name: 'Burger Builder'},
          { to: '/orders', name: 'Orders'},
          { to: '/logout', name: 'Logout'}
        ];
      } else {
        navItems = [
          { to: '/', name: 'Burger Builder'},
          { to: '/auth', name: 'Sign In / Sign Up'},
        ];
      }

    }

    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
  </script>
  
  <Navbar expand="md" dark>
    <NavbarBrand>
      <span class="link">
        <Link to='/'>
          <img class="logo" src="logo.png" alt="logo" width="50">
        </Link>
      </span>
    </NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ms-auto" navbar>
        {#each navItems as { to, name } (to)}
          <NavItem>
            <NavLink>
              <span class="link">
                <Link {to}>{name}</Link>
              </span>
            </NavLink>
        </NavItem>
        {/each}
      </Nav>
    </Collapse>
</Navbar>

<style>
	.link :global(a) {
    color: #fff;
    text-decoration: none;
  }
  .link :global(a):hover {
    color: rgb(255, 137, 2);
  }
  .logo {
    border-radius: 10px;
  }

</style>
