
function mudfish_adclean_9719ecf84c3d0941b119a3e3acbe7ed9() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content-header ~ div[class^="css-"][class*=" "]:has(div[id^="div-gpt-ad-"]):not(:has(#content-container)):not(#content-container)`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_9719ecf84c3d0941b119a3e3acbe7ed9();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_9719ecf84c3d0941b119a3e3acbe7ed9();
  });
}
