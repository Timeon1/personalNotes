
const fs = require('fs')
const https = require('https')

const downloadVideo = (url , fileName = `${+new Date()}.mp4`)=>{

    https.get(url, res=>{
        const list = []
        
        res.on('data', chunk=>{
            list.push(chunk)
        })
        res.on('end', ()=>{
            const bufferData = Buffer.concat(list)
            fs.writeFileSync(fileName, bufferData  , function(err){
                console.log('err', err)
            })
            console.log(fileName, 'finished')
        })
    })
}

// downloadVideo('https://video.twimg.com/ext_tw_video/1683738788495753216/pu/vid/960x720/P56NyCQUousB0JY1.mp4?tag=12', 'test.mp4')
// downloadVideo('https://www.mee.gov.cn/ywdt/spxw/202411/P020241125056298474238.mp4')

const downloadXVideo = (postUrl)=>{
    console.log('start', postUrl)
    const api = `https://twitsave.com/info?url=${postUrl}`
    // get html string
    https.get(api,res=>{
        const list = []
        res.on('data', d=>{
            list.push(d)
        })
        res.on('end',()=>{
            const regex = /https:\/\/twitsave\.com\/download\?[^"']+/g;
            const urls = list.join('').match(regex);
            if(urls[0]){
                downloadVideo(urls[0])
            }
        })
    })
}

downloadXVideo('https://x.com/FIFAWorldCup/status/1530187078608179200')
