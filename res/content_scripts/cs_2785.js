
function mudfish_adclean_9e0848c4917509b951e3cd0c7dc1bbbb() {
  try {
    Sizzle(`div[id^="obx_foodname_goods"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9e0848c4917509b951e3cd0c7dc1bbbb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9e0848c4917509b951e3cd0c7dc1bbbb, function (items) {
  if (mudfish_adclean_g_conf_9e0848c4917509b951e3cd0c7dc1bbbb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9e0848c4917509b951e3cd0c7dc1bbbb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9e0848c4917509b951e3cd0c7dc1bbbb();
    });
  }
});
