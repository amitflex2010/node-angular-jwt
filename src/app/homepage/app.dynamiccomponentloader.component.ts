import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector,
    ViewContainerRef
  } from '@angular/core';
  import { DynamicComponent } from './app.dynamic.component';
  import { IBannerPost} from './banner/banner.post.interface';
  import { PostItem } from './banner/banner.post-item';

  import { TechnologyComponent } from './banner/banner.technology.component';
  import { ArticleComponent } from './banner/banner.article.component';

  @Injectable()
  export class DynamicComponentLoader {

    private rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver ) {}

    setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef;
    }

    addDynamicComponent(response: any) {
        const factory = this.factoryResolver
                            .resolveComponentFactory(DynamicComponent);
        const component = factory
          .create(this.rootViewContainer.parentInjector);
          component.instance.data = response;
        this.rootViewContainer.insert(component.hostView);
      }

      loadComponent(viewContainerRef: ViewContainerRef, postItem: PostItem) {
        const componentFactory = this.factoryResolver
                              .resolveComponentFactory(postItem.component);
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        const myPost: IBannerPost = <IBannerPost>componentRef.instance;
        myPost.bannerpost = postItem.data;
      }
      getAllPosts() {
        return [
          new PostItem(TechnologyComponent, {name: 'Angular 2',
              description: 'Angular is a platform that makes it easy to build applications with the web.', rating: '1'}),

          new PostItem(TechnologyComponent, {name: 'Spring Boot',
              description: 'Spring Boot makes it easy to create stand-alone, production-grade applications.', rating: '2'}),

          new PostItem(ArticleComponent, {sn: '1',
              title: 'Angular 2 Routing and Navigation Example', category: 'Angular 2', rating: '3'}),

          new PostItem(ArticleComponent, {sn: '2',
              title: 'Angular 2 Template Reference Variable Example', category: 'Angular 2', rating: '4'}),

          new PostItem(ArticleComponent, {sn: '3',
              title: 'Spring Boot Custom Banner Example', category: 'Spring Boot', rating: '5'}),

          new PostItem(ArticleComponent, {sn: '4',
              title: 'Spring Boot Change Default Server Port', category: 'Spring Boot', rating: '3'})
        ];
            }
    }
