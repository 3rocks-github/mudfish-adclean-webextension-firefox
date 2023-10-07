
function mudfish_adclean_7bdca412d7ae0a43e2823ae513043283() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.containerWrap > section[style^="padding"]:not([class])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_7bdca412d7ae0a43e2823ae513043283();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_7bdca412d7ae0a43e2823ae513043283();
  });
}
