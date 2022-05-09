
let copyText = "something";
function copy() {
  navigator.clipboard.writeText(copyText);
}

function show() {
  let shortUrl = document.getElementById("shortUrl");
  shortUrl.classList.remove("d-none");
}

