$(document).ready(function()
{
	$('#search').keyup(function()
	{
		f($(this).val().length >= 3)
		{
			$.get("search.php", {search: $(this).val()}, function(data)
			{
				$("#results").html(data);
			});
		}
	});
});