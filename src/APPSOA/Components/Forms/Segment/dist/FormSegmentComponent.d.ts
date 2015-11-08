import { AfterViewChecked, ChildComponent, DynamicComponentLoader, ElementRef } from 'angular2/angular2';
export declare class FormSegmentComponent implements AfterViewChecked {
    viewChild: ChildComponent;
    loader: DynamicComponentLoader;
    elementRef: ElementRef;
    showView: boolean;
    constructor(dynamicComponentLoader: DynamicComponentLoader, elementRef: ElementRef);
    afterViewChecked(): void;
    render(): void;
    onChange(): void;
    clicked(): void;
    afterContentInit(): void;
}
