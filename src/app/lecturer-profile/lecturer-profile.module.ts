import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LecturerProfilePage } from './lecturer-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LecturerProfilePage
      }
    ])
  ],
  declarations: [LecturerProfilePage]
})
export class LecturerProfilePageModule {}
