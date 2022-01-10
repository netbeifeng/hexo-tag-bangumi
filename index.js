const util = require('hexo-util');
const request = require('request-promise');
const cdn = 'https://cdn.jsdelivr.net/npm/hexo-tag-bangumi/hexo-tag-bangumi.css';
const css = (hexo.config.bangumi && hexo.config.bangumi.css) ? hexo.config.bangumi.css : cdn;

hexo.extend.tag.register('bangumi', function (args) {
    var id = args[0];
    return result = getAnimeInfo(id).then(res => {
        var bangumiFontLink = util.htmlTag('link', {
            href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap',
            rel: 'stylesheet'
        });

        var bangumiHeader = util.htmlTag('div', {
            class: 'bangumi-anime_header'
        }, util.htmlTag('img', {
            src: res.image,
            class: 'bangumi-locandina'
        }) + util.htmlTag('span', {
            id: "hexo-bangumi-header"
        }, res.name_cn, false) + util.htmlTag('span', {
            id: "hexo-bangumi-subheader"
        }, res.name, false) + util.htmlTag('div', {}, util.htmlTag('span', {
            class: 'bangumi-rankspan'
        }, "排名 " + util.htmlTag('span', {
            class: 'bangumi-rank'
        }, "#" + res.rank, false), false) + util.htmlTag('span', {
            class: 'bangumi-rankspan'
        }, "话数 " + util.htmlTag('span', {
            class: 'bangumi-rank'
        }, res.eps_count, false), false) + util.htmlTag('span', {
            class: 'bangumi-score'
        }, res.score, false) + util.htmlTag('span', {
            style: 'color:#545454'
        }, "&nbsp;" + res.score_cn, false), false), false);


        var bangumiDesc = util.htmlTag('div', {
            class: 'bangumi-anime_desc'
        }, util.htmlTag('p', {
            class: 'bangumi-text'
        }, res.summary, false), false);

        var bangumiSection = util.htmlTag('div', {
            class: 'bangumi-info_section'
        }, bangumiHeader + bangumiDesc, false);

        var bangumiBack = util.htmlTag('div', {
            class: 'bangumi-blur_back',
            style: 'background: url(' + res.image + '); no-repeat fixed;background-size: cover;'
        }, '', false);
        var bangumiCard = util.htmlTag('div', {
            class: 'bangumi-anime_card'
        }, bangumiSection + bangumiBack, false);
        console.info('hexo-tag-bangumi => Get anime SUCEESS');
        return '<link rel="stylesheet" type="text/css" href="' + css + '" />' + bangumiFontLink + bangumiCard;
    });
}, {
    async: true
});

async function getAnimeInfo(id) {
    var url = "https://api.bgm.tv/subject/" + id;
    return request(url).then(function (body) {
        var res = JSON.parse(body);

        if (res.id) {
            let score_cn;
            switch (Math.floor(res.rating.score)) {
                case 1: score_cn = "不忍直视"; break;
                case 2: score_cn = "很差"; break;
                case 3: score_cn = "差"; break;
                case 4: score_cn = "较差"; break;
                case 5: score_cn = "不过不失"; break;
                case 6: score_cn = "还行"; break;
                case 7: score_cn = "推荐"; break;
                case 8: score_cn = "力荐"; break;
                case 9: score_cn = "神作"; break;
                default: score_cn = "暂无评分";
            }
            var data = {
                name: res.name,
                name_cn: res.name_cn,
                summary: res.summary,
                eps_count: res.eps_count,
                score: res.rating.score,
                rank: res.rank,
                image: res.images.large,
                score_cn: score_cn
            }
        }
        return data;
    });
}