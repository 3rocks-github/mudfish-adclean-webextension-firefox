
function mudfish_adclean_03aaa5e48cde266e3cd71ba1aed7ef65() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#posLeft > div[style~="width100%;font-size:"][style~="#ececec;margin-bottom:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_03aaa5e48cde266e3cd71ba1aed7ef65();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_03aaa5e48cde266e3cd71ba1aed7ef65();
  });
}
