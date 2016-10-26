
/* JavaScript content from js/controller.js in folder common */
/* JavaScript content from js/controller.js in folder common */
angular.module('HelloUserApp', []).controller('HelloUserController',
		function($scope) {

	$scope.NameChange = function() {
		$scope.greeting = "Hello " + $scope.name;
	};

	$scope.openCamera = function() {
		navigator.camera.getPicture(onSuccess, onFail, {
			quality : 50
		});
	};

	$scope.share = function() {
		//navigator.socialSharing.share('mensgem de teste');
		var params = {message : 'Comprovante de ted do Original.', title : 'Compartilhar via...', filename:'http://www.pdf995.com/samples/pdf.pdf', filedata:null};
		WL.NativePage.show("SocialSharing", backFromNativePage, params);
	};

	function backFromNativePage(data){
		console.log('retorno');
	}


	function sucessCallback(res) {
		WL.Logger.debug("sucessCallback() " + res);
	}

	function onSuccess(imageData) {
		WL.Logger.debug("onSuccess()");
	}

	function onFail(message) {
		WL.Logger.debug("onfail() " + message);
	}

});
