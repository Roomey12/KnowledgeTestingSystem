export class ExitTestStartGuard {
    canDeactivate(component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
//# sourceMappingURL=exit.test-start.guard.js.map