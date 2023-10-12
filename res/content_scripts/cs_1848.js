
function mudfish_adclean_c7a41feeb6dacb211f6b6bf300b70397() {
  try {
    Sizzle(`div.max-w-screen-lg > .relative > div > div[class=""]:nth-child(1)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c7a41feeb6dacb211f6b6bf300b70397 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c7a41feeb6dacb211f6b6bf300b70397, function (items) {
  if (mudfish_adclean_g_conf_c7a41feeb6dacb211f6b6bf300b70397.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c7a41feeb6dacb211f6b6bf300b70397();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
