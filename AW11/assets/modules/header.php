<header>
	<div class="header_img"></div>
	<div class="title">
		<h1>Re-Cycle</h1>
		<h2>More than 3 routes all around Paris!</h2>
	</div>
	<nav>
		<ul>
			<a href="?p=home"><li id="home">Home</li></a>
			<a href="?p=about"><li id="about">About us</li></a>
			<a href="?p=contact"><li id="contact">Contact us</li></a>
			<a href="?p=rides"><li id="rides">Rides</li></a>
		</ul>
		<button><i class="fa fa-bars fa-3x" aria-hidden="true"></i></button>
	</nav>
</header>

<script>
	let menu_active = false;

	function toggle_menu()
	{
		menu_active = !menu_active;
		if (menu_active)
			$("header nav ul").addClass("nav_active");
		else
			$("header nav ul").removeClass("nav_active");
	}
	$("header nav button").click(function () {
		toggle_menu();
	});
</script>