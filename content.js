console.log("ext loaded");

const gotMessage = (message, sender, sendResponse) => {
  console.log("messagagaga", message.txt);
  var div_list = document.querySelectorAll(
    "yt-formatted-string#text.style-scope.ytd-toggle-button-renderer.style-text"
  );
  var div_array = [...div_list];
  div_array.forEach((div) => {
    console.log(div.innerHTML);
    console.log("single", div);
  });

  div_array[1].innerHTML = message.txt;
  localStorage.setItem("dislike", message.txt);
  console.log("yasss", localStorage.getItem("dislike"));
};
localStorage.setItem("dislike", "message.txt");
chrome.runtime.onMessage.addListener(gotMessage);

const timer = () => {
  console.log("AFTER", document.getElementsByTagName("button"));

  var domRef = document.querySelectorAll(
    "yt-formatted-string#text.style-scope.ytd-toggle-button-renderer.style-text"
  );
  const spanList = [...domRef];
  console.log("dr", domRef);
  var div_list = document.querySelectorAll(
    "yt-formatted-string#text.style-scope.ytd-toggle-button-renderer.style-text"
  );
  var div_array = [...div_list];
  div_array.forEach((div) => {
    console.log(div.innerHTML);
    console.log("single", div);
  });
  var local_dislikes = localStorage.getItem("dislikes");
  div_array[1].innerHTML = local_dislikes;
};
// setInterval(timer, 8000);
