
function mudfish_adclean_ec5069fef8120e5d849ef12cab31aa28() {
  try {
    Sizzle(`div:is(#board_search_result, .search_result) a[target="_blank"][href^="/board/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ec5069fef8120e5d849ef12cab31aa28 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ec5069fef8120e5d849ef12cab31aa28, function (items) {
  if (mudfish_adclean_g_conf_ec5069fef8120e5d849ef12cab31aa28.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ec5069fef8120e5d849ef12cab31aa28();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ec5069fef8120e5d849ef12cab31aa28();
    });
  }
});
