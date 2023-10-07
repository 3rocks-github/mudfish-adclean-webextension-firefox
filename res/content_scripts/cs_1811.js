
function mudfish_adclean_75067b82129d2de89b396d4a07243ec4() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#rightwing_section .rightwing_boxNew > .rightwing_bnr`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_75067b82129d2de89b396d4a07243ec4();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_75067b82129d2de89b396d4a07243ec4();
  });
}
