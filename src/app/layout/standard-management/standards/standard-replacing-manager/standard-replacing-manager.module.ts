import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { StandardReplacingManagerComponent } from './standard-replacing-manager.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule, MatButtonModule, MatTooltipModule, MatIconModule
  ],
  declarations: [StandardReplacingManagerComponent],
  exports: [StandardReplacingManagerComponent]
})
export class StandardReplacingManagerModule { }
