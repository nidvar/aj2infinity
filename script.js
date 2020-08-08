console.log('infinite scroll');

const KEY = `Qzhjls8Ie8Ci683ZM0dsCA-VdVPT1_bjsiwRRkLAPWU`

let photos = []
let loaded = 0

const loading_wheel=()=>{
    document.querySelector('.loading-image').classList.add('hidden')
}

const image_loaded_check = ()=>{
    console.log('loaded: '+loaded)
    loaded = 0;
}

const generate_pictures=(url,link)=>{
    const a = document.createElement('a');
    a.setAttribute('href', link)
    document.getElementById('output').appendChild(a)

    const pic = document.createElement('img');
    pic.src=url
    pic.setAttribute('a',link)
    a.appendChild(pic)

    pic.addEventListener('load',()=>{
        loaded++
        console.log(loaded)
    })
}

const grab_photos = async (number)=>{
    const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${KEY}&count=${number}`)
    photos = await response.json();
    photos.forEach(a=>{
        generate_pictures(a.urls.regular, a.links.html)
    })

}

window.addEventListener('scroll',()=>{
    console.log(document.body.offsetHeight, window.scrollY)
    if(document.body.offsetHeight - window.scrollY < 1200){
        if(loaded === 5){
            console.log('time to load again')
            grab_photos(5);
            console.log(photos.length)
            image_loaded_check();
            loading_wheel();
        }
    }
})
setTimeout(()=>{
    image_loaded_check();
    grab_photos(5);
    loading_wheel();
},2000)
