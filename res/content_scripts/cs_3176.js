
function mudfish_adclean_a6d237984961355ce2a503d4919d33d0() {
  try {
    Sizzle(`img[src*=".imgbox.com/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a6d237984961355ce2a503d4919d33d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a6d237984961355ce2a503d4919d33d0, function (items) {
  if (mudfish_adclean_g_conf_a6d237984961355ce2a503d4919d33d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a6d237984961355ce2a503d4919d33d0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a6d237984961355ce2a503d4919d33d0();
    });
  }
});
