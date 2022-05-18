<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item"><router-link :to="{name: 'Home'}">Home</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'Boxes'}">Boxes</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'About'}">About Us</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'Contact'}">Contact</router-link></li>
        <li class="nav-item"><router-link :to="{name: 'Admin'}">Admin</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    this is footer
  </footer>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  border: 1px solid green;
  width: 80%;
  margin: 0 auto;
}

main {
  margin: 0 auto;
  width: 80%;
  border: 1px solid red;
}

footer {
  border: 1px solid blue;
}

p {
  color: green;
}

ul {
  padding: 3px;
  display: flex;
}

.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 18px;
  border-right: 1px solid grey
}

</style>
