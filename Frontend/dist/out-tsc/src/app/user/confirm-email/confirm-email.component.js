import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ConfirmEmailComponent = class ConfirmEmailComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(params => {
            let userId = params['userId'];
            console.log(userId); // Print the parameter to the console. 
            let token = params['token'];
            console.log(token); // Print the parameter to the console. 
        });
    }
    ngOnInit() {
    }
};
ConfirmEmailComponent = __decorate([
    Component({
        selector: 'app-confirm-email',
        templateUrl: './confirm-email.component.html',
        styles: []
    })
], ConfirmEmailComponent);
export { ConfirmEmailComponent };
//# sourceMappingURL=confirm-email.component.js.map