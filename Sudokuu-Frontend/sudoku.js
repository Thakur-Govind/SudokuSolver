// sudoku.js
function ajaxCall(prob)
{
	console.log("Calling API...")
	$.ajax({
	url: 'http://localhost:8000/'+ prob,
	dataType: 'json',
	type: 'GET',
	success: function(data){
		var data = JSON.stringify(data);
		data = JSON.parse(data);

		for(i = 65; i <= 73; i++)
		{
			for(j = 1; j <= 9 ; j++)
			{
				var pos= String.fromCharCode(i) + j.toString()
				var cat = '#'+pos ;
				$(cat).val(data.soln[pos])
			}
		}

		// console.log(data.soln["A1"])
		}	
});
}

$(document).ready(function(){

	$('.solve').on("click",function(){
		var i;
		var j=1;
		var prob = ""
		for(i = 65; i <= 73; i++)
		{
			for(j = 1; j <= 9 ; j++)
			{
				var cat = '#' + String.fromCharCode(i) + j.toString();
				element = $(cat).val()
				if(parseInt(element)>=1 && parseInt(element)<=9)
				{
					prob = prob + element;
				}
				else
				{
					prob = prob + ".";
				}

			}
		}
		console.log(prob)
		console.log(prob.length)
		 ajaxCall(prob);
		// var url = 'http://localhost:8000/'+ prob; 
		// $.getJSON(url, function(data)
		// {
		// 	console.log(data);
		// });


	});

	$('.reset').on("click",function(){
		for(i = 65; i <= 73; i++)
		{
			for(j = 1; j <= 9 ; j++)
			{
				var pos= String.fromCharCode(i) + j.toString()
				var cat = '#'+pos ;
				$(cat).val("")
			}
		}
	});
});