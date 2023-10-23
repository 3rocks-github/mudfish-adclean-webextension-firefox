
function mudfish_adclean_9203292c027dd60a98105c110af68d90() {
  try {
    Sizzle(`div[id$="-banner"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9203292c027dd60a98105c110af68d90 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9203292c027dd60a98105c110af68d90, function (items) {
  if (mudfish_adclean_g_conf_9203292c027dd60a98105c110af68d90.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9203292c027dd60a98105c110af68d90();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9203292c027dd60a98105c110af68d90();
    });
  }
});
