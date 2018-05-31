import React from 'react'
import { Redirect } from 'react-router'

import Home from '../Home/Home'
// import Room from '../Room/Room'
import Entrypoint from '../Entrypoint/Entrypoint'

export const routerConfig = [
  { component: Entrypoint,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      { path: '/rooms',
        exact: true,
        component: () => <Redirect to="/" />,
      },
      // { path: '/rooms/:rooms',
      //   component: Room,
      // },
      { path: '*',
        component: Home,
      },
    ],
  },
]
