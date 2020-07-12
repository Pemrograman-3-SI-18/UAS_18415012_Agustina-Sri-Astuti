<template>
  <q-page class="flex-center q-mx-lg q-mt-lg">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-card>

          <div>
            <q-splitter v-model="splitterModel" style="height: auto">
              <template v-slot:before class="q-my-xl">
                <q-tabs v-model="tab" vertical class="text-teal q-my-xl">
                  <q-tab name="data1" icon="sentiment_satisfied_alt" label="DATA DIRI" />
                  <q-tab name="data2" icon="developer_board" label="KEGIATAN" />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up" class="q-my-xl">
                  <q-tab-panel name="data1">
                    <div class="row q-pa-md">
                      <div class="text-h4 col-8">{{ dataUser.fullname }}</div>
                      <div class="text-h4 col-3">
                        <q-btn outline color="green-13" icon="sort" class="q-ml-md" label="Sunting" push v-close-popup to="/pendonor/edit"/>
                      </div>
                    </div>
                    <div class="q-pa-md">

                      <div class="row q-mb-md items-center">
                        <div class="col-1 text-grey-6 q-gutter-md" style="font-size: 1.5em">
                          <q-icon name="contacts" />
                        </div>
                        <div class="col">
                          <div class="items-center text-weight-bolder text-h6">Nomor Telephone</div>
                          <div class="items-center">{{ dataUser.phone }}</div>
                        </div>
                      </div>

                      <div class="row q-mb-md items-center">
                        <div class="col-1 text-grey-6 q-gutter-md" style="font-size: 1.5em">
                          <q-icon name="my_location" />
                        </div>
                        <div class="col">
                          <div class="items-center text-weight-bolder text-h6">Alamat Lengkap</div>
                          <div class="items-center">{{ dataUser.address }}</div>
                        </div>
                      </div>

                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="data2">
                    <div class="row q-pa-md">
                      <div class="text-h4 col-8">Record Data Saya</div>
                      <div class="text-h4 col-4">
                        <q-btn outline color="green-13" icon="post_add" class="q-ml-xl" label="Kegiatan" push v-close-popup to="/pendonor/add"/>
                      </div>
                    </div>
                    <div class="q-pa-md">
                      <q-table grid :data="data" :columns="columns" row-key="name" :pagination.sync="pagination" :filter="filter" hide-header>
                      </q-table>
                    </div>
                  </q-tab-panel>

                </q-tab-panels>
              </template>

            </q-splitter>
          </div>

        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      slide: 'style',
      dataUser: this.$q.localStorage.getItem('datauser'),
      tab: 'data1',
      splitterModel: 20,
      pagination: {
        rowsPerPage: 8
      },
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?',
      filter: '',
      columns: [
        { name: 'desc', required: true, label: 'Tanggal', align: 'left', field: row => row.date, sortable: true },
        { name: 'kegiatan', align: 'center', label: 'Kegiatan', field: 'kegiatan', sortable: true },
        { name: 'address', label: 'Lokasi', field: 'address', sortable: true }
      ],
      data: [
        { date: '01 Januari 2020', kegiatan: 'Donor Darah', address: 'Rumah Sakit Boromeus' },
        { date: '25 Januari 2020', kegiatan: 'Kunjungan Rumah Sakit', address: 'Rumah Sakit Kota bandung' },
        { date: '01 April 2020', kegiatan: 'Donor Darah', address: 'PMI Rajawali' },
        { date: '03 April 2020', kegiatan: 'Donasi Kegiatan Donor Darah', address: 'Jl. Arih rahman hakim' },
        { date: '01 Juli 2020', kegiatan: 'Donor Darah', address: 'Rumah Sakit Advent' },
        { date: '15 Juli 2020', kegiatan: 'Membantu Kegiatan PMI', address: 'Desa Mojokerto' },
        { date: '01 Oktober 2020', kegiatan: 'Donor Darah', address: 'Rumah Sakit Katolik' },
        { date: '08 Oktober 2020', kegiatan: 'Kunjungan PMI', address: 'Desa Rejosari' },
        { date: '01 Desember 2020', kegiatan: 'Donor Darah', address: 'PMI Raden Intan' },
        { date: '12 Desember 2020', kegiatan: 'Seminar Kesehatan', address: 'Kampus Universitas Indonesia' }
      ]
    }
  },

  methods: {
  },

  mounted () {
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 250px
</style>
