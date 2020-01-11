import { DOCUMENT } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then(m => m.VideoPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(m => m.ArticlePageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CoursePageModule)
  },
  {
    path: 'lecturer-profile',
    loadChildren: () => import('./lecturer-profile/lecturer-profile.module').then(m => m.LecturerProfilePageModule)
  },
  {
    path: 'student-voice',
    loadChildren: () => import('./student-voice/student-voice.module').then(m => m.StudentVoicePageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then(m => m.EventPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
