# hexo-tag-bangumi

Base On [hexo-tag-mtime](https://github.com/mayuko2012/hexo-tag-mtime)

![LICENSE](https://img.shields.io/npm/l/hexo-tag-bangumi.svg) ![NPM VERSION](https://img.shields.io/npm/v/hexo-tag-bangumi.svg)

![](https://nodei.co/npm/hexo-tag-bangumi.png?downloads=true&downloadRank=true&stars=true)

Embed a movie card on your [Hexo](https://hexo.io/) article, used [bangumi](http://bangumi.tv/) API.

![](https://s1.ax1x.com/2020/06/16/NiCFzt.png)

## Installation

```bash
npm install hexo-tag-bangumi --save
```

## Usage

Use tags:

```
{% bangumi animeId %}
```

Example:

```
{% bangumi 216371 %}
```

Then, it generates HTML:

```html
<div class="bangumi-anime_card">
    <div class="bangumi-info_section">
        <div class="bangumi-anime_header">
            <a href="http://lain.bgm.tv/pic/cover/l/69/28/152091_Bg7Hc.jpg">
                <img src="http://lain.bgm.tv/pic/cover/l/69/28/152091_Bg7Hc.jpg" class="bangumi-locandina">
            </a>
            <h1>吹响！悠风号 第二季</h1>
            <h4>響け！ユーフォニアム 2</h4>
            <div>
                <span class="bangumi-rankspan">排名 <span class="bangumi-rank">#113</span></span>
                <span class="bangumi-rankspan">话数 <span class="bangumi-rank">13</span></span>
                <span class="bangumi-score">8.2</span><span style="color:#545454">&nbsp;力荐</span>
            </div>
        </div>
        <div class="bangumi-anime_desc">
            <p class="bangumi-text">吹奏乐竞赛京都府大赛。在那里漂亮地取得金奖的北宇治高中吹奏乐部，向着下一个舞台・强豪云集的关西大赛发起挑战！</p>
        </div>
    </div>
    <div class="bangumi-blur_back" style="background: url(http://lain.bgm.tv/pic/cover/l/69/28/152091_Bg7Hc.jpg); no-repeat fixed;background-size: cover;"></div>
</div>
```

#### How to get the movie id?

1. Open [Bangumi](http://bangumi.tv/) website.
2. Search anime than you want to insert.
3. Url is like this: `http://bangumi.tv/subject/216371`.
4. The NUMBER is anime id.

## Options

By modifying the `_config.yml` file under the Hexo root directory.

```yaml
bangumi:
  css: https://.../css/hexo-tag-bangumi.css
```
or set your cdn here in [index.js](https://github.com/netbeifeng/hexo-tag-bangumi/blob/master/index.js)
```javascript
const cdn = 'https://.../css/hexo-tag-bangumi.css';
```
## Style

The default css style used [Simone Bernabè](https://codepen.io/simoberny/):

- [View in CodePen](https://codepen.io/simoberny/pen/WMMqwL)

## API

The Hexo plugin used official API by [bangumi](https://github.com/bangumi/api), It's Powerful! 

## License

MIT
