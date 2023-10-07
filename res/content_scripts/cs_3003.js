
function mudfish_adclean_4e605217bf3e83789c03f735c96fc06d() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_5`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_4e605217bf3e83789c03f735c96fc06d();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_4e605217bf3e83789c03f735c96fc06d();
  });
}
