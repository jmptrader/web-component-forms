//define module appsoa.components.dashboard {

import {Inject, Component, View, AfterContentInit, NgFor} from 'angular2/angular2';
//import {FormSegmentComponent} from "./Segment/FormSegmentComponent.ts";
//import {CollectionComponent} from 'APPSOA/sComponents/Collection/CollectionComponent.ts';
//import {FormSegmentsComponent} from 'APPSOA/Components/Form/Segment/FormSegmentsComponent.ts';
import {FormSegmentComponent} from 'APPSOA/Components/Form/Segment/FormSegmentComponent.ts';

@Component({

    selector: 'form',
    inputs: ['config: config']
})

@View({

    template: `

        <div class="ui form">

            <h4 class="ui dividing header">type: {{config.title}}</h4>

            <div *ng-for="#segment of config.groups">

                <form-segment [type]="segment.type"></form-segment>

            </div>

            <div class="ui button" tabindex="0">Submit Order</div>

        </div>

    `,

    directives: [NgFor, FormSegmentComponent],

})

export class FormComponent implements AfterContentInit {

    //public config:Object;

    constructor() {

        //console.log('FormComponent.constructor(): ' + this.config);

    }

    render() {

        console.log('FormComponent.render()');

    }

    onChange() {

        console.log('FormComponent.onChange()');

    }

    clicked() {

        console.log('FormComponent.clicked()');

    }

    change() {

        console.log('FormComponent.change()');

    }

    afterContentInit() {


    }

}

//}
