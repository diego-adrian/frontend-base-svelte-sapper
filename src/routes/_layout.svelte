<script context="module">
  export async function preload (page, session) {
    const { token } = session;
    if (!token) {
      console.log('--------PATH----------------------------');
      console.log(page.path);
      console.log('------------------------------------');
      if ((page.path !== '/') || (page.path !== '/login') || page.path !== '/service-worker-index.html') return this.redirect(302, '/login');
    }
    return { token };
  };
</script>
<script>
  import Sidenav from "../layout/AppSidenav.svelte";
  import { fade } from "svelte/transition";
  export let token;
</script>

<style>
  main {
    padding: 0;
    margin: 0;
    flex-grow: 1;
    padding: 10px;
  }
  .main-container {
    display: flex;
    flex-direction: row;
  }
</style>

<section class="main-container">
  {#if token}
    <Sidenav />
  {/if}
  <main transition:fade={{ duration: 300 }}>
    <slot />
  </main>
</section>
