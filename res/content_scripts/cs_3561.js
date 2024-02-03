
function mudfish_adclean_3881b05406daa645dff0305fac686da4() {
  try {
    Sizzle(`article div:not([class*=" "]) ~ div div + div[class*=" "]:has(> div[id][class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3881b05406daa645dff0305fac686da4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3881b05406daa645dff0305fac686da4, function (items) {
  if (mudfish_adclean_g_conf_3881b05406daa645dff0305fac686da4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3881b05406daa645dff0305fac686da4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3881b05406daa645dff0305fac686da4();
    });
  }
});
