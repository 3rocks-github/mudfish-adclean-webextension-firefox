
function mudfish_adclean_148df30d347fafed59c2b6044c218fc1() {
  try {
    Sizzle(`*:not(footer) > div[class^="main-"][class$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_148df30d347fafed59c2b6044c218fc1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_148df30d347fafed59c2b6044c218fc1, function (items) {
  if (mudfish_adclean_g_conf_148df30d347fafed59c2b6044c218fc1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_148df30d347fafed59c2b6044c218fc1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
