
function mudfish_adclean_643f54022463b15eacb36ef8917d0f12() {
  try {
    Sizzle(`aside > div[class*=" "][id][style] > div[id][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_643f54022463b15eacb36ef8917d0f12 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_643f54022463b15eacb36ef8917d0f12, function (items) {
  if (mudfish_adclean_g_conf_643f54022463b15eacb36ef8917d0f12.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_643f54022463b15eacb36ef8917d0f12();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_643f54022463b15eacb36ef8917d0f12();
    });
  }
});
