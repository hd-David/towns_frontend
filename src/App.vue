

<template>
<p>Hello from App.vue</p>
   <img alt="Vue logo" src="./assets/logo.png">
   <div class="container">
<router-view></router-view>
</div>
<nav>
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/create">create</router-link>
                    </li>
                      <li>
                        <router-link to="/search">search</router-link>
                    </li>
                        <li>
                        <router-link to="/update">update</router-link>
                    </li>
                        <li>
                        <router-link to="/delete">delete</router-link>
                    </li>
                 
                </ul>
            </nav>
</template>
<script>


export default {

}
</script>

<style>
#app {
  background-color: aquamarine;
  text-align: center;
}
</style>