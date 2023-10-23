
function mudfish_adclean_c557fd6c5b8b7aac9bc9a03c2a133a67() {
  try {
    Sizzle(`#danawa_main_container > .main-top > .main-top__center > .main-middlebnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c557fd6c5b8b7aac9bc9a03c2a133a67 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c557fd6c5b8b7aac9bc9a03c2a133a67, function (items) {
  if (mudfish_adclean_g_conf_c557fd6c5b8b7aac9bc9a03c2a133a67.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c557fd6c5b8b7aac9bc9a03c2a133a67();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c557fd6c5b8b7aac9bc9a03c2a133a67();
    });
  }
});
