
function mudfish_adclean_cc35cbcc0e65a9a2dadcddf48b00dfde() {
  try {
    Sizzle(`div[id*="-banner-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cc35cbcc0e65a9a2dadcddf48b00dfde = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cc35cbcc0e65a9a2dadcddf48b00dfde, function (items) {
  if (mudfish_adclean_g_conf_cc35cbcc0e65a9a2dadcddf48b00dfde.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cc35cbcc0e65a9a2dadcddf48b00dfde();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
