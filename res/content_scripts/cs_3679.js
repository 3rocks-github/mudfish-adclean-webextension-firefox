
function mudfish_adclean_d7f8c800375fb45cab212510f841369c() {
  try {
    Sizzle(`article > div[class]:not([class*=" "]) ~ div[class*=" "]:has(iframe[src*="arca.live/external/callad"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d7f8c800375fb45cab212510f841369c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d7f8c800375fb45cab212510f841369c, function (items) {
  if (mudfish_adclean_g_conf_d7f8c800375fb45cab212510f841369c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d7f8c800375fb45cab212510f841369c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d7f8c800375fb45cab212510f841369c();
    });
  }
});
