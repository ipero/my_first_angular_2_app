import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2RestAppRoutingModule } from './app-routing.module';

import { ItemsService, WidgetsService, ReviewsService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { FeaturedItemComponent } from './items/featured-item/featured-item.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { FeaturedWidgetComponent } from './widgets/featured-widget/featured-widget.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    FeaturedItemComponent,
    WidgetsComponent,
    FeaturedWidgetComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2RestAppRoutingModule
  ],
  providers: [ItemsService, WidgetsService, ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
