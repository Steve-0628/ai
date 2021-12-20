<h1><p align="center"><img src="./ai.svg" alt="藍" height="200"></p></h1>
<p align="center">An Ai for Misskey. <a href="./torisetu.md">About Ai</a></p>

## これなに
Misskey用の日本語Botです。

## これほに
### 概要
syuilo/aiフォークです。  
無理のない改造がほんの少し加わえられています。
### 機能リスト
* systemdのwatchdog用キープアライブping送信機能
* ゴママヨ検知
* 多すぎるカタカナ検知（「メイドデリバリーサービス」など）
* 検索
* じゃんけんに敗北
* 語彙の改変
### 依存カスタム絵文字
* :honi:
* :gomamayo:
* :too_many_katakana:
* :kanneiyahataseitetsusyo:
* :moresou:
* :yattare:
* :pdf:

## インストール
> Node.js と npm と **libsystemd-dev** と MeCab (オプション) がインストールされている必要があります。

まず適当なディレクトリに `git clone` します。
次にそのディレクトリに `config.json` を作成します。中身は次のようにします:
``` json
{
	"host": "https:// + あなたのインスタンスのURL (末尾の / は除く)",
	"i": "藍として動かしたいアカウントのアクセストークン",
	"master": "管理者のユーザー名(オプション)",
	"notingEnabled": "ランダムにノートを投稿する機能を無効にする場合は false を入れる",
	"keywordEnabled": "キーワードを覚える機能 (MeCab が必要) を有効にする場合は true を入れる (無効にする場合は false)",
	"chartEnabled": "チャート機能を無効化する場合は false を入れてください",
	"reversiEnabled": "藍とリバーシで対局できる機能を有効にする場合は true を入れる (無効にする場合は false)",
	"serverMonitoring": "サーバー監視の機能を有効にする場合は true を入れる (無効にする場合は false)",
	"mecab": "MeCab のインストールパス (ソースからインストールした場合、大体は /usr/local/bin/mecab)",
	"mecabDic": "MeCab の辞書ファイルパス (オプション)"
}
```
`npm install` して `npm run build` して `npm start` すれば起動できます

### systemdを用いたサービス運用
```
[Unit]
Description=Honi(Ai) daemon

[Service]
Type=simple
User=honi
ExecStart=/usr/bin/npm start
WorkingDirectory=/home/honi/honi
TimeoutSec=60
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=honi
Restart=always
# WatchDog
WatchdogSec=60
NotifyAccess=all

[Install]
WantedBy=multi-user.target
```

## フォント
一部の機能にはフォントが必要です。藍にはフォントは同梱されていないので、ご自身でフォントをインストールディレクトリに`font.ttf`という名前で設置してください。

## 記憶
藍は記憶の保持にインメモリデータベースを使用しており、藍のインストールディレクトリに `memory.json` という名前で永続化されます。

## ライセンス
MIT

## Awards
<img src="./WorksOnMyMachine.png" alt="Works on my machine" height="120">
