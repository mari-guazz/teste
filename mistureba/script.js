let noticias = [
    {
        titulo: "Noticia A",
        texto: "Texto noticia A",
        data: "23 de set",
        imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/02/noticia.jpg"
    },
    {
        titulo: "Noticia B",
        texto: "Texto Noticia B",
        data: "23 de set",
        imagem: "https://s2-g1.glbimg.com/cPlGuMLduufK-au2CXmhAN1c5vM=/0x129:1280x849/1080x608/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/c/U/KloiImRBuoT7jnipAk3A/photo-5442683425254402680-y.jpg"
    }
]

 
let resgatarDivNoticias = document.getElementById("div-noticias");

resgatarDivNoticias.innerHTML += `
    <div class="container">
        <div class="div-1">
            <img class="img-noticia" src="${noticias[0].imagem}" alt="notfound">
        </div>
        <div class="div-2">
            <h4> ${noticias[0].titulo} </h4>
            <p> ${noticias[0].texto} </p>
            <p> ${noticias[0].data}</p>
        </div>
    </div>
`

resgatarDivNoticias.innerHTML += `
    <div class="container">
        <div class="div-3">
            <img class="img-noticia" src="${noticias[1].imagem}" alt="notfound">
        </div>
        <div class="div-4">
            <h4> ${noticias[1].titulo} </h4>
            <p> ${noticias[1].texto} </p>
            <p> ${noticias[1].data}</p>
        </div>
    </div>
`
let thumbs = [
    {
        titulo: "Noticia C",
        imagem: "https://s2-g1.glbimg.com/d0j_L5CEpn4lK0mnHz9ujx-RuoA=/0x0:985x662/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/f/R/FXUouARoSvkMoyFZYDlw/linkin-park-emily-armstrong.jpg"
    },
    {
        titulo: "Noticia D",
        imagem: "https://s2-g1.glbimg.com/DloSnV8WlGUToD3fE0zRTk_spx0=/0x0:2048x1347/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/u/A/RKlSi1QdmKAcb6Vo3vpw/pedra-sobre-pedra-roberto-frota-5700.t4828557b.m2048.xsqkdr6vbjseexa-h.jpg"
    }
]

let resgatarDivThumbs = document.getElementById("div-thumbs")

resgatarDivThumbs.innerHTML += `
        <div class="chamada">
            <div class="div-5">
                <img class="img-thumb" src="${thumbs[0].imagem}"
            </div>
            <div class="div-6">
                <h5> ${thumbs[0].titulo} </h5>
            </div>
        </div>
`

resgatarDivThumbs.innerHTML += `
        <div class="chamada">
            <div class="div-7">
                <img class="img-thumb" src="${thumbs[1].imagem}"
            </div>
            <div class="div-8">
                <h5> ${thumbs[1].titulo} </h5>
            </div>
        </div>
    </div>
`
