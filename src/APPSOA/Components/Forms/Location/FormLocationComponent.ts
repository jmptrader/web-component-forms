//define module appsoa.components.dashboard {

import {Component, View, AfterContentInit} from 'angular2/angular2';
//import {CollectionComponent} from 'APPSOA/Components/Collection/CollectionComponent.ts';

@Component({

    selector:   'n',
    //inputs: ['type']
    properties: ['type: type']
})

@View({

    templateUrl: 'APPSOA/Components/Form/Location/FormLocationTemplate.html',
    directives:  [],

})

export class FormLocationComponent implements AfterContentInit {

    constructor() {

        console.log('FormLocationComponent.constructor()');
        //console.log(elementRef.nativeElement);
        //console.log(dynamicComponentLoader);
        //console.log(elementRef.getAttribute('type'));
    }

    render() {

        console.log('FormLocationComponent.render()');

    }

    onChange() {

        console.log('FormLocationComponent.onChange()');

    }

    clicked() {

        console.log('FormComponent.clicked()');

    }

    afterContentInit() {


    }

}

//}
