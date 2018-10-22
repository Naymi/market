<template lang="pug">
  div
    v-container(fluid,fill-height)
      v-layout(align-center, justify-center, center)
        v-flex(xs12,sm8,md6)
          v-card.elevation-12
            v-toolbar(dark, color='primary')
              v-toolbar-title Вход
            v-card-text
              v-alert(:value='error',type='warning',v-text='error') 
              v-form
                v-text-field(prepend-icon='person',name='email',label='email',type='text', required,v-model='email')
                v-text-field(id='password',prepend-icon='lock',name='password',label='password',type='password',required, v-model='password')
            v-card-actions
              v-spacer
              v-btn(color='primary', @click.prevent='signup',:disabled='processing') Войти

</template>

<script>

export default {
  methods:{
    signup(){
      this.$store.dispatch('SIGNUP', {
        email: this.email,
        password: this.password,
      })
      // console.log(this.$store.user.isAuthentificated)
    }
  },
  computed:{
    error(){
      return this.$store.getters.getError
    },
    processing(){
      return this.$store.getters.getProcessing
    },
    isUserAuthentificated(){
      return this.$store.getters.isUserAuthentificated
    }
  },
  watch:{
    isUserAuthentificated(val){
      if (val===true) {
        this.$router.push("/")
      }
    }
  },
  data(){
    return{
      email: '',
      password: '',
    }
  }
}

</script>
