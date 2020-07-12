
const routes = [
  {
    path: '/pendonor',
    component: () => import('layouts/MainUser.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/pendonor/Dashboard.vue') },
      { path: 'me', component: () => import('pages/pendonor/Dashboard.vue') },
      { path: 'rekap', component: () => import('pages/pendonor/Rekapdata.vue') },
      { path: 'add', component: () => import('pages/pendonor/Adddata.vue') },
      { path: 'edit', props: false, name: 'edit', component: () => import('pages/pendonor/Suntingdata.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainAdmin.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/pmi/Dashboard.vue') },
      { path: 'me', component: () => import('pages/pmi/Dashboard.vue') },
      { path: 'rekap', component: () => import('pages/pmi/Rekapdata.vue') },
      { path: 'buy', props: false, name: 'buy', component: () => import('pages/pmi/Buydata.vue') },
      { path: 'add/:id', props: false, name: 'add', component: () => import('pages/pmi/Adddata.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AccessUser'),
    children: [
      { path: '', component: () => import('pages/usersaccess/Login.vue') },
      { path: 'auth/login', component: () => import('pages/usersaccess/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/usersaccess/Registrasi.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
