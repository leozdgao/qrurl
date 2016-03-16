function getCurrentTabUrl (cb) {
  var queryInfo = {
    active: true, // 要求 "activeTab" 权限
    currentWindow: true
  }

  chrome.tabs.query(queryInfo, function (tabs) {
    var tab = tabs[0]
    var url = tab.url
    cb(url)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  getCurrentTabUrl(function (url) {
    new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 128,
      height: 128
    });
  })
})
