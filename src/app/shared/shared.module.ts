import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule(
    {
        imports:[
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            MaterialModule
        ],
        exports: [
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            MaterialModule
        ]
    }
)
export class SharedModule {}