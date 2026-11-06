// To change the booking form later, replace the link below. Every "Book us for your event" button uses it.
var FORM_URL = "https://bit.ly/LiveLensBookings";
document.querySelectorAll("a.book").forEach(function(a){a.href=FORM_URL;});

// ---- CLIENT REVIEWS ----
// To add a review, copy one line inside REVIEWS, fill it in, and redeploy.
// Example: { name: "Client name", event: "Wedding", rating: 5, text: "What the client said." },
var REVIEWS = [ {name: "Daniel & Wife.", event: "Wedding", rating: 5, text: I highly recommend LIVE LENS to individuals, organisations, and businesses looking for reliable, creative, and professional media coverage."}, 
{ name: "Grace Community Church", event: "Church service", rating: 5, text: "Our live stream ran smoothly from start to finish." },
  ];

// Link to a Google Form (or any page) where clients can submit reviews.
// Leave empty to let clients email their review instead.
var REVIEW_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc3pTaTn1z4ojJQWaFriO1iw4z8a3EAFUXCkdNnrcIrQNuMnA/viewform?usp=header";

(function(){
  var list = document.getElementById("review-list");
  if (REVIEWS.length === 0) {
    var e = document.createElement("div"); e.className = "rempty";
    e.textContent = "Client reviews will appear here. Be the first to share your experience.";
    list.appendChild(e);
  }
  REVIEWS.forEach(function(r){
    var f = document.createElement("figure"); f.className = "rcard";
    var s = document.createElement("div"); s.className = "stars"; s.setAttribute("aria-label", r.rating + " out of 5 stars");
    s.textContent = "\u2605".repeat(r.rating || 5) + "\u2606".repeat(5 - (r.rating || 5));
    var q = document.createElement("blockquote"); q.textContent = r.text;
    var c = document.createElement("figcaption"); c.textContent = r.name;
    if (r.event) { var ev = document.createElement("span"); ev.textContent = r.event; c.appendChild(ev); }
    f.appendChild(s); f.appendChild(q); f.appendChild(c); list.appendChild(f);
  });
  var b = document.getElementById("review-btn");
  if (REVIEW_FORM_URL) { b.href = REVIEW_FORM_URL; b.target = "_blank"; b.rel = "noopener"; }
  else { b.href = "mailto:askfemiwhy@gmail.com?subject=LIVE%20LENS%20review&body=Name%3A%0AEvent%3A%0ARating%20(1-5)%3A%0AYour%20review%3A"; }
})();
