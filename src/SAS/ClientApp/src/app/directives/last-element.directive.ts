// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

import { Directive, Input, Output, EventEmitter } from '@angular/core';


@Directive({
    selector: '[lastElement]'
})
export class LastElementDirective {
    @Input()
    set lastElement(isLastElement: boolean) {

        if (isLastElement) {
            setTimeout(() => {
                this.lastFunction.emit();
            });
        }
    }

    @Output()
    lastFunction = new EventEmitter();
}
