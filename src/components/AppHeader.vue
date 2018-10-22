<template lang="pug">
div
  v-navigation-drawer(absolute,temporary,v-model='drawer').hidden-md-and-up
    v-list
      v-list-tile(v-for='itm in menuItems')
        v-list-tile-action
          v-icon(left, v-html='itm.icon')
        v-list-tile-content
          v-list-tile-tittle
            | {{itm.tittle}}
  v-toolbar(app, dark,class='primary')
    v-toolbar-side-icon(@click.stop='drawer=!drawer').hidden-md-and-up
    router-link(to='/', tag='span', style='cursor:pointer')
      v-toolbar-tittle Welcome
    v-spacer
    v-toolbar-items.hidden-sm-and-down
      v-btn(flat, v-for='itm in menuItems',:to='itm.route')
        v-icon(left, v-html='itm.icon')
        | {{itm.tittle}}
</template>

<script>
function menuitem(icon,tittle,route) {
  return{
    icon,
    tittle,
    route
  }
}
export default {
  data(){
    return{
      drawer: false
    }
  },
  computed:{
    menuItems(){
      return [
        menuitem('account_circle','Профиль','/profile'),
        menuitem('home','Жилые комплексы','/SHK'),
        menuitem('account_box','Квартиры','/appartaments'),
        menuitem('insert_chart','Статистика','/dashboard'),
        menuitem('input','Войти','/login'),
        menuitem('how_to_reg','Зарегистрироваться','/signin'),
      ]
    }
  }
}
</script>

