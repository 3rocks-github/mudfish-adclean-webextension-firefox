
function mudfish_adclean_0089580c15027ecc08cebdd9b14a607e() {
  try {
    Sizzle(`#contentmemo ~ .adsbygoogle > div[style^="font-size:"]`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0089580c15027ecc08cebdd9b14a607e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0089580c15027ecc08cebdd9b14a607e, function (items) {
  if (mudfish_adclean_g_conf_0089580c15027ecc08cebdd9b14a607e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0089580c15027ecc08cebdd9b14a607e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0089580c15027ecc08cebdd9b14a607e();
    });
  }
});
