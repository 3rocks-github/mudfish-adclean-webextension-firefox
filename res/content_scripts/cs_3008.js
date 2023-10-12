
function mudfish_adclean_f838981a866e036bdd11d48d2dc78336() {
  try {
    Sizzle(`div[style^="margin-left:"].yPartnerPop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f838981a866e036bdd11d48d2dc78336 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f838981a866e036bdd11d48d2dc78336, function (items) {
  if (mudfish_adclean_g_conf_f838981a866e036bdd11d48d2dc78336.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f838981a866e036bdd11d48d2dc78336();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
