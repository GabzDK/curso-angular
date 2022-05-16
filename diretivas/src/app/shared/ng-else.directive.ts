import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngElse]',
})
export class NgElseDirective {

  @Input() set ngElse(condition : boolean){
    if (!condition) {
      this.viewContainetRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainetRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainetRef: ViewContainerRef
  ) {}
}
