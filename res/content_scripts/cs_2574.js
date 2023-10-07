
function mudfish_adclean_c8f8c56d8a0b6194c033785551b1fe46() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table.gall_list tr:not([data-type][data-no]):has(td:contains(AD))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c8f8c56d8a0b6194c033785551b1fe46();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c8f8c56d8a0b6194c033785551b1fe46();
  });
}
