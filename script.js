// To change the booking form later, replace the link below. Every "Book us for your event" button uses it.
var FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc3pTaTn1z4ojJQWaFriO1iw4z8a3EAFUXCkdNnrcIrQNuMnA/viewform?usp=header";
document.querySelectorAll("a.book").forEach(function(a){a.href=FORM_URL;});
