
function mudfish_adclean_05cc0036a40cef291a1454ff120cdbb4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#aside #ol_before ~ div[style]:not(:has(.tbl_head_lt))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_05cc0036a40cef291a1454ff120cdbb4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_05cc0036a40cef291a1454ff120cdbb4();
  });
}
