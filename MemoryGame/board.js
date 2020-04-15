
const Board = (images) => {
    let div = document.createElement('div');
 
    let o = document.createElement('p');
    o.innerHTML = 'aaaa';
    div.appendChild(o);
    images.forEach(el => {
        let img = document.createElement('img');
        img.src = el.src;
        let p = document.createElement('p');
        p.innerHTML ="dasa";
        div.appendChild(img);
        div.appendChild(p);
    })

    return div;
}

export default Board