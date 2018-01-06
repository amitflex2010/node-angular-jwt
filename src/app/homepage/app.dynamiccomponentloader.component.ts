import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector,
    ViewContainerRef
  } from '@angular/core';
  import { DynamicComponent } from './app.dynamic.component';

  @Injectable()
  export class DynamicComponentLoader {

    private rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver ) {}

    setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef;
    }

    addDynamicComponent(response: String) {
        const factory = this.factoryResolver
                            .resolveComponentFactory(DynamicComponent);
        const component = factory
          .create(this.rootViewContainer.parentInjector);
          component.instance.data = response;
        this.rootViewContainer.insert(component.hostView);
        console.log(component.instance.data);
      }
    }
