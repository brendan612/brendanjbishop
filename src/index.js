import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

$(function() {
  // Select all links with hashes
  $(".nav-item a").click(function(event) {
    // On-page links
    if (
      window.location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      window.location.hostname === this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > $(".about").scrollTop()) {
      $("#to-top").show();
    } else {
      $("#to-top").hide();
    }
  });

  $("#to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000,
      function() {
        $("#to-top").hide();
      }
    );
  });
});
