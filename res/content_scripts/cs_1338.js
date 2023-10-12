
function mudfish_adclean_f0206d3630efb777be3aa7cb399209b2() {
  try {
    Sizzle(`div[data-bottom-banner]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f0206d3630efb777be3aa7cb399209b2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f0206d3630efb777be3aa7cb399209b2, function (items) {
  if (mudfish_adclean_g_conf_f0206d3630efb777be3aa7cb399209b2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f0206d3630efb777be3aa7cb399209b2();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
