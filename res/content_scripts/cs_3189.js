
function mudfish_adclean_58c5710422f7f3fd617bb843b1c7eb47() {
  try {
    Sizzle(`img[src^="/tokinbtoki/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_58c5710422f7f3fd617bb843b1c7eb47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_58c5710422f7f3fd617bb843b1c7eb47, function (items) {
  if (mudfish_adclean_g_conf_58c5710422f7f3fd617bb843b1c7eb47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_58c5710422f7f3fd617bb843b1c7eb47();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_58c5710422f7f3fd617bb843b1c7eb47();
    });
  }
});
