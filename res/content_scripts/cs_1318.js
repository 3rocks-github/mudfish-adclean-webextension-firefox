
function mudfish_adclean_35b636648421929d25e58215006c2a60() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[itemprop="articleBody"].article_info > div[id^="slot"][style^="text-align:"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_35b636648421929d25e58215006c2a60();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_35b636648421929d25e58215006c2a60();
  });
}
