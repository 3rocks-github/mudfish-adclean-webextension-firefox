
function mudfish_adclean_87d4fa4a6fefa09cc4f3d62cd5edccc1() {
  try {
    Sizzle(`iframe[src^="/public/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_87d4fa4a6fefa09cc4f3d62cd5edccc1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_87d4fa4a6fefa09cc4f3d62cd5edccc1, function (items) {
  if (mudfish_adclean_g_conf_87d4fa4a6fefa09cc4f3d62cd5edccc1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_87d4fa4a6fefa09cc4f3d62cd5edccc1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_87d4fa4a6fefa09cc4f3d62cd5edccc1();
    });
  }
});
