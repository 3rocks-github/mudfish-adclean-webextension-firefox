
function mudfish_adclean_46d66b7a23c0798f51d77eb49f5cbe66() {
  try {
    Sizzle(`[style="margin-bottom: 20px;"].row.row-15`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_46d66b7a23c0798f51d77eb49f5cbe66 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_46d66b7a23c0798f51d77eb49f5cbe66, function (items) {
  if (mudfish_adclean_g_conf_46d66b7a23c0798f51d77eb49f5cbe66.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_46d66b7a23c0798f51d77eb49f5cbe66();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_46d66b7a23c0798f51d77eb49f5cbe66();
    });
  }
});
