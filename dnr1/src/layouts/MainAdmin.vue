<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-white text-blue-grey-6">
      <q-toolbar>
        <q-btn dense flat round icon="dashboard" @click="left = !left"/>
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">

          <q-menu
            transition-show="jump-down"
            transition-hide="jump-up">

            <div class="row no-wrap q-pa-xs q-mx-md">

              <div class="column items-center">

                <q-list style="min-width: 130px">
                  <q-item-section class="text-subtitle2 q-mt-md text-bold full-width">{{ dataUser.fullname }}</q-item-section>
                  <q-item-section class="text-caption q-mb-md full-width">pmi@mail.com</q-item-section>

                  <q-separator/>

                  <q-item clickable class="q-mt-md">
                    <q-btn outline color="red-13" label="keluar" class="full-width" push v-close-popup @click="quit" />
                  </q-item>
                </q-list>

              </div>
            </div>
          </q-menu>

        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" :breakpoint="500" show-if-above content-class="bg-white text-teal-10">
      <q-scroll-area class="fit">

        <q-list>

          <q-item style="height: 50px;" class="bg-white text-green-12 text-bold text-h5">
            <q-item-section avatar>
              <q-img :ratio="4/3" sizes="md" contain spinner-color="white" placeholder-src="statics/128.png"
                     src="statics/128.png"></q-img>
            </q-item-section>
            <q-item-section>
              Hemocare.
            </q-item-section>
          </q-item>

          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <q-img :ratio="4/3" contain spinner-color="white" placeholder-src="statics/dokter.png"
                       src="statics/dokter.png"></q-img>
              </q-avatar>
              <div class="text-subtitle1 text-bold">{{ dataUser.fullname }}</div>
              <div class="text-caption">mail@pmi.com</div>
            </div>
          </q-item>

          <q-item-label header class="text-grey-8">
            Master Data
          </q-item-label>

          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="bubble_chart"/>
            </q-item-section>
            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/rekap">
            <q-item-section avatar>
              <q-icon name="sentiment_satisfied_alt"/>
            </q-item-section>
            <q-item-section>
              Data Penyebaran
            </q-item-section>
          </q-item>

        </q-list>

      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MainAdmin',
  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    quit () {
      this.$q.localStorage.clear()
      this.$router.push('auth/login')
    }
  }
}

</script>
