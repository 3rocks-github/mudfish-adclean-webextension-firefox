
function mudfish_adclean_977dc345d5a2c00bc8c45549aa53c7d1() {
  try {
    Sizzle(`#aside .noticea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_977dc345d5a2c00bc8c45549aa53c7d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_977dc345d5a2c00bc8c45549aa53c7d1, function (items) {
  if (mudfish_adclean_g_conf_977dc345d5a2c00bc8c45549aa53c7d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_977dc345d5a2c00bc8c45549aa53c7d1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_977dc345d5a2c00bc8c45549aa53c7d1();
    });
  }
});
