/* global Handlebars, prompt */
"use strict";

// The client-side "app" which leverages the shared Handlebars "echo" template.
// This will prompt the user for a message, then echo it out by rendering the
// message using the shared template which was exposed by the server.
(function () {
  const button = document.getElementById("say");
  const echos = document.getElementById("echos");
  if (!button || !echos) {
    return
  }

  button.addEventListener("click", function (e) {
    const message = prompt("Say Something:", "This will echo");
    echos.innerHTML = Handlebars.templates.echo({ message });
  }, false);
}());
