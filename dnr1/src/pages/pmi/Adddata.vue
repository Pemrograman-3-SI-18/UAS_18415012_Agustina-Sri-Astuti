<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>

          <div class="text-h5 q-pa-md">
            Sunting Stok Darah
          </div>

          <div class="row q-pa-md">
            <div class="col-4">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                <q-input type="text" filled v-model="form.name" label="Golongan darah" hint="Golongan darah" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input type="text" filled v-model="form.qty" label="Stok" hint="Stok" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

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
export default {
  data () {
    return {
      form: {
        name: null,
        qty: null
      },

      accept: false
    }
  },

  created () {
    this.addDarah()
  },

  methods: {
    // addDarah () {
    //   console.log(this.$route.params.id)
    //   this.stok = this.$route.params.id
    // },
    onSubmit () {
      // const formData = new FormData()
      // formData.append('golonganA', this.focus().golonganA)
      // formData.append('golonganB', this.focus().golonganB)
      // formData.append('golonganAB', this.focus().golonganAB)
      // formData.append('golonganO', this.focus().golonganO)
      this.$axios.post('/darah/update/' + this.id, this.form)
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
            this.$router.push('/')
          }
        })
    },
    addDarah () {
      this.$axios.get('/darah/add/' + this.$route.params.id)
        .then((res) => {
          this.data = res.data.data
          this.form.name = this.data.name
          this.form.qty = this.data.qty
          this.id = this.data._id
        })
    },

    // mounted () {
    //   this.addDarah()
    // },

    onReset () {
      this.name = null
      this.qty = null
      this.accept = false
    }
  }
}
</script>
