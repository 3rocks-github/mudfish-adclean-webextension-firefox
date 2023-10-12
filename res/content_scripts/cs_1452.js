
function mudfish_adclean_6c68f4dc6fa622fb8e4a0daa1559b54a() {
  try {
    Sizzle(`#cards > div[class*="_"]:not([id]).card`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6c68f4dc6fa622fb8e4a0daa1559b54a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6c68f4dc6fa622fb8e4a0daa1559b54a, function (items) {
  if (mudfish_adclean_g_conf_6c68f4dc6fa622fb8e4a0daa1559b54a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6c68f4dc6fa622fb8e4a0daa1559b54a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
