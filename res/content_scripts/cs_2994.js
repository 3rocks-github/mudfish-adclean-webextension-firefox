
function mudfish_adclean_a7b02db9caab55ad8dbb71efdb63f954() {
  try {
    Sizzle(`div[type="DETAIL"] section[aria-label="새 상품은 어떠세요?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7b02db9caab55ad8dbb71efdb63f954 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7b02db9caab55ad8dbb71efdb63f954, function (items) {
  if (mudfish_adclean_g_conf_a7b02db9caab55ad8dbb71efdb63f954.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7b02db9caab55ad8dbb71efdb63f954();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a7b02db9caab55ad8dbb71efdb63f954();
    });
  }
});
