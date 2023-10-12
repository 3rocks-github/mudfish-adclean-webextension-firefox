
function mudfish_adclean_913e6ef58825291893165bc715058353() {
  try {
    Sizzle(`#login_box ~ .roll`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_913e6ef58825291893165bc715058353 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_913e6ef58825291893165bc715058353, function (items) {
  if (mudfish_adclean_g_conf_913e6ef58825291893165bc715058353.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_913e6ef58825291893165bc715058353();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
