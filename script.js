console.log('infinite scroll');

const KEY = `Qzhjls8Ie8Ci683ZM0dsCA-VdVPT1_bjsiwRRkLAPWU`
const count = 10
const URL = `https://api.unsplash.com/photos/random/?client_id=${KEY}&count=${30}`

const generate_pictures=(url)=>{
    const pic = document.createElement('img');
    pic.src=url
    document.getElementById('output').appendChild(pic)
}

const grab_photos = async ()=>{
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data)
    data.forEach(a=>{
        const x = a.urls.regular
        generate_pictures(x)
    })
}






grab_photos();