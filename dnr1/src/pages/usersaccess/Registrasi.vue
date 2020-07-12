<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr LFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-md q-pb-md">
            <q-card flat class="bg-white text-black q-pl-md q-pr-md q-pt-sm q-pb-md">
              <div class="row">

                <div class="col-md-6 col-xs-12">

                  <div class="row q-pt-md q-pb-md full-height items-center bg-white">
                    <div class="col-md-10 offset-1 col-xs-10">
                      <q-img :ratio="4/3" contain spinner-color="white" placeholder-src="statics/login.png" src="statics/login.png"></q-img>
                    </div>
                  </div>

                </div>

                <div class="col-md-6 col-xs-12 q-pt-md">

                  <div class="q-pa-md">

                    <div class="text-blue-grey-14 text-h4">Registrasi</div>

                    <q-card-section class="text-blue-grey-14">
                    </q-card-section>

                    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                      <q-input filled v-model="form.fullname" label="Nama Lengkap" hint="Masukan Nama Lengkap" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <q-input filled v-model="form.username" label="Username" hint="Masukan Username" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <q-input filled type="password" v-model="form.password" label="Password" hint="Masukan Password" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <q-input filled v-model="form.phone" type="number" label="Nomor Telephone" hint="Masukan Nomor Telephone" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <q-input filled v-model="form.nik" type="number" label="Nomor Induk Kependudukan" hint="Masukan NIK" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <q-input filled v-model="form.address" label="Alamat Lengkap" hint="Masukan Alamat" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <q-input filled v-model="form.blood" label="Golongan Darah" hint="Masukan Golongan Darah" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <q-input filled v-model="form.age" type="number" label="Usia" hint="Masukan Data Usia" lazy-rules :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"/>

                      <!--                      <q-select filled hint="Pilih Golongan Darah" outlined v-model="form.blood" :options="options" label="Golongan Darah" />-->

                      <div class="q-mt-xl">
                        <q-btn label="Registrasi" type="submit" color="primary"/>
                        <q-btn label="Login sekarang !" to="/auth/Login" color="primary" flat class="q-ml-sm"/>
                      </div>

                    </q-form>

                  </div>

                </div>

              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      form: {
        fullname: null,
        username: null,
        password: null,
        nik: null,
        phone: null,
        address: null,
        age: null,
        blood: null
        // options: [
        //   'A', 'B', 'AB', 'O'
        // ]
      },
      accept: false
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/user/registrasi', {
        fullname: this.form.fullname,
        username: this.form.username,
        password: this.form.password,
        nik: this.form.nik,
        phone: this.form.phone,
        address: this.form.address,
        blood: this.form.blood,
        age: this.form.age,
        role: '2'
      })
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('login')
          }
        })
    },
    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>
</style>
