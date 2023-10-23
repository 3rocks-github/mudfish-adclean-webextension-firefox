
function mudfish_adclean_d01edb34d3872a501bc74c8a4579baa8() {
  try {
    Sizzle(`.nav_container > .content_view_list > div[class^="list_bottom_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d01edb34d3872a501bc74c8a4579baa8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d01edb34d3872a501bc74c8a4579baa8, function (items) {
  if (mudfish_adclean_g_conf_d01edb34d3872a501bc74c8a4579baa8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d01edb34d3872a501bc74c8a4579baa8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d01edb34d3872a501bc74c8a4579baa8();
    });
  }
});
