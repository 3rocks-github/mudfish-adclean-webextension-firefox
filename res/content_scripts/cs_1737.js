
function mudfish_adclean_d5db257a8024982e63aca3cf8ceccdc8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`img[src^="/img/"][src$=".gif"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_d5db257a8024982e63aca3cf8ceccdc8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_d5db257a8024982e63aca3cf8ceccdc8();
  });
}
