const itemParent = document.querySelector('.Parents');
const item = document.querySelectorAll('.todo');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
    const list = document.createElement('article');
    list.textContent = 'Hello world';
    list.append('article')
})

// item.forEach((e)=> {
//     e.addEventListener('click', (child)=> {
//         console.log('Cliked todo');
//         child.stopPropagation() //bu metodning vazifasi bosilgandagi elementni otasiga ta'sir utqizishga yul quymaydi
//     })
// })



itemParent.addEventListener('click', (rem)=> {
    rem.target.remove()
})