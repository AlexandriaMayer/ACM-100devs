dataReverse = data => new Array(data
                               .length/8)
                               .fill('')
                               .map((_,i)=>data.slice(i*8,(i+1)*8))
                               .reverse()
                               .flat()
// had to look up the solutuin 
// okay, so I didn't know about the .fill() method, and I didn't think of using a map like that. A lot of it just seems like a correct application of what I 
// thought needed to be done 
