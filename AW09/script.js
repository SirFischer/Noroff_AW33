let amount = 0;
    function submit_order_form()
    {
        var html = $("#shopping_cart ol").html();
        $("#order_list_input_value").val(html);
        if ($("#order__form").valid() && amount > 0)
            document.getElementById("order__form").submit();
    }
    
    $(".order_item .add_to_cart_btn").click(
        function () {
			let expansion = document.querySelector("#basket_expanded");
			expansion.style.display = "block";
            var sum = 0.0;
            $("#shopping_cart ol").append("<li> " + $(this).parent().parent().find("h3").html() + " - " + $(this).parent().parent().find("input").val() + "$ <input value='" + $(this).parent().parent().find("input").val() + "' type='hidden'> </input> <i  onclick='delete_element(this)' class='fas fa-trash-alt'></i> </li>");
            $("#shopping_cart ol li").each(function (){
                sum += parseFloat($(this).find("input").val());
            });
            $("#shopping_cart p").html("SUM: " + sum.toFixed(2) + "$");
			amount++;
        }
    );

    function delete_element(e)
    {
		$(e).parent().remove();
		
        var sum = 0.0;
        $("#shopping_cart ol li").each(function (){
            sum += parseFloat($(this).find("input").val());
        });
        $("#shopping_cart p").html("SUM: " + sum.toFixed(2) + "$");
	}

	document.querySelector("#basket__nav").addEventListener("click", () => {
		let expansion = document.querySelector("#basket_expanded");
		if (expansion.style.display == "block")
			expansion.style.display = "none";
		else
			expansion.style.display = "block";
	})
	