
function mudfish_adclean_e6ef57f740868369c06018060706b5b5() {
  try {
    Sizzle(`div[id^="list_read_"] ul[class*="_list"] > li:has(a[href][target="_blank"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e6ef57f740868369c06018060706b5b5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e6ef57f740868369c06018060706b5b5, function (items) {
  if (mudfish_adclean_g_conf_e6ef57f740868369c06018060706b5b5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e6ef57f740868369c06018060706b5b5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e6ef57f740868369c06018060706b5b5();
    });
  }
});
