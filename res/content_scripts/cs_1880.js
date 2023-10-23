
function mudfish_adclean_a27266c4690cdc91788b4f1fe08c8c7e() {
  try {
    Sizzle(`div[class^="advert_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a27266c4690cdc91788b4f1fe08c8c7e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a27266c4690cdc91788b4f1fe08c8c7e, function (items) {
  if (mudfish_adclean_g_conf_a27266c4690cdc91788b4f1fe08c8c7e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a27266c4690cdc91788b4f1fe08c8c7e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a27266c4690cdc91788b4f1fe08c8c7e();
    });
  }
});
