
function mudfish_adclean_02641aea3643237f86c2d54de05541df() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#r_aside center > div[class="bn"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_02641aea3643237f86c2d54de05541df();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_02641aea3643237f86c2d54de05541df();
  });
}
