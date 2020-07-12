<template>
  <q-page class="flex-center q-mx-md q-mt-lg">
    <div class="q-pa-md">
      <div class="q-gutter-md">

        <q-card>

          <div class="row q-pa-md">
            <div class="text-h5 text-weight-bold col-10">Data Stok Persediaan Darah</div>
          </div>

          <div class="q-px-md q-py-md fit row wrap justify-center q-gutter-md">

            <div class="col fit row wrap justify-center" v-for="(darah, i) in data" :key="i">
              <q-card class="my-card">
                <div class="text-h1 text-weight-bolder q-mx-xl q-my-xl col row wrap justify-center">{{ darah.name }}</div>
                <q-separator />
                <q-card-actions align="right">
                  <div class="text-weight-bold col q-pl-sm">STOK {{ darah.qty }}</div>
                  <q-btn outline class="text-caption" style="color: orangered;" icon="opacity" label="BELI DARAH" :to="{name: 'buy', params: { id: darah._id }}"/>
                  <q-btn flat class="text-caption" style="color: cornflowerblue;" icon="add" label="TAMBAH STOK" @click="addDarah(darah._id)"/>
                </q-card-actions>
              </q-card>
            </div>

          </div>

        </q-card>
      </div>

    </div>

    <div class="q-pa-md">
      <q-table title="Treats" :data="dataBuyer" :columns="columns" row-key="name" :filter="filter" :loading="loading" :pagination.sync="pagination" class="q-px-lg q-py-lg">

        <template v-slot:top>
          <div class="text-h6">Data Pembelian</div>
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter" style="background: #f9f9f9" class="q-px-sm" label="cari data...">
            <template v-slot:prepend>
              <q-icon name="search"/>
            </template>
          </q-input>
        </template>

      </q-table>
    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      dataUser: this.$q.localStorage.getItem('datauser'),
      filter: '',
      rowCount: 2,
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        { name: 'fullnameBuyer', required: true, label: 'Nama Lengkap', align: 'left', field: row => row.fullnameBuyer, format: val => `${val}`, sortable: true },
        { name: 'type', label: 'Golongan', field: 'type' },
        { name: 'doFor', label: 'Kebutuhan', field: 'doFor' },
        { name: 'qtyBuyer', label: 'Jumlah (kantong)', field: 'qtyBuyer' },
        { name: 'sum', label: 'Total Harga', field: 'sum' }
      ],
      data: [],
      dataBuyer: []
    }
  },
  methods: {
    lihatDataDarah () {
      this.$axios.get('/darah/show')
        .then((res) => {
          this.data = res.data.data
        })
    },
    buyDarah (id) {
      this.$router.push('/buy/' + id)
    },
    addDarah (id) {
      this.$router.push('/add/' + id)
    },
    lihatDataBuyer () {
      this.$axios.get('/buy/show')
        .then((res) => {
          this.dataBuyer = res.data.data
        })
    }
  },
  mounted () {
    this.lihatDataDarah()
    this.lihatDataBuyer()
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
</style>
