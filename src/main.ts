import { bootstrapApplication } from '@angular/platform-browser';
import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
// import { LoggingService } from './app/logging.service';
import { TasksService } from './app/tasks/tasks.service';

// bootstrapApplication(AppComponent, {
//     providers: [TasksService]
// }).catch((err) => console.error(err));

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// bootstrapApplication(AppComponent, {
//     providers: [LoggingService]
// }).catch((err) => console.error(err));

// export const TasksServiceToken = new InjectionToken('tasks-service-token');
export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

bootstrapApplication(AppComponent, {
    // providers: [TasksService]
    providers: [{ provide: TasksServiceToken, useClass: TasksService }]
}).catch((err) => console.error(err));