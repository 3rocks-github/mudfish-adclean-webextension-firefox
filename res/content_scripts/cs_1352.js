
function mudfish_adclean_eaeecb26177b45424cd6a183ad93dd9d() {
  try {
    Sizzle(`.m_main_top_banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_eaeecb26177b45424cd6a183ad93dd9d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_eaeecb26177b45424cd6a183ad93dd9d, function (items) {
  if (mudfish_adclean_g_conf_eaeecb26177b45424cd6a183ad93dd9d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_eaeecb26177b45424cd6a183ad93dd9d();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_eaeecb26177b45424cd6a183ad93dd9d();
    });
  }
});
