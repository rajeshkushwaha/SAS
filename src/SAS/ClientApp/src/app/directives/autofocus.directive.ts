// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
    selector: '[autofocus]'
})
export class AutofocusDirective implements OnInit {
    constructor(public elementRef: ElementRef) { }

    ngOnInit() {
        setTimeout(() => this.elementRef.nativeElement['focus'](), 500);
    }
}
