
function mudfish_adclean_0937d3fe287e30284a4acd3aba735c13() {
  try {
    Sizzle(`center a[href*="//mbong.kr/banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0937d3fe287e30284a4acd3aba735c13 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0937d3fe287e30284a4acd3aba735c13, function (items) {
  if (mudfish_adclean_g_conf_0937d3fe287e30284a4acd3aba735c13.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0937d3fe287e30284a4acd3aba735c13();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
