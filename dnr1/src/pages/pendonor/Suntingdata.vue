<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>

          <div class="text-h5 q-pa-md">
            Sunting Data Diri
          </div>

          <div class="row q-pa-md">
            <div class="col-4">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                <q-input filled v-model="form.fullname" label="Nama Lengkap" hint="Masukan nama lengkap   anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="form.username" label="Username" hint="Masukan username anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="form.password" label="Password" type="password" hint="Masukan password anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="form.phone" label="Nomor Telephone" hint="Masukan nomor telephone anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input v-model="form.address" filled type="textarea" label="Alamat Lengkap"/>

                <div>
                  <q-btn label="Submit" type="submit" color="primary" />
                  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                </div>

              </q-form>
            </div>
            <div class="col-7">

            </div>
          </div>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
// const data =
export default {
  data () {
    return {
      form: {
        address: null,
        fullname: null,
        username: null,
        password: null,
        phone: null,
        id: null
      },
      accept: false
    }
  },
  created () {
    var data = this.$q.localStorage.getItem('datauser')
    this.form.address = data.address
    this.form.fullname = data.fullname
    this.form.username = data.username
    this.form.password = data.password
    this.form.phone = data.phone
    this.form.id = data._id
    // console.log(this.form.id)
  },

  methods: {
    onSubmit () {
      console.log(this.form.id)
      this.$axios.post('/user/update/' + this.form.id, this.form)
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
            this.$router.push('/pendonor')
          }
        })
    },

    onReset () {
      this.kegiatan = null
      this.address = ''
      this.date = '0000/00/00'
      this.accept = false
    }
  }
}
</script>
