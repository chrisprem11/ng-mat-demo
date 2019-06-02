import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule, MatNativeDateModule,MatSidenavModule,
    MatToolbarModule,MatListModule, MatTabsModule,MatCardModule, MatSelectModule,
    MatProgressSpinnerModule,MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,
        MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,
        MatProgressSpinnerModule,MatDialogModule
    
    ],
    exports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,
        MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,
        MatProgressSpinnerModule,MatDialogModule
    
    ]
})
export class MaterialModule {}