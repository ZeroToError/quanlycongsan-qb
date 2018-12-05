import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAdminContent]'
})
export class AdminContentDirective {

    constructor(private _templateRef: TemplateRef<any>,
                private _viewContainer: ViewContainerRef) {

    }

    @Input('appAdminContent') set role(isAdmin: boolean) {
        let shouldShow = false;
        if (localStorage.getItem('UserName') === 'Admin') {
          shouldShow = true;
        }
        if (shouldShow && isAdmin) {
            this._viewContainer.createEmbeddedView(this._templateRef);
        } else {
            this._viewContainer.clear();
        }
    }
}
