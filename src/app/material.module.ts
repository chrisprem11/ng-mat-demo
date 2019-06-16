import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule, MatNativeDateModule,MatSidenavModule,
    MatToolbarModule,MatListModule, MatTabsModule,MatCardModule, MatSelectModule,
    MatProgressSpinnerModule,MatDialogModule, MatTableModule,MatSortModule,
    MatPaginatorModule
} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,
        MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,
        MatProgressSpinnerModule,MatDialogModule,
        MatTableModule,MatSortModule,MatPaginatorModule
    
    ],
    exports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,
        MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,
        MatProgressSpinnerModule,MatDialogModule,
        MatTableModule,MatSortModule,MatPaginatorModule
    
    ]
})
export class MaterialModule {}