import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule, MatNativeDateModule,MatSidenavModule,
    MatToolbarModule,MatListModule, MatTabsModule,MatCardModule, MatSelectModule,
    MatProgressSpinnerModule,MatDialogModule, MatTableModule,MatSortModule,
    MatPaginatorModule, MatSnackBarModule
} from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,
        MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,
        MatProgressSpinnerModule,MatDialogModule,
        MatTableModule,MatSortModule,MatPaginatorModule,MatSnackBarModule
    
    ],
    exports: [MatButtonModule, MatCheckboxModule,MatIconModule,MatFormFieldModule,
        MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSidenavModule,
        MatToolbarModule,MatListModule,MatTabsModule,MatCardModule,MatSelectModule,
        MatProgressSpinnerModule,MatDialogModule,
        MatTableModule,MatSortModule,MatPaginatorModule,MatSnackBarModule
    
    ]
})
export class MaterialModule {}