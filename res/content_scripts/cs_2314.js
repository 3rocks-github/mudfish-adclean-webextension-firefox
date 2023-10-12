
function mudfish_adclean_39ad89d8b43e0a5b7ceaa98953389dae() {
  try {
    Sizzle(`form[name="loginForm"][action*="login.yp"] > table`).forEach(element => {
      element.style.marginLeft = "calc(25% - 27px) !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_39ad89d8b43e0a5b7ceaa98953389dae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_39ad89d8b43e0a5b7ceaa98953389dae, function (items) {
  if (mudfish_adclean_g_conf_39ad89d8b43e0a5b7ceaa98953389dae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_39ad89d8b43e0a5b7ceaa98953389dae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
