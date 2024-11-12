'This is a test. this test is fun.'; // --> 'this test is'

function findSecretMessage(paragraph) {
  const arr = paragraph.split(' ').map(x=> x.toLowerCase());
  const cache = {}
  const resultArr = []
  const aaa = []
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i].replace('.','').replace('!','')
    if(!cache[cur]){
      const curIndex = arr.slice(i+1).findIndex(x=>x.replace('.','').replace('!','')== cur)
      if(curIndex > -1){
        cache[cur] = curIndex + i + 1
        resultArr.push({index: curIndex + i + 1, value: cur})
        aaa.push(`${curIndex + i + 1}-${cur}`)
      }
    }

  }

  const sortArr = aaa.sort((a,b)=> a.split('-')[0] - b.split('-')[0] ).map(item=> item.split('-')[1])

  console.log('chec', cache , resultArr , aaa , sortArr.join(' '))
  return sortArr.join(' ')
}

// findSecretMessage('This is a test. this test is fun.')

// findSecretMessage('asdf qwer zxcv. zxcv fdsa rewq. qazw asdf sxed. qwer crfv asdf.')
findSecretMessage('There is a secret message in the first six sentences of this kata description. Have you ever felt like there was something more being said? Was it hard to figure out that unspoken meaning? Never again! Never will a secret go undiscovered. Find all duplicates from our message!')
// zxcv asdf qwer
