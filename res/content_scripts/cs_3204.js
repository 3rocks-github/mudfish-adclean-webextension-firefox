
function mudfish_adclean_a8aa466fa62907a596d0dcf3208760be() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[data-nclicks-area-code] > div[class="place_section"]:not([data-nclicks-area-code]):has(div[id*="_ad_"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a8aa466fa62907a596d0dcf3208760be();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a8aa466fa62907a596d0dcf3208760be();
  });
}
