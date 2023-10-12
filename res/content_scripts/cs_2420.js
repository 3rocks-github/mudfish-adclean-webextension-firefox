
function mudfish_adclean_bf267fde60cbcc6acd340301ec0f8fc1() {
  try {
    Sizzle(`table[width] table[width] tr:has(> td[colspan] td[width][height] > img[alt="스폰서광고"])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bf267fde60cbcc6acd340301ec0f8fc1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bf267fde60cbcc6acd340301ec0f8fc1, function (items) {
  if (mudfish_adclean_g_conf_bf267fde60cbcc6acd340301ec0f8fc1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bf267fde60cbcc6acd340301ec0f8fc1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
