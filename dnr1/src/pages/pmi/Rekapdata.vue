<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <q-table title="Treats" :data="data" :columns="columns" row-key="name" :filter="filter" :loading="loading" :pagination.sync="pagination" class="q-px-lg q-py-lg">

        <template v-slot:top>
          <div class="text-h6">Data Penyebaran Pendonor</div>
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
      filter: '',
      rowCount: 2,
      pagination: {
        rowsPerPage: 10
      },
      columns: [
        {
          name: 'nik',
          required: true,
          label: 'NIK',
          align: 'left',
          field: row => row.nik,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'fullname', align: 'center', label: 'Nama Lengkap', field: 'fullname', sortable: true },
        { name: 'age', label: 'Usia', field: 'age', sortable: true },
        { name: 'phone', label: 'Telephone', field: 'phone' },
        { name: 'address', label: 'Alamat Lengkap', field: 'address' },
        { name: 'blood', label: 'Golongan', field: 'blood' }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    lihatData () {
      this.$axios.get('/user/show')
        .then((res) => {
          this.data = res.data.data
        })
    },
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  },

  mounted () {
    this.lihatData()
  }
}
</script>
