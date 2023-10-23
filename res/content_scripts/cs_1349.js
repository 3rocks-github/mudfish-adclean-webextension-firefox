
function mudfish_adclean_6f32c2236eebef580f56bb1816a8c2a8() {
  try {
    Sizzle(`section[id$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6f32c2236eebef580f56bb1816a8c2a8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6f32c2236eebef580f56bb1816a8c2a8, function (items) {
  if (mudfish_adclean_g_conf_6f32c2236eebef580f56bb1816a8c2a8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6f32c2236eebef580f56bb1816a8c2a8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6f32c2236eebef580f56bb1816a8c2a8();
    });
  }
});
