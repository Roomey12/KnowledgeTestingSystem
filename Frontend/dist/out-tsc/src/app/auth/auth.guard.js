import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(next, state) {
        if (localStorage.getItem('token') != null) {
            let roles = next.data['permittedRoles'];
            if (roles) {
                if (this.authService.roleMatch(roles)) {
                    return true;
                }
                else {
                    this.router.navigate(['/forbidden']);
                    return false;
                }
            }
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map