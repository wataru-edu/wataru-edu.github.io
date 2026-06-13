いろどり先生の学び場
======================

まず見るファイル
----------------
index.html をブラウザで開くと、ホームページを確認できます。

日程を変更する
--------------
script.js の先頭にある events の中を書き換えます。

・type: 対面なら "in-person"、オンラインなら "online"
・date: 表示する日付
・time: 開催時間
・title: 会の名前
・description: 短い紹介
・place: 会場または Zoom
・calendar: Googleカレンダー追加用のURL

申込フォームを変更する
----------------------
script.js の1行目にある formUrl を新しいURLへ変更します。

主なファイル
------------
index.html    ページの文章と構成
styles.css   色やレイアウト
script.js    日程、絞り込み、メニュー
logo.svg     新しいロゴ
assets       キャラクター画像と背景イラスト

新しい画像
----------
assets/maruru-portrait.png は、紹介欄用に作ったまるる先生の単体画像です。

公開前に確認すること
--------------------
・開催日と曜日
・申込フォームのURL
・Googleカレンダーの日時
・プロフィール文章
