
function mudfish_adclean_ee662dcc2453f439e3b885ff72987bf1() {
  try {
    Sizzle(`div[class^="col-md-"] div[class*="-main-"]:contains(/보증업체|검증업체/)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ee662dcc2453f439e3b885ff72987bf1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ee662dcc2453f439e3b885ff72987bf1, function (items) {
  if (mudfish_adclean_g_conf_ee662dcc2453f439e3b885ff72987bf1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ee662dcc2453f439e3b885ff72987bf1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ee662dcc2453f439e3b885ff72987bf1();
    });
  }
});
