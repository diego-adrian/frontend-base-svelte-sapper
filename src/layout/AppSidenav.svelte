<script>
  import { NavigationDrawer, List, ListItem } from "smelte";
  let showNav = true;
  let right = false;
  let persistent = true;
  let elevation = true;
  const menu = [ { to: "/about", text: "About" }, { to: "/blog", text: "Blog" }
  ];
</script>

<style>
  * :global(.navigation-drawer) {
    margin-top: 0px;
    position: relative;
  }
</style>

<div class="AppSidenav">
  <NavigationDrawer bind:show={showNav} {right} {persistent} {elevation} class="navigation-drawer">
    <h6 class="p-6 ml-1 pb-2 text-xs text-gray-900">Menu</h6>
    <List items={menu}>
      <span slot="item" let:item class="cursor-pointer">
        <a href={item.to}>
          <ListItem selected={false} {...item} dense navigation />
        </a>
      </span>
    </List>
    <hr />
  </NavigationDrawer>
</div>
