let saylorMoon = [
    {
        nome: "Saylor Moon",
        imagem: "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2023/05/Sailor-Moon-6.webp?fit=1200%2C700&ssl=1",
    },
    {
        nome: "Sailor Mercury",
        imagem: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/09/sailor-mercury.jpg",
    },
    {
        nome: "Sailor Mars",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpm8D7yv4kw1wkPbpaRBL0c057M8u2hcJ45B2LKV1XqzSjnLePFRBChqEbrHwzNtHD1Sk&usqp=CAU",
    },
    {
        nome: "Sailor Jupiter",
        imagem: "https://www.animeunited.com.br/oomtumtu/2024/09/kudasai_sailormoon.jpg",
    },
    {
        nome: "Sailor Venus",
        imagem: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/12/sailor-moon-inteligencia-artificail-atrevida-sailor-venus.jpg",
    }
]
let superGatinhas = [
    {
        nome: "Ichigo Momomiya",
        imagem: "https://i.pinimg.com/736x/0a/c7/a1/0ac7a194474ae18425198efe8e7bb5c3.jpg",
    },
    {
        nome: "Minto Aizawa",
        imagem: "https://pbs.twimg.com/profile_images/1421085527/mint_12_400x400.jpg",
    },
    {
        nome: "Lettuce Midorikawa",
        imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSQgfFb_OrvpC33BYOBjQv336OIgMcMFgi25ZDKfGNQAgv2tTj",
    },
    {
        nome: "Pudding Fong",
        imagem: "https://cdn.myanimelist.net/r/200x268/images/characters/11/11277.jpg?s=babc48ff4d7eb30a2394356147ca6776",
    },
    {
        nome: "Zakuro Fujiwara",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiI7I4GRFxiBVfwvAn7qLNl_sV72POVQpafS8pU70OxkR9mU6v",
    }
]
let madokaMagica =[
    {
        nome: "Madoka Kaname",
        imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxFXy-VIUb-MW7BfqMlpIGEC3L7_68rS-5a2X_V8LizrSVIwpz"
    },
    {
        nome: "Sayaka Miki",
        imagem: "https://image.cdn2.seaart.ai/static/e9453ab302025b21ddd3e38957dd8100/1705595398540/b3a134f21c7eadb46ffca0daff6c2504_low.webp"
    },
    {
        nome: "Mami Tomoe",
        imagem: "https://image.cdn2.seaart.ai/static/1a88735699c34778ec69820ae6d84ab5/1705595404543/fca6b408da9760ce409ecc0cfb623062_low.webp"
    },
    {
        nome: "Kyoko Sakura",
        imagem: "https://i.pinimg.com/originals/39/60/e1/3960e1161edea5d1b233f8806b4ec13a.jpg"
    },
    {
        nome: "Homura Akemi",
        imagem: "https://s4.anilist.co/file/anilistcdn/character/large/b38005-oJWeDTg8yvUg.jpg"
    }
]
let shugoChara =[
    {
        nome: "Hinamori Amu",
        imagem: "https://www.nautiljon.com/images/perso/00/07/amu_hinamori_3170.webp"
    },
    {
        nome: "Hotori Tadase",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wTc5xcMN2A49LY8kH1bB1EB4Hk88ffmBEg&s"
    },
    {
        nome: "Yuki Yaya",
        imagem: "https://i1.sndcdn.com/artworks-000072310498-ypw7ha-t500x500.jpg"
    },
    {
        nome: "Nadeshiko Fujisaki",
        imagem: "https://i1.sndcdn.com/artworks-000043813048-6p5dnc-t500x500.jpg"
    },
    {
        nome: "Kukai Soma",
        imagem: "https://www.nautiljon.com/images/perso/00/87/kukai_soma_5478.webp"
    },
]

let resgatarSaylorMoon = document.getElementById("saylorMoon")

let resgatarSuperGatinhas = document.getElementById("superGatinhas")

let resgatarMadokaMagica = document.getElementById("madokaMagica")

let resgatarShugoChara = document.getElementById("shugoChara")

for (let index = 0; index < saylorMoon.length; index++) {
    const element = saylorMoon[index];
    resgatarSaylorMoon.innerHTML += `
    <div class="saylor">
        <div class="imagem">
            <img class="img-mahou" src="${element.imagem}" alt="notfound">
        </div>
        <div class="dadosMahou">
            <p> ${element.nome} </p>
            <i class="bi bi-star-fill"></i>
        </div>
    </div>
`
}

for (let index = 0; index < superGatinhas.length; index++) {
    const element = superGatinhas[index];
    resgatarSuperGatinhas.innerHTML += `
   <div class="tokyo">
        <div class="imagem">
            <img class="img-mahou" src="${element.imagem}" alt="notfound">
        </div>
        <div class="dadosMahou">
            <p> ${element.nome} </p>
            <i class="bi bi-star-fill"></i>
        </div>
    </div>
    `
    
}

for (let index = 0; index < madokaMagica.length; index++) {
    const element = madokaMagica[index];
    resgatarMadokaMagica.innerHTML += `
    <div class="madoka">
        <div class="imagem">
            <img class="img-mahou" src="${element.imagem}" alt="notfound">
        </div>
        <div class="dadosMahou">
            <p> ${element.nome} </p>
            <i class="bi bi-star-fill"></i>
        </div>
    </div>
    `    
}

for (let index = 0; index < shugoChara.length; index++) {
    const element = shugoChara[index];
    resgatarShugoChara.innerHTML += `
    <div class="shugo">
        <div class="imagem">
            <img class="img-mahou" src="${element.imagem}" alt="notfound">
        </div>
        <div class="dadosMahou">
            <p> ${element.nome} </p>
            <i class="bi bi-star-fill"></i>
        </div>
    </div>
    `    
}