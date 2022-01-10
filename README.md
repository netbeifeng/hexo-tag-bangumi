# hexo-tag-bangumi 

![LICENSE](https://img.shields.io/npm/l/hexo-tag-bangumi.svg) ![NPM VERSION](https://img.shields.io/npm/v/hexo-tag-bangumi.svg)

Embed a anime card on your [Hexo](https://hexo.io/) article, used [bangumi](http://bangumi.tv/) API.

显示动漫小卡片，使用 Bangumi 的 API。

![](https://s1.ax1x.com/2020/06/16/NiCFzt.png)

## Installation / 安装

![D](https://nodei.co/npm/hexo-tag-bangumi.png?downloads=true&downloadRank=true&stars=true)

```bash
npm install hexo-tag-bangumi --save
```

## Usage / 使用方法

Use tags:

在 Markdown 文件中：

```
{% bangumi animeId %}
```

Example / 例子:

```
{% bangumi 216371 %}
```

Then, it generates HTML:

之后插件会生成如下的 HTML 代码：

```html
<div class="bangumi-anime_card">
    <div class="bangumi-info_section">
        <div class="bangumi-anime_header">
            <a href="http://lain.bgm.tv/pic/cover/l/69/28/152091_Bg7Hc.jpg">
                <img src="http://lain.bgm.tv/pic/cover/l/69/28/152091_Bg7Hc.jpg" class="bangumi-locandina">
            </a>
            <span id="hexo-bangumi-header">吹响！悠风号 第二季</span>
            <span id="hexo-bangumi-subheader">響け！ユーフォニアム 2</span>
            <div>
                <span class="bangumi-rankspan">排名 <span class="bangumi-rank">#113</span></span>
                <span class="bangumi-rankspan"> 话数 <span class="bangumi-rank">13</span></span>
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

#### How to get the anime id? / 如何获取 AnimeId 

1. Open [Bangumi](http://bangumi.tv/) website. / 打开 Bangumi。
2. Search anime than you want to insert. / 查找你想插入的动漫。
3. Url is like this: `http://bangumi.tv/subject/216371`.  / 得到该动漫的 URL。
4. The NUMBER is anime id. / 末尾的数字就是要在标签中填入的 ID。

## Options / 参数设置

By modifying the `_config.yml` file under the Hexo root directory.

在 `_config.yml` 中添加如下 Option 可以自定义 CSS 地址。

```yaml
bangumi:
  css: https://.../css/hexo-tag-bangumi.css
```

The default css address is: 

[https://cdn.jsdelivr.net/npm/hexo-tag-bangumi/hexo-tag-bangumi.css](https://cdn.jsdelivr.net/npm/hexo-tag-bangumi/hexo-tag-bangumi.css)

默认 CSS 地址为 jsdelivr 的 CDN。

## Style / 样式

The default css style used [Simone Bernabè](https://codepen.io/simoberny/):

默认 CSS 样式使用了 Simone Bernabè 在 CodePen 上发布的 Movie Card 样式。

- [View in CodePen](https://codepen.io/simoberny/pen/WMMqwL)

## API

The Hexo plugin used official API by [bangumi](https://github.com/bangumi/api), It's Powerful!

API 是 Bangumi 自家的公开 API。 

## License

MIT
