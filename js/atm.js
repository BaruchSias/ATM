	//Simulates DB (JSON)
	var testUser = {
		name: 'Baruch',
		cardNumber: 12345,
		pin: 0000,
		balance: 20000
	};

	var testUser2 = {
		name: 'Mario El MANCO Lujan',
		cardNumber: 67890,
		pin: 1111,
		balance: 5000
	};

	var usersArr = [testUser, testUser2];
	console.log(usersArr);
	var loginCard;
	var loginPin;
	var foundUser = false;
	var currentUser = {};

$(document).ready(function(){

	//Clear the info on the display
	$('.clear').on('click', function(){
		$('.clear').val('')
	});

	//Cancel the previous input or taken option
	$('.cancel').on('click', function(){
		//$('.cancel').
	});

	//Confirm the previous input or taken option
	$('.confirm').on('click', function(){
		loginCard = parseInt($('#login-card').val())
		loginPin = parseInt($('#login-pin').val())
		console.log(typeof loginCard, loginPin)

		//Verify the user match from the users within the array
		for(var i=0; i<usersArr.length; i++){
			if(loginCard == usersArr[i].cardNumber && loginPin == usersArr[i].pin){
				currentUser = usersArr[i]
				console.log(currentUser)
				setInformation(currentUser)
				$('#login').addClass('hidden')
				$('#myAccount').removeClass('hidden')
				foundUser = true;
				break;
			}
		};

		//User not found on DB
		if(!foundUser){
			alert('User no found');

		};
	});//Ends Confirm

	$('#withdraw').on('click', function(){$('#actions').addClass('hidden');
	$('#withdraw-display').removeClass('hidden')});
	//$('#withdraw-display button') To avoid adding ids to everything within html
	function setInformation(obj){
		$('#myName').text(obj.name)
		$('#myBalance').text(obj.balance)
	};

	function amountVerification(desiredAmount, obj){
		if(desiredAmount > obj.balance){
			alert("Invalid amount");
			return false;
		}
		return true;
	};

	$('#withdraw-confirm').on('click', function(){
		console.log('oldBalance', currentUser.balance);
		var balanceWithdraw = parseInt($('#withdraw-display input').val())
		console.log('balance Withdraw', balanceWithdraw)

		/*In case user clicks on withdraw-button without
		providing an amount alert user about it

		else if(input == null)
			alert("Please introduce an amount to withdraw");

		else if(input(withdraw-text-display == null))
			alert("Please introduce an amount to withdraw");*/

		/*$('.withdraw-text-display').on('click', function(){
			console.log('newBalance', currentUser.balance);
			setInformation(currentUser);
		});*/

		if(!isNaN(balanceWithdraw)){
		if(amountVerification(balanceWithdraw, currentUser)){
			currentUser.balance = currentUser.balance-balanceWithdraw
		}
		else{
			alert('Not enough amount');
			}
		}
		else{
			alert("not a number");
		}
		console.log('newBalance', currentUser.balance);
		setInformation(currentUser);
	});

	$(document).on('click', '.suggestedQuantity', function(){
		var balanceWithdraw = parseInt($(this).text())
		console.log('oldBalance', currentUser.balance);
		console.log('balance Withdraw', balanceWithdraw)
		if(amountVerification(balanceWithdraw, currentUser)){
			currentUser.balance = currentUser.balance-balanceWithdraw
		}
		else{
			alert('Not enough amount');
		}
		console.log('newBalance', currentUser.balance);
		setInformation(currentUser);
	});

});//Code ending