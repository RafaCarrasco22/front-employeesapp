import React from 'react';
import PublicIcon from '@material-ui/icons/Public';
import LanguageIcon from '@material-ui/icons/Language';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/Business';

export const SidebarData = [
  {
    title: 'Regiones',
    path: '/',
    icon: <PublicIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Países',
    path: '/persons',
    icon: <LanguageIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Ciudades',
    path: '/products',
    icon: <LocationOnIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Departamentos',
    path: '/team',
    icon: <BusinessIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Empleados',
    path: '/messages',
    icon: <SupervisorAccountIcon />,
    cName: 'nav-text'
  }
];