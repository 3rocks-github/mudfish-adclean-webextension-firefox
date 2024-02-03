
function mudfish_adclean_a14d4243587e47ae86d3f549282646bd() {
  try {
    Sizzle(`tbody td > div[id^="MAX_"]:has(#gpt-passback)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a14d4243587e47ae86d3f549282646bd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a14d4243587e47ae86d3f549282646bd, function (items) {
  if (mudfish_adclean_g_conf_a14d4243587e47ae86d3f549282646bd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a14d4243587e47ae86d3f549282646bd();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a14d4243587e47ae86d3f549282646bd();
    });
  }
});
