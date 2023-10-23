
function mudfish_adclean_4407516cf2c8f6bd3d5513d79071b7db() {
  try {
    Sizzle(`.content_list.search > div[class^="list_center_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4407516cf2c8f6bd3d5513d79071b7db = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4407516cf2c8f6bd3d5513d79071b7db, function (items) {
  if (mudfish_adclean_g_conf_4407516cf2c8f6bd3d5513d79071b7db.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4407516cf2c8f6bd3d5513d79071b7db();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4407516cf2c8f6bd3d5513d79071b7db();
    });
  }
});
