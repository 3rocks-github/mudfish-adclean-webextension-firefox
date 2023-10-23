
function mudfish_adclean_e0a7c200f5a3d32576d973776c3da4d1() {
  try {
    Sizzle(`#floating_bottom`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e0a7c200f5a3d32576d973776c3da4d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e0a7c200f5a3d32576d973776c3da4d1, function (items) {
  if (mudfish_adclean_g_conf_e0a7c200f5a3d32576d973776c3da4d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e0a7c200f5a3d32576d973776c3da4d1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e0a7c200f5a3d32576d973776c3da4d1();
    });
  }
});
