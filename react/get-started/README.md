# 初めてのReact

## 準備

webpackでビルドする方法もありますが、今回は規模が小さいので[browserify](http://browserify.org/)を使って環境を作ります。まずは、グローバルにインストールしておきましょう。

```
$ npm i -g browserify
```

また、Reactでは独自のJSX（JavaScript XML）という記述方法を使いますが、これをjsコードへ変換するために[babel](https://babeljs.io/)を使います。browserifyでbabelを使うためには`babelify`というプラグインを使うのでこれもインストールします。  
あと、ついでにbabelで使うプラグイン諸々も一緒にインストールしてしまいます。

```
$ npm i -D babelify babel-preset-es2015 babel-preset-react
```

cli実行時に指定することもできますが、個人的に見づらいと思うので、その辺の設定をpackage.jsonに追記します。以下の内容で`"browserify"`という項目を追加します。

```javascript
"browserify": {
  "transform": [
    [
      "babelify",
      {
        "presets": [
          "es2015",
          "react"
        ]
      }
    ]
  ]
},
```

最後に、[React](https://facebook.github.io/react/)関連のパッケージをインストールします。

```
$ npm i -D react react-dom
```

## ビルド

コードをビルドした後に以下のようなコマンドを叩けば、変換されます。

```
$ browserify input.js -o output.js
```
