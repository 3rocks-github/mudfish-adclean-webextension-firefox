
function mudfish_adclean_fb070378a1a505b8a4fe160eb83d908b() {
  try {
    Sizzle(`#mainContainer #content  .ct2 > section ~ *`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fb070378a1a505b8a4fe160eb83d908b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fb070378a1a505b8a4fe160eb83d908b, function (items) {
  if (mudfish_adclean_g_conf_fb070378a1a505b8a4fe160eb83d908b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fb070378a1a505b8a4fe160eb83d908b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fb070378a1a505b8a4fe160eb83d908b();
    });
  }
});
