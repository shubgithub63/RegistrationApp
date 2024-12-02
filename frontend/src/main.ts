import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';//new1
import { provideHttpClient, withFetch } from '@angular/common/http';//new1
import { AppComponent } from './app/app.component';//new1
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {//new1
  providers: [
    provideHttpClient(withFetch())
  ]
}).catch(err => console.error(err));//new1
