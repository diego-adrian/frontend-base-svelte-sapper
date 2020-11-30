<script>
  import Sidenav from '../layout/AppSidenav.svelte';
  import { fade } from 'svelte/transition';
</script>

<style></style>


<main
  transition:fade={{ duration: 300 }}  
>
  <Sidenav />
  <slot />
</main>