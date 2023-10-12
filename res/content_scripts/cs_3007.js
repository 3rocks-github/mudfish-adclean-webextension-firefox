
function mudfish_adclean_2af422718819209e68fa4fa5421b03ae() {
  try {
    Sizzle(`#bnPartnerWing`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2af422718819209e68fa4fa5421b03ae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2af422718819209e68fa4fa5421b03ae, function (items) {
  if (mudfish_adclean_g_conf_2af422718819209e68fa4fa5421b03ae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2af422718819209e68fa4fa5421b03ae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
