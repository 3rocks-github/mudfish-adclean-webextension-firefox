
function mudfish_adclean_c557fd6c5b8b7aac9bc9a03c2a133a67() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#danawa_main_container > .main-top > .main-top__center > .main-middlebnr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c557fd6c5b8b7aac9bc9a03c2a133a67();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c557fd6c5b8b7aac9bc9a03c2a133a67();
  });
}
