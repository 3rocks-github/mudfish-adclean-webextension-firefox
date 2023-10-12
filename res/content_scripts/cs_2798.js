
function mudfish_adclean_7f8610f5b42d482eb0bd590758673da1() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7f8610f5b42d482eb0bd590758673da1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7f8610f5b42d482eb0bd590758673da1, function (items) {
  if (mudfish_adclean_g_conf_7f8610f5b42d482eb0bd590758673da1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7f8610f5b42d482eb0bd590758673da1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
