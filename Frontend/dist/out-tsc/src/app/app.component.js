import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(spinner, router) {
        this.spinner = spinner;
        this.router = router;
        this.title = 'Knowledge Testing System';
    }
    ngOnInit() {
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 500);
    }
    onLogout() {
        localStorage.removeItem('token');
        this.router.navigate(['/user/login']);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: []
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map