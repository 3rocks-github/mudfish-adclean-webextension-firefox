
function mudfish_adclean_3f9e5c10deae67456eaf9f5187d299ba() {
  try {
    Sizzle(`.now_content_ads__wrapper`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3f9e5c10deae67456eaf9f5187d299ba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3f9e5c10deae67456eaf9f5187d299ba, function (items) {
  if (mudfish_adclean_g_conf_3f9e5c10deae67456eaf9f5187d299ba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3f9e5c10deae67456eaf9f5187d299ba();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
