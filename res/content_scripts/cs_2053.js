
function mudfish_adclean_28f03cea9c55875b18a4e9c182540a19() {
  try {
    Sizzle(`div[class*="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_28f03cea9c55875b18a4e9c182540a19 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_28f03cea9c55875b18a4e9c182540a19, function (items) {
  if (mudfish_adclean_g_conf_28f03cea9c55875b18a4e9c182540a19.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_28f03cea9c55875b18a4e9c182540a19();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
