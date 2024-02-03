
function mudfish_adclean_ca6b103f80f8c7a886558adfd8b363d5() {
  try {
    Sizzle(`.xe_content span ~ div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ca6b103f80f8c7a886558adfd8b363d5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ca6b103f80f8c7a886558adfd8b363d5, function (items) {
  if (mudfish_adclean_g_conf_ca6b103f80f8c7a886558adfd8b363d5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ca6b103f80f8c7a886558adfd8b363d5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ca6b103f80f8c7a886558adfd8b363d5();
    });
  }
});
