"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("tns-core-modules/ui/frame");
var observable_1 = require("tns-core-modules/data/observable");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.mainContentText = "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component" +
            " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
        return _this;
    }
    HomeViewModel.prototype.onOpenDrawerTap = function () {
        var sideDrawer = (frame.topmost().getViewById("sideDrawer"));
        sideDrawer.showDrawer();
    };
    HomeViewModel.prototype.onCloseDrawerTap = function () {
        var sideDrawer = (frame.topmost().getViewById("sideDrawer"));
        sideDrawer.closeDrawer();
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFib3V0LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBbUQ7QUFFbkQsK0RBQThEO0FBRTlEO0lBQW1DLGlDQUFVO0lBaUIzQztRQUFBLFlBQ0UsaUJBQU8sU0FDUjtRQWxCRCxxQkFBZSxHQUNiLHdJQUF3STtZQUN4SSw2SUFBNkksQ0FBQzs7SUFnQmhKLENBQUM7SUFmRCx1Q0FBZSxHQUFmO1FBQ0UsSUFBSSxVQUFVLEdBQWlDLENBQzdDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQzFDLENBQUM7UUFDRixVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELHdDQUFnQixHQUFoQjtRQUNFLElBQUksVUFBVSxHQUFpQyxDQUM3QyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUMxQyxDQUFDO1FBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFLSCxvQkFBQztBQUFELENBQUMsQUFwQkQsQ0FBbUMsdUJBQVUsR0FvQjVDO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJhbWUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcblxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmcgPVxuICAgIFwiU2lkZURyYXdlciBmb3IgTmF0aXZlU2NyaXB0IGNhbiBiZSBlYXNpbHkgc2V0dXAgaW4gdGhlIFhNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyBtYWluLSBhbmQgZHJhd2VyLWNvbnRlbnQuIFRoZSBjb21wb25lbnRcIiArXG4gICAgXCIgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XG4gIG9uT3BlbkRyYXdlclRhcCgpIHtcbiAgICBsZXQgc2lkZURyYXdlcjogUmFkU2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPihcbiAgICAgIGZyYW1lLnRvcG1vc3QoKS5nZXRWaWV3QnlJZChcInNpZGVEcmF3ZXJcIilcbiAgICApO1xuICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICB9XG4gIG9uQ2xvc2VEcmF3ZXJUYXAoKSB7XG4gICAgbGV0IHNpZGVEcmF3ZXI6IFJhZFNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj4oXG4gICAgICBmcmFtZS50b3Btb3N0KCkuZ2V0Vmlld0J5SWQoXCJzaWRlRHJhd2VyXCIpXG4gICAgKTtcbiAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=