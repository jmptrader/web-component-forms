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
define(["require", "exports", 'angular2/angular2', "APPSOA/Components/Form/Segment/FormSegmentComponent.ts"], function (require, exports, angular2_1, FormSegmentComponent_ts_1) {
    var FormSegmentsComponent = (function () {
        function FormSegmentsComponent() {
            console.log('FormSegmentsComponent.constructor()');
        }
        FormSegmentsComponent.prototype.render = function () {
            console.log('FormSegmentsComponent.render()');
        };
        FormSegmentsComponent.prototype.onChange = function () {
            console.log('FormSegmentsComponent.onChange()');
        };
        FormSegmentsComponent.prototype.clicked = function () {
            console.log('FormSegmentsComponent.clicked()');
        };
        FormSegmentsComponent.prototype.afterContentInit = function () {
            console.log('FormSegmentsComponent.afterContentInit()');
        };
        FormSegmentsComponent = __decorate([
            angular2_1.Component({
                selector: 'form-group',
                //inputs: ['type']
                properties: ['type: type']
            }),
            angular2_1.View({
                //templateUrl: 'APPSOA/Components/Form/Segment/FormSegmentsTemplate.html',
                template: "\na\nb\n            <ng-content></ng-content>\n\n    ",
                directives: [FormSegmentComponent_ts_1.FormSegmentComponent]
            }), 
            __metadata('design:paramtypes', [])
        ], FormSegmentsComponent);
        return FormSegmentsComponent;
    })();
    exports.FormSegmentsComponent = FormSegmentsComponent;
});
//}
//# sourceMappingURL=FormSegmentsComponent.js.map