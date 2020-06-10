import Vue from 'vue'
import Router from 'vue-router'
import Header from "../components/Header";
import HeroSelection from "../components/HeroSelection";
import Main from "../components/Main/Main";
import AboutSection from "../components/Main/AboutSection";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Header',
      component: Header
    } ,
    {
      path: '',
      name: 'HeroSelection',
      component: HeroSelection
    },

    {
      path: '/',
      name: 'Main',
      component: Main
    } ,
    {
      path: '',
      name : 'AboutSection',
      component: AboutSection
    }
  ]
})
