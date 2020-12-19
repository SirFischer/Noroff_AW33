<?php

$index = htmlspecialchars(htmlentities($_GET['p']));

switch ($index)
{
	case 'home':
		include "assets/pages/home.php";
	break;
	case 'about':
		include "assets/pages/about.php";
	break;
	case 'contact':
		include "assets/pages/contact.php";
	break;
	case 'rides':
		include "assets/pages/rides.php";
	break;
	default:
		include "assets/pages/home.php";
}

?>