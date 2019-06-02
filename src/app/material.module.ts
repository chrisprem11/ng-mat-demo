import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule, MatNativeDateModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule],
    exports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule]
})
export class MaterialModule {}