const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') ,name: 'inicio',}
    ]
  },
    {
    path: '/cursos',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Cursos.vue') ,name: 'cursos',}
    ]
  },
  {
    path: '/noticias',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Noticias.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/registro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Registro.vue') }
    ]
  },
  {
    path: '/cambiar_configuracion',
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      { path: '', component: () => import('pages/Root.vue') },
    ],
    //meta: { requiresAuth: true }, // Protegida
  },
  {
    path: '/agregar_cursos',
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      { path: '', component: () => import('pages/agregar_cursos.vue') },
    ],
    //meta: { requiresAuth: true }, // Protegida
  },
  {
    path: '/olvido',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Olvido.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
