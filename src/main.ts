import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { persistState } from '@datorama/akita';

const akitaPersist = persistState({
  key: 'rm-app',
  include: ['favorite-characters']
});

if ((import.meta as any).hot) {
  (import.meta as any).hot.dispose(() => akitaPersist.destroy());
}

bootstrapApplication(App, appConfig).catch(err => console.error(err));
