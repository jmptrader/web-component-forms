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
define(["require", "exports", 'angular2/angular2', 'APPSOA/Components/Form/Location/FormLocationComponent.ts', 'APPSOA/Components/Form/Person/FormPersonComponent.ts', "../../../Main/Main.ts"], function (require, exports, angular2_1, FormLocationComponent_ts_1, FormPersonComponent_ts_1, Main_ts_1) {
    var FormSegmentComponent = (function () {
        function FormSegmentComponent(dynamicComponentLoader, elementRef) {
            this.showView = true;
            this.loader = dynamicComponentLoader;
            this.elementRef = elementRef;
            //console.log(configServiceFactory().getConfig());
            //console.log(new FormConfigService());
            //console.log(FormConfigService.getConfig());
            console.log('FormSegmentComponent.constructor()');
            //console.log(dynamicComponentLoader);
            //console.log(elementRef);
            //console.log(elementRef.renderView;
            var config = Main_ts_1.configServiceFactory().getConfig();
            //console.log(elementRef.getAttribute('type'));
        }
        FormSegmentComponent.prototype.afterViewChecked = function () {
            console.log('FormSegmentComponent.afterViewChecked()');
            //console.log(this);
            //console.log(this.dynamicComponentLoader);
            //console.log(this.elementRef);
            //console.log(elementRef.renderView;
            var component;
            if (this.type === 'Person') {
                component = FormPersonComponent_ts_1.FormPersonComponent;
            }
            else if (this.type === 'Location') {
                component = FormLocationComponent_ts_1.FormLocationComponent;
            }
            if (this.showView && component) {
                this.showView = false;
                var promise = this.loader.loadIntoLocation(component, this.elementRef, 'componentOutlet');
                promise.then(function () {
                    console.log('FormSegmentComponent.afterViewChecked(): DONE');
                });
            }
        };
        FormSegmentComponent.prototype.render = function () {
            console.log('FormSegmentComponent.render()');
        };
        FormSegmentComponent.prototype.onChange = function () {
            console.log('FormSegmentComponent.onChange()');
        };
        FormSegmentComponent.prototype.clicked = function () {
            console.log('FormSegmentComponent.clicked()');
        };
        FormSegmentComponent.prototype.afterContentInit = function () {
            console.log('FormSegmentComponent.clicked()');
        };
        __decorate([
            angular2_1.ViewChild(angular2_1.ChildComponent), 
            __metadata('design:type', (typeof (_a = typeof angular2_1.ChildComponent !== 'undefined' && angular2_1.ChildComponent) === 'function' && _a) || Object)
        ], FormSegmentComponent.prototype, "viewChild");
        FormSegmentComponent = __decorate([
            angular2_1.Component({
                selector: 'form-segment',
                //inputs: ['type']
                properties: ['type: type'],
                inputs: ['config: config'],
            }),
            angular2_1.View({
                template: "\n        <div #component-outlet></div>\n\n    ",
            }), 
            __metadata('design:paramtypes', [(typeof (_b = typeof angular2_1.DynamicComponentLoader !== 'undefined' && angular2_1.DynamicComponentLoader) === 'function' && _b) || Object, (typeof (_c = typeof angular2_1.ElementRef !== 'undefined' && angular2_1.ElementRef) === 'function' && _c) || Object])
        ], FormSegmentComponent);
        return FormSegmentComponent;
        var _a, _b, _c;
    })();
    exports.FormSegmentComponent = FormSegmentComponent;
});
//}
//# sourceMappingURL=FormSegmentComponent.js.map