angular.module("PostApp")
.controller("MainController", function($scope, $resource, PostResource){
  User = $resource('http://jsonplaceholder.typicode.com/users/:id', {id: "@id"})

  //query() => /posts => Posts Array
  $scope.posts = PostResource.query();
  $scope.users = User.query();

  $scope.removePost = function(post){
    PostResource.delete({id: post.id}, function(data){
      //$scope.posts = Post.query();
    });
    $scope.posts = $scope.posts.filter(function(element){
      return element.id !== post.id;
    });
  }

})
.controller("PostController", function($scope, $resource, $routeParams, $location, PostResource){
  $scope.title = "Editar Posts";
  $scope.post = PostResource.get({id:$routeParams.id});
  $scope.savePost = function(){
    PostResource.update({id: $scope.post.id}, {data: $scope.post}, function(data){
      console.log(data);
      $location.path("/post/" + $scope.post.id);
    });
  }
})
.controller("NewPostController", function($scope, $resource, $location, PostResource){
  $scope.post = {};
  $scope.title = "Crear post";
  $scope.savePost = function(){
    PostResource.save({data: $scope.post}, function(data){
      console.log(data);
      $location.path("/");
    });
  }
});
