const axios = require('axios')
const fs = require('fs')
const cheerio = require('cheerio')
axios.get('https://www.bilibili.com/anime/?spm_id_from=333.5.b_7072696d6172794368616e6e656c4d656e75.7').then(res=>{
    //console.log(res.data)
    var $ = cheerio.load(res.data)
    $('#app').each((id,el)=>{
        var elem = $(el)
        console.log(id,elem['0'].children[8])

        // elem.children('.block-bangumi').each((i,e)=>{
        //     console.log(i,e)
        // })
    })
})

// axios.get('https://movie.douban.com/chart').then(res=>{
//     var $ = cheerio.load(res.data)
//     $('.pl2').each((id,el)=>{
//         if(id==9){
//             //console.log(id,el.children[1].children[0].data.split('/')[0].replace([\u4E00-\u9FA5]))
//             var elem = $(el)
//             console.log(id,elem.children("a").text().split('/')[0].replace(/\n/g,'').replace(/\s/g,''))
            
//         }
//     })
    // var str = '<h2 class = "title">SAM</h2><h2 class = "title">WJH</h2><h2 class = "title">JJY</h2>'
    // var $ = cheerio.load(str)
    // var arr = []
    // $('.title').each((index,elem)=>{
    //     console.log(index,elem)
    // })

    // var $ = cheerio.load(res.data);  // 把数据结构化
    // var data = [];
    // var all = 0;
    // var min;
    // var minIndex;
    // var max;
    // var maxIndex;

    // $(".pl2").each(function( ind, el){
    //     var elem = $(el);
    //     var title = elem.children("a").text().split("/")[0].replace(/\n/g, '').replace(/\s/g, '');
    //     var score = Number(elem.find(".rating_nums").text());

    //     if( min === undefined ){
    //         min = score;
    //     }
    //     if( max === undefined ){
    //         max = score;
    //     }

    //     if( score<min ){
    //         min = score;
    //         minIndex = ind;
    //     }

    //     if( score>max ){
    //         max = score;
    //         maxIndex = ind;
    //     }


    //     data.push({
    //         title,
    //         score
    //     })

    //     all+=Number(score); // 总分数
    // })

    // var pjf = all / data.length;    // 平均分
    // console.log('总分：'+all.toString());
    // console.log('平均分：'+pjf.toString());
    // console.log('最低分：'+min+'        下标：'+minIndex+'      '+data[minIndex].title);
    // console.log('最高分：'+max+'        下标：'+maxIndex+'      '+data[maxIndex].title);
// })