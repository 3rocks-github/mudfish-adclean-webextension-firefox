
function mudfish_adclean_189ab8c79b7089faa88dfabcf428edeb() {
  try {
    Sizzle(`#shopping_wrap`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_189ab8c79b7089faa88dfabcf428edeb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_189ab8c79b7089faa88dfabcf428edeb, function (items) {
  if (mudfish_adclean_g_conf_189ab8c79b7089faa88dfabcf428edeb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_189ab8c79b7089faa88dfabcf428edeb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
