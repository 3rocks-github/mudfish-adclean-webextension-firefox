
function mudfish_adclean_7397808d8ed31e7854934327c154b8fe() {
  try {
    Sizzle(`#contentmemo ~ .adsbygoogle > div[style^="background-color:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7397808d8ed31e7854934327c154b8fe = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7397808d8ed31e7854934327c154b8fe, function (items) {
  if (mudfish_adclean_g_conf_7397808d8ed31e7854934327c154b8fe.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7397808d8ed31e7854934327c154b8fe();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7397808d8ed31e7854934327c154b8fe();
    });
  }
});
