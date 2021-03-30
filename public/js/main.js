//Cookie取得
var checkCookie = document.cookie;

//Cookie内に【XXX】という文字列があるかないか判定。
if (checkCookie.match("XXX")) {
  /* =====================================
    2回目の訪問したときの処理
  ========================================*/

  console.log("二度目以降訪問");

  //自動リダイレクト
  setTimeout("link()", 0);
  function link() {
    location.href = "viewer.html?file=pdf/itjoin_notice.pdf";
  }
} else {
  //Domain名取得
  var domain = document.domain;
  //Cookieの内容を格納
  var visitorCookie = "visitorCookie=XXX; max-age=15552000; domain=" + domain + "; path=/;";
  //Cookieに書き込み
  document.cookie = visitorCookie;
  /* =====================================
    1回目の訪問したときの処理
  ========================================*/

  console.log("初回訪問");
}
