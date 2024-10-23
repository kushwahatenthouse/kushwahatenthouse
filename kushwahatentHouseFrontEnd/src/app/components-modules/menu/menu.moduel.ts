import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu.component";

@NgModule({
    declarations:[MenuComponent],
    imports:[
        CommonModule
    ],
    exports:[MenuComponent],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule{
    
}