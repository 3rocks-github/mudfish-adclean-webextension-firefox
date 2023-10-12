
function mudfish_adclean_43f7c87c1a110c11171d74fff3a0afb0() {
  try {
    Sizzle(`article[class$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_43f7c87c1a110c11171d74fff3a0afb0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_43f7c87c1a110c11171d74fff3a0afb0, function (items) {
  if (mudfish_adclean_g_conf_43f7c87c1a110c11171d74fff3a0afb0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_43f7c87c1a110c11171d74fff3a0afb0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
