
function mudfish_adclean_f7b7fb14651b924b3adb3953e93c45ff() {
  try {
    Sizzle(`#main_visual`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f7b7fb14651b924b3adb3953e93c45ff = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f7b7fb14651b924b3adb3953e93c45ff, function (items) {
  if (mudfish_adclean_g_conf_f7b7fb14651b924b3adb3953e93c45ff.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f7b7fb14651b924b3adb3953e93c45ff();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
