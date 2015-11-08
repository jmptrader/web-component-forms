//define module appsoa.components.dashboard {

import {EventEmmiter, Inject, Attribute, DynamicComponentLoader, ElementRef, Component, View, AfterContentInit} from 'angular2/angular2';
import {CollectionComponent} from 'APPSOA/Components/Collection/CollectionComponent.ts';
//import {FormLocationComponent} from 'APPSOA/Components/Form/Location/FormLocationComponent.ts';
//import {FormPersonComponent} from 'APPSOA/Components/Form/Person/FormPersonComponent.ts';
import {FormSegmentComponent} from "APPSOA/Components/Form/Segment/FormSegmentComponent.ts";

@Component({

    selector: 'form-group',
    //inputs: ['type']
    properties: ['type: type']
})

@View({

    //templateUrl: 'APPSOA/Components/Form/Segment/FormSegmentsTemplate.html',

    template: `
a
b
            <ng-content></ng-content>

    `,
    directives: [FormSegmentComponent]

})

export class FormSegmentsComponent implements AfterContentInit {

    constructor() {

        console.log('FormSegmentsComponent.constructor()');

    }

    render() {

        console.log('FormSegmentsComponent.render()');

    }

    onChange() {

        console.log('FormSegmentsComponent.onChange()');

    }

    clicked() {

        console.log('FormSegmentsComponent.clicked()');

    }

    afterContentInit() {

        console.log('FormSegmentsComponent.afterContentInit()');

    }

}

//}
