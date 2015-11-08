//define module appsoa.components.dashboard {

//import {Component, View} from 'angular2/angular2';
import {EventEmmiter,AfterViewChecked, ChildComponent,IHttpPromise, ViewChild, provide, Inject, Attribute, ViewEncapsulation, DynamicComponentLoader, ElementRef, Component, View, AfterContentInit} from 'angular2/angular2';
import {CollectionComponent} from 'APPSOA/Components/Collection/CollectionComponent.ts';
import {FormLocationComponent} from 'APPSOA/Components/Form/Location/FormLocationComponent.ts';
import {FormPersonComponent} from 'APPSOA/Components/Form/Person/FormPersonComponent.ts';
import {FormConfigService, configServiceFactory} from "../../../Main/Main.ts";
import ElementRef = ng.ElementRef;

@Component({

    selector: 'form-segment',
    //inputs: ['type']
    properties: ['type: type'],
    inputs: ['config: config'],

})

@View({

    template: `
        <div #component-outlet></div>

    `,
    //encapsulation: ViewEncapsulation.None,

})

export class FormSegmentComponent implements AfterViewChecked {

    @ViewChild(ChildComponent) viewChild: ChildComponent;

    loader: DynamicComponentLoader;
    elementRef: ElementRef;
    showView = true;


    constructor(dynamicComponentLoader: DynamicComponentLoader, elementRef: ElementRef) {

        this.loader = dynamicComponentLoader;
        this.elementRef = elementRef;
//console.log(configServiceFactory().getConfig());
//console.log(new FormConfigService());
//console.log(FormConfigService.getConfig());
        console.log('FormSegmentComponent.constructor()');
        //console.log(dynamicComponentLoader);
        //console.log(elementRef);
        //console.log(elementRef.renderView;

        var config = configServiceFactory().getConfig();

        //console.log(elementRef.getAttribute('type'));
    }

    afterViewChecked() {

        console.log('FormSegmentComponent.afterViewChecked()');
        //console.log(this);
        //console.log(this.dynamicComponentLoader);
        //console.log(this.elementRef);
        //console.log(elementRef.renderView;

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

//}
