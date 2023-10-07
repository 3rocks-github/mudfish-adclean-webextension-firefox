
function mudfish_adclean_6f32c2236eebef580f56bb1816a8c2a8() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`section[id$="_banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_6f32c2236eebef580f56bb1816a8c2a8();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_6f32c2236eebef580f56bb1816a8c2a8();
  });
}
