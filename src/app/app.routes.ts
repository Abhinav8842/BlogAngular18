import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ManageBlogsComponent } from './components/admin/manage-blogs/manage-blogs.component';
import { BlogFormComponent } from './components/admin/blog-form/blog-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'admin/blogs',
    component: ManageBlogsComponent,
  },
  {
    path: 'admin/blog/create',
    component: BlogFormComponent,
  },
  {
    path: 'admin/blog/update/:id',
    component: BlogFormComponent,
  },
];
