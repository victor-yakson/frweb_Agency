$(document).ready(function () {
  // wow initiation
  new WOW().init();

  // navigation bar toggle
  $("#navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(400);
  });

  // navbar bg change on scroll
  $(window).scroll(function () {
    let pos = $(window).scrollTop();
    if (pos >= 100) {
      $(".navbar").addClass("cng-navbar");
    } else {
      $(".navbar").removeClass("cng-navbar");
    }
  });

  // sample video popup
  $(document).ready(function () {
    $(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  });

  // team carousel
  $(".team .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // faq accordion
  $(".faq-head").each(function () {
    $(this).click(function () {
      $(this).next().toggleClass("show-faq-content");
      let icon = $(this).children("span").children("i").attr("class");

      if (icon == "fas fa-plus") {
        $(this).children("span").html('<i class = "fas fa-minus"></i>');
      } else {
        $(this).children("span").html('<i class = "fas fa-plus"></i>');
      }
    });
  });

  // testimonial carousel
  $(".testimonial .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1,
  });
});
/* Whatsapp Chat Widget by www.idblanter.com */
$(document).on("click", "#send-it", function () {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function () {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new").addClass("show").removeClass("hide"),
      $(".home-chat,.head-home").addClass("hide").removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
  });
// form
document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.message.value = "";
});

/**
 * Readmore
 */

document.addEventListener("DOMContentLoaded", function () {
  const readMoreButton = document.querySelector(".about-btn");
  const additionalText = document.querySelector(".additional-text");
  readMoreButton.addEventListener("click", function () {
    if (additionalText.style.display === "none") {
      additionalText.innerHTML = `
            <!-- Additional text to be displayed -->
            <p class="text">
            <strong> Mission: </strong> Our mission is to empower local businesses, schools, and hotels with the power of the digital world by providing them with exceptional, user-friendly, and visually appealing websites. We aim to bridge the gap between the digital and physical worlds, enhancing their online presence and fostering a seamless connection with their audience.
          </p>
          <p class="text">
            <strong> Vision statement</strong>: At FR-web, our vision is to become the leading digital partner for local businesses, schools, and hotels, setting the benchmark for excellence in web design and development. We envision a future where every local entity has a website that not only meets but exceeds their expectations, serving as a powerful tool for growth, engagement, and success.
          </p>
        `;
      additionalText.style.display = "block";
      readMoreButton.textContent = "Read Less";
    } else {
      additionalText.style.display = "none";
      readMoreButton.textContent = "Read More...";
    }
  });
});
// accordion function

 


// send data from form to email
function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "victoryakubu09@gmail.com",
    Password: "34F93B12E7C2427CA0B5D8E04DDC26FDBD5C",
    To: "frwebglobal@gmail.com",
    From: "victoryakubu09@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
