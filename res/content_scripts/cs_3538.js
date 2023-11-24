
function mudfish_adclean_7bb6988eed38321fc8ccf3e3eeb5baac() {
  try {
    Sizzle(`#pp_bd *:is(.ppatc_header, .bd_header) ~ div[class^="cd_"]:has(div[style=""].xe-widget-wrapper > div[style*=" "])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7bb6988eed38321fc8ccf3e3eeb5baac = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7bb6988eed38321fc8ccf3e3eeb5baac, function (items) {
  if (mudfish_adclean_g_conf_7bb6988eed38321fc8ccf3e3eeb5baac.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7bb6988eed38321fc8ccf3e3eeb5baac();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7bb6988eed38321fc8ccf3e3eeb5baac();
    });
  }
});
