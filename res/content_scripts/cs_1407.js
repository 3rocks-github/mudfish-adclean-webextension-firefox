
function mudfish_adclean_bb5edbb42e594e57b83d0caeb88a1b32() {
  try {
    Sizzle(`[id*="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb5edbb42e594e57b83d0caeb88a1b32 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb5edbb42e594e57b83d0caeb88a1b32, function (items) {
  if (mudfish_adclean_g_conf_bb5edbb42e594e57b83d0caeb88a1b32.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb5edbb42e594e57b83d0caeb88a1b32();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
