//define module appsoa.components.dashboard {

import {Component, View, AfterContentInit} from 'angular2/angular2';
//import {CollectionComponent} from 'APPSOA/Components/Collection/CollectionComponent.ts';

@Component({

    selector:   'n',
    //inputs: ['type']
    properties: ['type: type']
})

@View({

    templateUrl: 'APPSOA/Components/Form/Person/FormPersonTemplate.html',
    directives:  [],

})

export class FormPersonComponent implements AfterContentInit {

    constructor() {

        console.log('FormPersonComponent.constructor()');
        //console.log(elementRef.nativeElement);
        //console.log(dynamicComponentLoader);
        //console.log(elementRef.getAttribute('type'));
    }

    render() {

        console.log('FormPersonComponent.render()');

    }

    onChange() {

        console.log('FormPersonComponent.onChange()');

    }

    clicked() {

        console.log('FormComponent.clicked()');

    }

    afterContentInit() {


    }

}

//}
