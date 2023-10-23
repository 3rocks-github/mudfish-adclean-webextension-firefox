
function mudfish_adclean_5ce651e78c8fde9a4c8003826a15cd43() {
  try {
    Sizzle(`div[class$="_popup"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5ce651e78c8fde9a4c8003826a15cd43 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5ce651e78c8fde9a4c8003826a15cd43, function (items) {
  if (mudfish_adclean_g_conf_5ce651e78c8fde9a4c8003826a15cd43.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5ce651e78c8fde9a4c8003826a15cd43();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5ce651e78c8fde9a4c8003826a15cd43();
    });
  }
});
