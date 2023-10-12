
function mudfish_adclean_858760ad6f84e04b372664ff42b4e45f() {
  try {
    Sizzle(`.today-smart-shopping`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_858760ad6f84e04b372664ff42b4e45f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_858760ad6f84e04b372664ff42b4e45f, function (items) {
  if (mudfish_adclean_g_conf_858760ad6f84e04b372664ff42b4e45f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_858760ad6f84e04b372664ff42b4e45f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
