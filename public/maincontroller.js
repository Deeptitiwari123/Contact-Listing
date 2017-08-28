app.controller("UserRegistration", function($scope,$http,$log){ 
	
	$http.get('users/deepti')
	.then(function(response){
		$scope.items = response.data;
		$log.info(response);
		console.log("I am get  ");
	
		});


	$scope.addItem= function(){

		console.log('I am Add controller');
		//console.log($scope.user);
		//$scope.editing = false;
		$scope.items.push($scope.user1);
		$http.post('users/create',$scope.user1)
		.success(function(response){
		console.log('I am  success post');
		console.log(response);
		$scope.user1 = {};
		});
	}
$scope.removeItem= function(userID, index){
		var user_id = userID;
		console.log(index);
		$scope.items.splice(index,1);
		//console.log("user ID:",user_id);
		$http.post('users/remove',{id:user_id})
		.success(function(response){
		console.log('I am  success Remove');
		console.log(response);
		
		
		});
	}


	$scope.editItem= function(user){
		console.log(user);
		var user_id = user;

		console.log("user ID:",user_id);
		$http.post('users/edit',user_id)
		.success(function(response){
		console.log('I am  success Edit');
		console.log(response);
		
		});
	}
	
	 	});

	 	