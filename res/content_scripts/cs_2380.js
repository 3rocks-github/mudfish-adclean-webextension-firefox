
function mudfish_adclean_e528e9c7e3b9a2a32869e7a2f7d7e473() {
  try {
    Sizzle(`#header`).forEach(element => {
      element.style.height = "100px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e528e9c7e3b9a2a32869e7a2f7d7e473 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e528e9c7e3b9a2a32869e7a2f7d7e473, function (items) {
  if (mudfish_adclean_g_conf_e528e9c7e3b9a2a32869e7a2f7d7e473.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e528e9c7e3b9a2a32869e7a2f7d7e473();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e528e9c7e3b9a2a32869e7a2f7d7e473();
    });
  }
});
