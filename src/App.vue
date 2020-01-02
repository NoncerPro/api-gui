<template>
  <div id="app" class="main-wrapper">
    <!-- navigation -->
    <nav class="navbar is-fixed-top is-white" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img :src="logo" class="logo" />
            <h1 class="is-size-4 has-text-weight-bold has-super">
              NoncerPro
              <span class="superscript">API</span>
            </h1>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <div class="navbar-item">
              <!-- <img src="images/nimiq.svg" alt="Nimiq" height="60" /> -->
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view />

    <div class="footer">
        <div class="container">
            <hr>
            <div class="content has-text-centered">
                <p>
                    <a target="_blank" href="https://github.com/NoncerPro/noncerpro-nimiq-cuda">NVIDIA Miner Docs </a> | 
                    <a target="_blank" href="https://github.com/NoncerPro/noncerpro-nimiq-opencl">AMD Miner Docs</a> | 
                    <a target="_blank" href="https://discord.gg/DWDnJBy">Discord Channel</a>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.svg"
export default {
  data(){
    return{
      logo: logo
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/sass/app.sass";
.main-wrapper{
  padding-top:7rem;
}
</style>
