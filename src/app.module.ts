import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {AppComponent}   from './app';
import {HelloComponent} from './hello';
import {DietComponent} from './diet';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, HelloComponent, DietComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
