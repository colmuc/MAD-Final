"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame = require("tns-core-modules/ui/frame");
var observable_1 = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var observableModule = require("tns-core-modules/data/observable");
var HomeViewModel = /** @class */ (function(_super) {
  __extends(HomeViewModel, _super);
  function HomeViewModel() {
    var _this = _super.call(this) || this;
    _this.viewModel = observableModule.fromObject({
      darkTheme: "Dark Theme"
    });
    _this.posts = new observable_array_1.ObservableArray([]);
    _this.getPosts();
    return _this;
  }
  HomeViewModel.prototype.onCloseDrawerTap = function() {
    var sideDrawer = frame.topmost().getViewById("sideDrawer");
    sideDrawer.closeDrawer();
  };
  HomeViewModel.prototype.getPosts = function() {
    var _this = this;
    var url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=da4fccbfcf2d40d788bfcba358cdc6fc";
    var url2 = "https://www.googleapis.com/books/v1/volumes?q=harrypotter";
    var req = new Request(url2);
    fetch(req).then(function(response) {
      response.json().then(function(items) {
        var children = items.items;
        children.forEach(function(item) {
          console.log("we are here " + item);
          _this.posts.push({
            title: item.volumeInfo.title,
            image: item.volumeInfo.imageLinks.smallThumbnail
            //url: item.url
          });
        });
      });
    });
  };
  return HomeViewModel;
})(observable_1.Observable);
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQW1EO0FBRW5ELCtEQUE4RDtBQUM5RCwyRUFBeUU7QUFFekUsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUVyRTtJQUFtQyxpQ0FBVTtJQUczQztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQThCRCxlQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQztRQWxDRCxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0lBQ2xCLENBQUM7SUFFRCx3Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLFVBQVUsR0FBaUMsQ0FDN0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FDMUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sZ0NBQVEsR0FBaEI7UUFBQSxpQkFtQkM7UUFsQkMsSUFBSSxHQUFHLEdBQ0wseUZBQXlGLENBQUM7UUFDNUYsSUFBSSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDdEIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEtBQUs7Z0JBQ3hCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7Z0JBRTlCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7d0JBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO3dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVU7d0JBQ3RCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztxQkFDZCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUtILG9CQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUFtQyx1QkFBVSxHQXdDNUM7QUF4Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcmFtZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XG5cbmNvbnN0IG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHBvc3RzOiBPYnNlcnZhYmxlQXJyYXk8YW55PjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucG9zdHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICB0aGlzLmdldFBvc3RzKCk7XG4gIH1cblxuICBvbkNsb3NlRHJhd2VyVGFwKCkge1xuICAgIGxldCBzaWRlRHJhd2VyOiBSYWRTaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+KFxuICAgICAgZnJhbWUudG9wbW9zdCgpLmdldFZpZXdCeUlkKFwic2lkZURyYXdlclwiKVxuICAgICk7XG4gICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3N0cygpIHtcbiAgICB2YXIgdXJsID1cbiAgICAgIFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmYXBpS2V5PWRhNGZjY2JmY2YyZDQwZDc4OGJmY2JhMzU4Y2RjNmZjXCI7XG4gICAgdmFyIHJlcSA9IG5ldyBSZXF1ZXN0KHVybCk7XG5cbiAgICBmZXRjaChyZXEpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oaXRlbXMgPT4ge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBpdGVtcy5hcnRpY2xlcztcblxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid2UgYXJlIGhlcmUgXCIgKyBpdGVtKTtcbiAgICAgICAgICB0aGlzLnBvc3RzLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICBpbWFnZTogaXRlbS51cmxUb0ltYWdlLFxuICAgICAgICAgICAgdXJsOiBpdGVtLnVybFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmlld01vZGVsID0gb2JzZXJ2YWJsZU1vZHVsZS5mcm9tT2JqZWN0KHtcbiAgICBkYXJrVGhlbWU6IFwiRGFyayBUaGVtZVwiXG4gIH0pO1xufVxuIl19
