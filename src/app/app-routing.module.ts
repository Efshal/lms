import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TagsComponent } from './components/tags/tags.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () =>
  //     import('./folder/folder.module').then((m) => m.FolderPageModule),
  // },
  {
    path: 'admin-portal',
    loadChildren: () =>
      import('./admin-portal/admin-portal.module').then(
        (m) => m.AdminPortalPageModule
      ),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path:'courses/tags',
    component:TagsComponent
  },
  {
    path: 'courses/course-overview/:courseName',
    loadChildren: () =>
      import('../app/courses/course-overview/course-overview.module').then(
        (m) => m.CourseOverviewPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
