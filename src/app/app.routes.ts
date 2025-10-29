import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    title: 'Angular',
    component: Home,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: Contact,
  },
  {
    path: 'about',
    title: 'About',
    component: About,
  },
];
