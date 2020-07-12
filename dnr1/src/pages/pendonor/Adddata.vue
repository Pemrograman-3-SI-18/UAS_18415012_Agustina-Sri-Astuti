<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>

          <div class="text-h5 q-pa-md">
            Tambah Kegiatan
          </div>

          <div class="row q-pa-md">
            <div class="col-4">
              <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                <q-input filled v-model="date" mask="date" label="Tanggal Kegiatan" hint="Masukan tanggal kegiatan berlangsung" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                        <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>

                <q-input filled v-model="kegiatan" label="Kegiatan" hint="Kegiatan yang anda lakukan" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']"/>

                <q-input v-model="address" filled type="textarea" label="Lokasi kegiatan"/>

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
      kegiatan: null,
      address: '',
      date: '0000/00/00',

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
      this.kegiatan = null
      this.address = ''
      this.date = '0000/00/00'
      this.accept = false
    }
  }
}
</script>
