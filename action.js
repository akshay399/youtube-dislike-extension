var url = "";
var obj = "";
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0].url);
  url = tabs[0].url;
});
var element = document.querySelector("button");

console.log("ggbutton: ", element);
var videoId = "";
function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length == 11) {
    var b = match[7];
    console.log("link b", b);
    return b;
  } else {
    alert("Make sure you are on a page where youtube video is opened");
  }
}
const sendData = (dislikes) => {
  let params = {
    active: true,
    currentWindow: true,
  };
  chrome.tabs.query(params, gotTabs);
  function gotTabs(tabs) {
    let msg = {
      txt: dislikes,
    };
    console.log("tabbb", tabs);
    chrome.tabs.sendMessage(tabs[0].id, msg);
  }
};
const fetchFunction = () => {
  // alert("clciked");
  // let params = {
  //   active: true,
  //   currentWindow: true,
  // };
  // chrome.tabs.query(params, gotTabs);
  // function gotTabs(tabs) {
  //   let msg = {
  //     txt: "hello",
  //   };
  //   console.log("tabbb", tabs);
  //   chrome.tabs.sendMessage(tabs[0].id, msg);
  // }

  var videoId = youtube_parser(url);
  fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`)
    .then((response) => response.json())
    .then((data) => {
      sendData(data.dislikes);
    });
  console.log("boooo", obj);
};
element.addEventListener("click", fetchFunction);
