import {Component, View, AfterContentInit} from 'angular2/angular2';

@Component({

    selector:   'n',
    properties: ['type: type']
    
})

@View({

    templateUrl: 'APPSOA/Components/Form/Person/FormPersonTemplate.html',
    directives:  [],

})

export class FormPersonComponent implements AfterContentInit {

    constructor() {

        console.log('FormPersonComponent.constructor()');
    
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
