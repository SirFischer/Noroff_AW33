
document.querySelector("#form_submit_contact").addEventListener("click", () => {
	if (document.querySelector("#contact_form").reportValidity())
		document.querySelector("#contact_form").submit();
	else
	{
		let response = "One or more fields are inalid:\n";
		if (document.querySelector("#contact_name").value == "")
			response += "Name field is empty.\n";
		if (document.querySelector("#contact_mail").value == "")
			response += "Email is not valid.\n";
		if (document.querySelector("#contact_phone").value == "")
			response += "Number field is not valid.\n";
		if (document.querySelector("#contact_content").value == "")
			response += "Message is empty.\n";
		alert(response);
	}
})