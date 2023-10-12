
function mudfish_adclean_7bdca412d7ae0a43e2823ae513043283() {
  try {
    Sizzle(`.containerWrap > section[style^="padding"]:not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7bdca412d7ae0a43e2823ae513043283 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7bdca412d7ae0a43e2823ae513043283, function (items) {
  if (mudfish_adclean_g_conf_7bdca412d7ae0a43e2823ae513043283.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7bdca412d7ae0a43e2823ae513043283();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
