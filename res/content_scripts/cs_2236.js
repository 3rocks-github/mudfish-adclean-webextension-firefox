
function mudfish_adclean_7ea3979715243023570f37aad64e773a() {
  try {
    Sizzle(`#id_my_menu_area ~ #main_sky_banner_area`).forEach(element => {
      element.style.marginLeft = "685px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7ea3979715243023570f37aad64e773a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7ea3979715243023570f37aad64e773a, function (items) {
  if (mudfish_adclean_g_conf_7ea3979715243023570f37aad64e773a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7ea3979715243023570f37aad64e773a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7ea3979715243023570f37aad64e773a();
    });
  }
});
