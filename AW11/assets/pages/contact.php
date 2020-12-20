<style>
	header nav ul #contact {
		border-bottom:  3px solid orange;
		border-top:  1px solid orange;
	}
</style>
<meta name="description" content="Send us an email if you have any questions!">
<main>
	<h1>Contact us</h1>
	<form id="contact_form" action="#" method="post">
		<input type="text" name="name" id="contact_name" placeholder="Name" required/>
		<input type="mail" name="mail" id="contact_mail" placeholder="E-mail" required/>
		<input type="tel" name="name" id="contact_phone" placeholder="Phone" required/>
		<textarea name="content" id="contact_content" cols="30" rows="10" placeholder="What would you like to tell us?" required></textarea>
		<input class="btn btn-primary" id="form_submit_contact" type="button" value="submit">
	</form>
</main>
<script src="assets/controllers/contact/script.js"></script>
