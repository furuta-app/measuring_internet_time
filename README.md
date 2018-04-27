![screenshot](https://github.com/furuta-app/measuring_internet_time/blob/master/screenshots/screenshot640x400_with_label.png)

Chromeエクステンション欄のアイコンの下に、今日ネットした時間を表示させるエクステンション。

仕様
====

- 24:00になると0になる。
- 5分単位で増える。
- 1ページに5分間以上滞在する事が多いサイト(Twitterや動画サイトなど)では実際より小さく表示されるかもしれない。
- 10時間超えたら0に戻る。
- ブラウザを再起動すると0に戻る。

カスタマイズして使いたい場合
============================

1. git cloneする
2. Google Chromeの拡張機能欄の「パッケージ化されていない拡張機能を読み込む」から読み込む
