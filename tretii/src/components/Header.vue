<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="index.html">OnePage</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down"><a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav><!-- .nav-menu -->

      <a href="#about" class="get-started-btn scrollto">Get Started</a>

    </div>
  </header><!-- End Header -->
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  #header {
    transition: all 0.5s;
    background: #fff;
    z-index: 997;
    padding: 15px 0;
    border-bottom: 1px solid #e6f2fb;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  #header.header-scrolled {
    border-color: #fff;
    box-shadow: 0px 2px 15px rgba(18, 66, 101, 0.08);
  }

  #header .logo {
    align-self: center;
    font-size: 28px;
    margin: 0;
    padding: 0 180px 0 180px;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 0.5px;
    font-family: "Poppins", sans-serif;
  }

  #header .logo a {
    color: #16507b;
    text-decoration: none;
  }

  #header .logo img {
    max-height: 40px;
  }

  @media (max-width: 992px) {
    #header .logo {
      font-size: 28px;
    }
  }

  /*--------------------------------------------------------------
  # Navigation Menu
  --------------------------------------------------------------*/
  /* Desktop Navigation */
  .nav-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-menu > ul {
    display: flex;
  }

  .nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
    padding: 14px 0 14px 28px;
  }

  .nav-menu a {
    display: block;
    position: relative;
    color: #124265;
    transition: 0.3s;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
  }

  .nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
    color: #2487ce;
  }

  .nav-menu .drop-down ul {
    display: block;
    position: absolute;
    left: 15px;
    top: calc(100% + 30px);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 0px 20px rgba(18, 66, 101, 0.1);
    transition: 0.3s;
    border-radius: 5px;
  }

  .nav-menu .drop-down:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .nav-menu .drop-down li {
    min-width: 180px;
    position: relative;
  }

  .nav-menu .drop-down ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #124265;
  }

  .nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
    color: #2487ce;
  }

  .nav-menu .drop-down > a:after {
    content: "\ea99";
    font-family: IcoFont;
    padding-left: 5px;
  }

  .nav-menu .drop-down .drop-down ul {
    top: 0;
    left: calc(100% - 30px);
  }

  .nav-menu .drop-down .drop-down:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
  }

  .nav-menu .drop-down .drop-down > a {
    padding-right: 35px;
  }

  .nav-menu .drop-down .drop-down > a:after {
    content: "\eaa0";
    font-family: IcoFont;
    position: absolute;
    right: 15px;
  }

  @media (max-width: 1366px) {
    .nav-menu .drop-down .drop-down ul {
      left: -90%;
    }
    .nav-menu .drop-down .drop-down:hover > ul {
      left: -100%;
    }
    .nav-menu .drop-down .drop-down > a:after {
      content: "\ea9d";
    }
  }

  /* Get Startet Button */
  .get-started-btn {
    margin-left: 25px;
    background: #2487ce;
    color: #fff;
    border-radius: 5px;
    margin-right: 15%;
    padding: 12px 30px 12px 30px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    text-decoration: none;
    align-self: center;
  }

  .get-started-btn:hover {
    background: #2079b8;
    color: #fff;
  }

  @media (max-width: 768px) {
    .get-started-btn {
      margin: 0 48px 0 0;
      padding: 5px 18px 6px 18px;
      border-radius: 3px;
    }
  }

  /* Mobile Navigation */
  .mobile-nav-toggle {
    position: fixed;
    right: 15px;
    top: 18px;
    z-index: 9998;
    border: 0;
    background: none;
    font-size: 24px;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
  }

  .mobile-nav-toggle i {
    color: #124265;
  }

  .mobile-nav {
    position: fixed;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    z-index: 9999;
    overflow-y: auto;
    background: #fff;
    transition: ease-in-out 0.2s;
    opacity: 0;
    visibility: hidden;
    border-radius: 10px;
    padding: 10px 0;
  }

  .mobile-nav * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile-nav a {
    display: block;
    position: relative;
    color: #124265;
    padding: 10px 20px;
    font-weight: 500;
    outline: none;
  }

  .mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {
    color: #2487ce;
    text-decoration: none;
  }

  .mobile-nav .drop-down > a:after {
    content: "\ea99";
    font-family: IcoFont;
    padding-left: 10px;
    position: absolute;
    right: 15px;
  }

  .mobile-nav .active.drop-down > a:after {
    content: "\eaa1";
  }

  .mobile-nav .drop-down > a {
    padding-right: 35px;
  }

  .mobile-nav .drop-down ul {
    display: none;
    overflow: hidden;
  }

  .mobile-nav .drop-down li {
    padding-left: 20px;
  }

  .mobile-nav-overly {
    width: 100%;
    height: 100%;
    z-index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(10, 38, 58, 0.6);
    overflow: hidden;
    display: none;
    transition: ease-in-out 0.2s;
  }

  .mobile-nav-active {
    overflow: hidden;
  }

  .mobile-nav-active .mobile-nav {
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
  }
</style>
