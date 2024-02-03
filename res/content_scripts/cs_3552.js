
function mudfish_adclean_37fe2b2eeccf394ef914ffab74feae3e() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(> div[id][class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_37fe2b2eeccf394ef914ffab74feae3e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_37fe2b2eeccf394ef914ffab74feae3e, function (items) {
  if (mudfish_adclean_g_conf_37fe2b2eeccf394ef914ffab74feae3e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_37fe2b2eeccf394ef914ffab74feae3e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_37fe2b2eeccf394ef914ffab74feae3e();
    });
  }
});
