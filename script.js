// ---- BOOKING FORM ----
// To change the booking form later, replace the link below.
// Every "Book us for your event" button uses it.
var FORM_URL = "https://bit.ly/LiveLensBookings";
document.querySelectorAll("a.book").forEach(function (a) {
  a.href = FORM_URL;
});

// ---- CLIENT REVIEWS ----
// To add a review, copy one line inside REVIEWS, fill it in, and redeploy.
// Keep the comma at the end of every line.
var REVIEWS = [
  { name: "Adaeze O.", event: "Wedding", rating: 5, text: "The photos and video were beautiful. Highly recommended." },
  { name: "Grace Community Church", event: "Church service", rating: 5, text: "Our live stream ran smoothly from start to finish." },
];

// Link to a Google Form (or any page) where clients can submit reviews.
// Leave empty to let clients email their review instead.
var REVIEW_FORM_URL = "";

(function () {
  var list = document.getElementById("review-list");
  if (!list) return;

  if (REVIEWS.length === 0) {
    var empty = document.createElement("div");
    empty.className = "rempty";
    empty.textContent = "Client reviews will appear here. Be the first to share your experience.";
    list.appendChild(empty);
  }

  REVIEWS.forEach(function (r) {
    var rating = r.rating || 5;
    var card = document.createElement("figure");
    card.className = "rcard";

    var stars = document.createElement("div");
    stars.className = "stars";
    stars.setAttribute("aria-label", rating + " out of 5 stars");
    stars.textContent = "\u2605".repeat(rating) + "\u2606".repeat(5 - rating);

    var quote = document.createElement("blockquote");
    quote.textContent = r.text;

    var caption = document.createElement("figcaption");
    caption.textContent = r.name;
    if (r.event) {
      var ev = document.createElement("span");
      ev.textContent = r.event;
      caption.appendChild(ev);
    }

    card.appendChild(stars);
    card.appendChild(quote);
    card.appendChild(caption);
    list.appendChild(card);
  });

  var btn = document.getElementById("review-btn");
  if (btn) {
    if (REVIEW_FORM_URL) {
      btn.href = REVIEW_FORM_URL;
      btn.target = "_blank";
      btn.rel = "noopener";
    } else {
      btn.href = "mailto:askfemiwhy@gmail.com?subject=LIVE%20LENS%20review&body=Name%3A%0AEvent%3A%0ARating%20(1-5)%3A%0AYour%20review%3A";
    }
  }
})();
