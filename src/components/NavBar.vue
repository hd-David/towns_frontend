<template>

            <div>
  <b-navbar toggleable="sm" type="light" variant="light" class="navbar-horizontal">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand>Darwinist</b-navbar-brand>
    <br>
    <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-text class="navbar-items">
            <router-link to="/">Home</router-link>              
            </b-nav-text>
            <router-link to="/create">create</router-link>
            <b-nav-text class="navbar-items">
            <router-link to="/search">search</router-link>
            </b-nav-text>
            <b-nav-text class="navbar-items">      
            <router-link to="/update">update</router-link>
            </b-nav-text>
            <b-nav-text class="navbar-items">
            <router-link to="/delete">delete</router-link>
            </b-nav-text>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style>
.navbar-items {
margin-left : 1em;
margin-right : 1em;
}
</style>
