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
                <q-input type="number" filled v-model="A" label="Golongan A" hint="Golongan darah A" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
                <q-input type="number" filled v-model="B" label="Golongan B" hint="Golongan darah B" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
                <q-input type="number" filled v-model="AB" label="Golongan AB" hint="Golongan darah AB" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
                <q-input type="number" filled v-model="O" label="Golongan O" hint="Golongan darah O" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>
                <div>
                  <q-btn label="Submit" type="submit" color="primary" to="me"/>
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
      A: 100,
      B: 150,
      AB: 50,
      O: 200,
      accept: false
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },
    onReset () {
      this.A = null
      this.B = null
      this.AB = null
      this.O = null
      this.accept = false
    }
  }
}
</script>
