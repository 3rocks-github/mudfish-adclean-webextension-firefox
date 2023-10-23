
function mudfish_adclean_5eb785e8edf6ec0fe1ab29dbe1a0d796() {
  try {
    Sizzle(`div[style].row.no-gutters > .col-3:not([style])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5eb785e8edf6ec0fe1ab29dbe1a0d796 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5eb785e8edf6ec0fe1ab29dbe1a0d796, function (items) {
  if (mudfish_adclean_g_conf_5eb785e8edf6ec0fe1ab29dbe1a0d796.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5eb785e8edf6ec0fe1ab29dbe1a0d796();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5eb785e8edf6ec0fe1ab29dbe1a0d796();
    });
  }
});
