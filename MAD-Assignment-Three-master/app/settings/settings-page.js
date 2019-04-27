"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings_view_model_1 = require("./settings-view-model");
var frame_1 = require("tns-core-modules/ui/frame");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new settings_view_model_1.HomeViewModel();
}
exports.pageLoaded = pageLoaded;
function onTapHome() {
    var frame = frame_1.getFrameById("my-frame");
    frame.navigate("home/home-page");
}
exports.onTapHome = onTapHome;
function onTapSettings() {
    var frame = frame_1.getFrameById("my-frame");
    frame.navigate("settings/settings-page");
}
exports.onTapSettings = onTapSettings;
function onTapAbout() {
    var frame = frame_1.getFrameById("my-frame");
    frame.navigate("about/about-page");
}
exports.onTapAbout = onTapAbout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MtcGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRpbmdzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw2REFBc0Q7QUFDdEQsbURBQXlEO0FBRXpELFNBQWdCLFVBQVUsQ0FBQyxJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG1DQUFhLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBSEQsZ0NBR0M7QUFDRCxTQUFnQixTQUFTO0lBQ3ZCLElBQU0sS0FBSyxHQUFHLG9CQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCw4QkFHQztBQUVELFNBQWdCLGFBQWE7SUFDM0IsSUFBTSxLQUFLLEdBQUcsb0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxLQUFLLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHNDQUdDO0FBQ0QsU0FBZ0IsVUFBVTtJQUN4QixJQUFNLEtBQUssR0FBRyxvQkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBIb21lVmlld01vZGVsIH0gZnJvbSBcIi4vc2V0dGluZ3Mtdmlldy1tb2RlbFwiO1xuaW1wb3J0IHsgZ2V0RnJhbWVCeUlkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwSG9tZSgpIHtcbiAgY29uc3QgZnJhbWUgPSBnZXRGcmFtZUJ5SWQoXCJteS1mcmFtZVwiKTtcbiAgZnJhbWUubmF2aWdhdGUoXCJob21lL2hvbWUtcGFnZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uVGFwU2V0dGluZ3MoKSB7XG4gIGNvbnN0IGZyYW1lID0gZ2V0RnJhbWVCeUlkKFwibXktZnJhbWVcIik7XG4gIGZyYW1lLm5hdmlnYXRlKFwic2V0dGluZ3Mvc2V0dGluZ3MtcGFnZVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBvblRhcEFib3V0KCkge1xuICBjb25zdCBmcmFtZSA9IGdldEZyYW1lQnlJZChcIm15LWZyYW1lXCIpO1xuICBmcmFtZS5uYXZpZ2F0ZShcImFib3V0L2Fib3V0LXBhZ2VcIik7XG59XG4iXX0=