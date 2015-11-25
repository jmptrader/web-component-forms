import {EventEmmiter,AfterViewChecked, ChildComponent,IHttpPromise, ViewChild, provide, Inject, Attribute, ViewEncapsulation, DynamicComponentLoader, ElementRef, Component, View, AfterContentInit} from 'angular2/angular2';
import {CollectionComponent} from 'APPSOA/Components/Collection/CollectionComponent.ts';
import {FormLocationComponent} from 'APPSOA/Components/Form/Location/FormLocationComponent.ts';
import {FormPersonComponent} from 'APPSOA/Components/Form/Person/FormPersonComponent.ts';
import {FormConfigService, configServiceFactory} from "../../../Main/Main.ts";
import ElementRef = ng.ElementRef;

@Component({

    selector: 'form-segment',
    properties: ['type: type'],
    inputs: ['config: config'],

})

@View({

    template: `
        <div #component-outlet></div>

    `
    
})

export class FormSegmentComponent implements AfterViewChecked {

    @ViewChild(ChildComponent) viewChild: ChildComponent;

    loader: DynamicComponentLoader;
    elementRef: ElementRef;
    showView = true;


    constructor(dynamicComponentLoader: DynamicComponentLoader, elementRef: ElementRef) {

        this.loader = dynamicComponentLoader;
        this.elementRef = elementRef;
        
        console.log('FormSegmentComponent.constructor()');
        
        var config = configServiceFactory().getConfig();
        // add some sugar...
        
    }

    afterViewChecked() {

        console.log('FormSegmentComponent.afterViewChecked()');
        
        var component:Component;

        if(this.type === 'Person') {

            component = FormPersonComponent;

        } else if(this.type === 'Location') {

            component = FormLocationComponent;

        }

        if(this.showView && component) {

            this.showView = false;

            var promise:Promise = this.loader.loadIntoLocation(component, this.elementRef, 'componentOutlet');

            promise.then(function() {

                console.log('FormSegmentComponent.afterViewChecked(): DONE');

            });
        }

    }
    render() {

        console.log('FormSegmentComponent.render()');

    }

    onChange() {

        console.log('FormSegmentComponent.onChange()');

    }

    clicked() {

        console.log('FormSegmentComponent.clicked()');

    }

    afterContentInit() {

        console.log('FormSegmentComponent.clicked()');

    }

}
