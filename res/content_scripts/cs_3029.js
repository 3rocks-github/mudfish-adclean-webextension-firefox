
function mudfish_adclean_2bff004585dbc2c82ac01142f3007d87() {
  try {
    Sizzle(`#ySContent .loginCont`).forEach(element => {
      element.style.marginLeft = "200px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2bff004585dbc2c82ac01142f3007d87 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2bff004585dbc2c82ac01142f3007d87, function (items) {
  if (mudfish_adclean_g_conf_2bff004585dbc2c82ac01142f3007d87.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2bff004585dbc2c82ac01142f3007d87();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
