
function mudfish_adclean_092a90171b1efb8e39865b1cb56b5a46() {
  try {
    Sizzle(`div[style]#cenArea > .today`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_092a90171b1efb8e39865b1cb56b5a46 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_092a90171b1efb8e39865b1cb56b5a46, function (items) {
  if (mudfish_adclean_g_conf_092a90171b1efb8e39865b1cb56b5a46.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_092a90171b1efb8e39865b1cb56b5a46();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_092a90171b1efb8e39865b1cb56b5a46();
    });
  }
});
