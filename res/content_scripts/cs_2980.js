
function mudfish_adclean_c249a3100c0413c49b32d3eee910ac55() {
  try {
    Sizzle(`iframe[src*="//adreal.dt.co.kr/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c249a3100c0413c49b32d3eee910ac55 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c249a3100c0413c49b32d3eee910ac55, function (items) {
  if (mudfish_adclean_g_conf_c249a3100c0413c49b32d3eee910ac55.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c249a3100c0413c49b32d3eee910ac55();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c249a3100c0413c49b32d3eee910ac55();
    });
  }
});
