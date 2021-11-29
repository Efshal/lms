import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsComponent } from '../components/tags/tags.component';
import { ProUsersGuard } from '../shared/pro-users.guard';
import { CoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage,
  },
  {
    path: 'course-overview',
    canActivate:[ProUsersGuard],
    loadChildren: () =>
      import('./course-overview/course-overview.module').then(
        (m) => m.CourseOverviewPageModule
      ),
  },
  {
    path: 'tags',
    component: TagsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
