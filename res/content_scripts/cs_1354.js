
function mudfish_adclean_6028c47f9894757af6a4d4e9fff09538() {
  try {
    Sizzle(`.da_login-phone`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6028c47f9894757af6a4d4e9fff09538 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6028c47f9894757af6a4d4e9fff09538, function (items) {
  if (mudfish_adclean_g_conf_6028c47f9894757af6a4d4e9fff09538.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6028c47f9894757af6a4d4e9fff09538();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6028c47f9894757af6a4d4e9fff09538();
    });
  }
});
