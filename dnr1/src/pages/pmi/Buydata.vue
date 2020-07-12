<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>

          <div class="text-h5 q-pa-md">
            Pembelian Darah
          </div>

          <div class="row q-pa-md">
            <div class="col-4">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

                <q-input filled v-model="form.fullnameBuyer" label="Nama Lengkap" hint="Masukan nama anda" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled disable v-model="form.type" label="Jenis Darah" hint="Jenis darah yang di beli" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="form.doFor" label="Penggunaan" hint="ex : operasi, persalinan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled v-model="form.qtyBuyer" label="Jumlah Beli" hint="Banyaknya pembelian" type="number" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something', val => val<form.stok || 'Melebihi stok']"/>

                <q-input filled v-model="form.price" label="Harga Satuan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input filled disable v-model="sumData" label="Total harga"  lazy-rules />

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
        fullnameBuyer: null,
        type: null,
        doFor: null,
        qtyBuyer: null,
        price: null,
        sum: null,
        stok: 0,
        id: null
      },

      accept: false
    }
  },

  created () {
    this.addDarah()
  },

  methods: {
    onSubmit () {
      this.form.sum = this.sumData
      this.$axios.post('/buy/add', this.form)
        .then((res) => {
          console.log(res.data)
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
          this.form.type = this.data.name
          this.form.stok = this.data.qty
          this.form.id = this.data._id
        })
    },

    onReset () {
      this.accept = false
    }
  },
  computed: {
    sumData () {
      return this.form.price * this.form.qtyBuyer
    }
  }
}
</script>
