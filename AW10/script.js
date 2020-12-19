function getCookie(name) {
	name += "=";
	let cookieList = document.cookie.split(';');
	for(var i = 0; i < cookieList.length; i++) {
		var item = cookieList[i];
		while (item.charAt(0) == ' ') {
			item = item.substring(1);
		}
		if (item.indexOf(name) == 0) {
			return item.substring(name.length, item.length);
		}
	}
	return "";
}

let basket_items = getCookie("basket_list");
if (basket_items != "")
	basket_items = JSON.parse(basket_items);
console.dir(basket_items);

displayList();

function displayList()
{
		basket_items = getCookie("basket_list");
	if (basket_items != "")
		basket_items = JSON.parse(basket_items);
	let list = document.querySelector("#order_order");
	if (list)
	{
		list = list.querySelector("ol");
		list.innerHTML = "";
		if (basket_items != "")
		{
			basket_items.forEach((item, index) => {
				list.innerHTML +=	"<li>" + 
										"<p>" + item.name + "</p>" +
										"<p>" + item.price + "</p>" +
										"<p>" + "1" + "</p>" +
										"<p>" + item.price + "</p>" +
										"<i class='fas fa-trash'>" + "<input type='hidden' value='" + index + "'>" + "</i>" +
									"</li>";
			})
		}
	}
	document.querySelectorAll(".fa-trash").forEach((item) => {
		item.addEventListener("click", () => {
			if (basket_items != "")
			{
				let index = item.querySelector("input").value;
				basket_items.splice(index, 1);
			}
			document.cookie = "basket_list=" + JSON.stringify(basket_items);
			displayList();
		})
	})
}




document.querySelectorAll(".order_item").forEach((item) => {
	item.addEventListener("click", () => {
		if (basket_items != "")
		{
			basket_items.push({name: "Nice cream", price: 2.23});
		}
		else
			basket_items = [{name: "Nice cream", price: 2.23}];
		document.cookie = "basket_list=" + JSON.stringify(basket_items);
		displayList();
	})
})