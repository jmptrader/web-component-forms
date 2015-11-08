//define module appsoa.components.dashboard {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    //import {CollectionComponent} from 'APPSOA/Components/Collection/CollectionComponent.ts';
    var FormLocationComponent = (function () {
        function FormLocationComponent() {
            console.log('FormLocationComponent.constructor()');
            //console.log(elementRef.nativeElement);
            //console.log(dynamicComponentLoader);
            //console.log(elementRef.getAttribute('type'));
        }
        FormLocationComponent.prototype.render = function () {
            console.log('FormLocationComponent.render()');
        };
        FormLocationComponent.prototype.onChange = function () {
            console.log('FormLocationComponent.onChange()');
        };
        FormLocationComponent.prototype.clicked = function () {
            console.log('FormComponent.clicked()');
        };
        FormLocationComponent.prototype.afterContentInit = function () {
        };
        FormLocationComponent = __decorate([
            angular2_1.Component({
                selector: 'n',
                //inputs: ['type']
                properties: ['type: type']
            }),
            angular2_1.View({
                templateUrl: 'APPSOA/Components/Form/Location/FormLocationTemplate.html',
                directives: [],
            }), 
            __metadata('design:paramtypes', [])
        ], FormLocationComponent);
        return FormLocationComponent;
    })();
    exports.FormLocationComponent = FormLocationComponent;
});
//}
//# sourceMappingURL=FormLocationComponent.js.map