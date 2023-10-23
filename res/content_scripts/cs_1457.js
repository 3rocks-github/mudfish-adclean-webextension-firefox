
function mudfish_adclean_84cc0e6fec3fc4c7f0ec524af368631c() {
  try {
    Sizzle(`div[id*="_right_list_"] ~ div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84cc0e6fec3fc4c7f0ec524af368631c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84cc0e6fec3fc4c7f0ec524af368631c, function (items) {
  if (mudfish_adclean_g_conf_84cc0e6fec3fc4c7f0ec524af368631c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84cc0e6fec3fc4c7f0ec524af368631c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_84cc0e6fec3fc4c7f0ec524af368631c();
    });
  }
});
