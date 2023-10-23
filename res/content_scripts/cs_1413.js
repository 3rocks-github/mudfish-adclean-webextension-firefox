
function mudfish_adclean_9e611db398659a4e03ba6d776d911ed4() {
  try {
    Sizzle(`#ssp-adpost`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9e611db398659a4e03ba6d776d911ed4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9e611db398659a4e03ba6d776d911ed4, function (items) {
  if (mudfish_adclean_g_conf_9e611db398659a4e03ba6d776d911ed4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9e611db398659a4e03ba6d776d911ed4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9e611db398659a4e03ba6d776d911ed4();
    });
  }
});
