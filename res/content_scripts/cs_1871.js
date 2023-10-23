
function mudfish_adclean_fd150859655b129d819fe50cc883a9af() {
  try {
    Sizzle(`iframe[src^="/banner/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fd150859655b129d819fe50cc883a9af = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fd150859655b129d819fe50cc883a9af, function (items) {
  if (mudfish_adclean_g_conf_fd150859655b129d819fe50cc883a9af.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fd150859655b129d819fe50cc883a9af();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fd150859655b129d819fe50cc883a9af();
    });
  }
});
