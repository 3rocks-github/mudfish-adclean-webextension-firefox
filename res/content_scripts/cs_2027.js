
function mudfish_adclean_a0ae16baa4e73c5e26797715a524185b() {
  try {
    Sizzle(`a[href*="//wrd.appstory.co.kr/rd.flad?"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a0ae16baa4e73c5e26797715a524185b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a0ae16baa4e73c5e26797715a524185b, function (items) {
  if (mudfish_adclean_g_conf_a0ae16baa4e73c5e26797715a524185b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a0ae16baa4e73c5e26797715a524185b();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
