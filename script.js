console.log('infinite scroll');

const KEY = `Qzhjls8Ie8Ci683ZM0dsCA-VdVPT1_bjsiwRRkLAPWU`
const count = 5
const URL = `https://api.unsplash.com/photos/random/?client_id=${KEY}&count=${count}`

const generate_pictures=(url)=>{
    const pic = document.createElement('img');
    pic.src=url
    document.getElementById('output').appendChild(pic)
}

const grab_photos = async (number)=>{
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data)
    data.forEach(a=>{
        const x = a.urls.regular
        generate_pictures(x)
    })
}

window.addEventListener('scroll',()=>{
    console.log(document.body.offsetHeight, window.scrollY)
    if(document.body.offsetHeight - window.scrollY < 1200){
        console.log('time to load again')
        grab_photos();
    }
})

grab_photos();