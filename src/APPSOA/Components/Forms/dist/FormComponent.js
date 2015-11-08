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
define(["require", "exports", 'angular2/angular2', 'APPSOA/Components/Form/Segment/FormSegmentComponent.ts'], function (require, exports, angular2_1, FormSegmentComponent_ts_1) {
    var FormComponent = (function () {
        //public config:Object;
        function FormComponent() {
            //console.log('FormComponent.constructor(): ' + this.config);
        }
        FormComponent.prototype.render = function () {
            console.log('FormComponent.render()');
        };
        FormComponent.prototype.onChange = function () {
            console.log('FormComponent.onChange()');
        };
        FormComponent.prototype.clicked = function () {
            console.log('FormComponent.clicked()');
        };
        FormComponent.prototype.change = function () {
            console.log('FormComponent.change()');
        };
        FormComponent.prototype.afterContentInit = function () {
        };
        FormComponent = __decorate([
            angular2_1.Component({
                selector: 'form',
                inputs: ['config: config']
            }),
            angular2_1.View({
                template: "\n\n        <div class=\"ui form\">\n\n            <h4 class=\"ui dividing header\">type: {{config.title}}</h4>\n\n            <div *ng-for=\"#segment of config.groups\">\n\n                <form-segment [type]=\"segment.type\"></form-segment>\n\n            </div>\n\n            <div class=\"ui button\" tabindex=\"0\">Submit Order</div>\n\n        </div>\n\n    ",
                directives: [angular2_1.NgFor, FormSegmentComponent_ts_1.FormSegmentComponent],
            }), 
            __metadata('design:paramtypes', [])
        ], FormComponent);
        return FormComponent;
    })();
    exports.FormComponent = FormComponent;
});
//}
//# sourceMappingURL=FormComponent.js.map