const characters = [
    {
        "id": 1,
        "name": "Açelya",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/saksi-cicekleri-isimleri.jpg",
        "homeworld": "ılık, havadar"
    },
    {
        "id": 2,
        "name": "Begonya",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/cicek-isimleri-ve-cesitleri.jpg",
        "homeworld": "sabah güneşi"
    },
    {
        "id": 3,
        "name": "Çuha",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/cuha-cicegi.jpg",
        "homeworld": "bahçe, balkon"
    },
    {
        "id": 4,
        "name": "Papatya",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/papatya.jpg",
        "homeworld": "bahçe, balkon"
    },
    {
        "id": 5,
        "name": "Defne",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/defne-cicegi.jpg",
        "homeworld": "bahçe, balkon"
    },
    {
        "id": 6,
        "name": "Fulya",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/en-guzel-cicek-isimleri.jpg",
        "homeworld": "bahçe, balkon"
    },
    {
        "id": 7,
        "name": "Gardenya",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/gardenya-cicegi.jpg",
        "homeworld": "aydınlık, bol ışıklı"
    },
    {
        "id": 8,
        "name": "Gül",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/gul.jpg",
        "homeworld": "bahçe, balkon"
    },
    {
        "id": 9,
        "name": "Hanımeli",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/hanimeli-cicegi.jpg",
        "homeworld": "bahçe, balkon"
    },
    {
        "id": 10,
        "name": "Itır Çiçeği",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/itir-cicegi.jpg",
        "homeworld": "bahçe"
    },
    {
        "id": 11,
        "name": "Kadife Çiçeği",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/kadife-cicegi.jpg",
        "homeworld": "aydınlık, bol ışıklı"
    },
    {
        "id": 12,
        "name": "Kaktüs",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/kaktus.jpg",
        "homeworld": "aydınlık, bol ışıklı"
    },
    {
        "id": 13,
        "name": "Kalanşo",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/kalanso-cicegi.jpg",
        "homeworld": "ılık, havadar"
    },
    {
        "id": 14,
        "name": "Karanfil",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/ev-cicekleri-isimleri.jpg",
        "homeworld": "bahçe, balkon"
    },
    {
        "id": 15,
        "name": "Kasımpatı",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/kasimbati-cicegi.jpg",
        "homeworld": "Bahçe"
    },
    {
        "id": 16,
        "name": "Lale",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/lale-cicegi.jpg",
        "homeworld": "bahçe"
    },
    {
        "id": 18,
        "name": "Leylak",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/leylak-cicegi.jpg",
        "homeworld": "bahçe"
    },
    {
        "id": 19,
        "name": "Orkide",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/orkide-cicegi.jpg",
        "homeworld": "aydınlık, bol ışıklı"
    },
    {
        "id": 20,
        "name": "Fesleğen",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/feslegen-cicegi-saksi.jpg",
    },
    {
        "id": 21,
        "name": "Yasemin",
        "pic": "https://blog-images.hediyesepeti.com/2021/03/yasemin-cicegi.jpg",
        "homeworld": "ılık, havadar"
    }
]

const content_wrapper = document.getElementById("content");
const render_c = document.getElementById("render");
render_c.onclick = renderCharacters;

const filter_container = document.getElementById("filter_container");
const homeworldsRaw = []

//işlenmemiş array'e karakterlerin anavatanını atıyoruz.
//aynı zamanda anavatanı yazmayan birine "diğer" yazıyoruz

for (let i = 0; characters.length > i; i++) {
    homeworldsRaw.push(characters[i].homeworld ?? "diğer");
}

//şimdi de aynı olan anavatanlar silinip yeni değişken oluşturuyoruz.


const homeworldsUnique = [...new Set(homeworldsRaw)];

//burada da büyük harf olanları küçüğe çeviriyoruz


const homeworldsLowerCase = homeworldsUnique.map((uniqueHomeworld) =>
    uniqueHomeworld.toLowerCase());
const homeworlds = homeworldsLowerCase;

// şimdi her bir anavatanı döngüye sokup içlerine radio input ekleyeceğiz

const homeworldsSetForRadio = new Set(); // bu Set'te eklenen anavatanları kontrol edeceğiz

for (const homeworld of homeworlds) {
    if (!homeworldsSetForRadio.has(homeworld)) {
        homeworldsSetForRadio.add(homeworld);

        const radio_element = `
    <div class="form-check form-check-inline mt-5 mb-5">
  <input class="form-check-input" type="radio" name="homeworld" id="filter-${homeworld}" value="${homeworld}">
  <label class="form-check-label" for="filter-${homeworld}">${homeworld}</label>
</div>`;    //name'in içindeki homeworld'un w harfi büyük olduğu için filtreleme çalışmamış.

        filter_container.innerHTML += radio_element;
    }
}
let filterValue = null;
let rad = document.homeworlds_filter.homeworld;
for (let i = 0; rad.length > i; i++) {
    rad[i].addEventListener("change", function () {
        filterValue = this.value;
        renderCharacters();
    });
}

//birinci kısım karakterleri gösterme

function renderCharacters() {
    const row_element = document.createElement("div");
    row_element.classList.add("row");

    content_wrapper.innerHTML = "";
    for (const character of characters) {
        if (
            filterValue === null ||
            (character.homeworld ?? "diğer").toLowerCase() === filterValue
        ) {
            const CharacterCard = `
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
       <div class="card mb-5">
          <img src="${character.pic}" alt="${character.name}">
          <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">${character.homeworld}</p>
         </div>
      </div>
    </div>`;
            row_element.innerHTML = row_element.innerHTML + CharacterCard;
        }

        render_c.innerHTML = "Çiçekleri Gizle";
        render_c.style.backgroundColor = "rgb(238, 98, 98)"
        render_c.onclick = removeCharacters;
    }

    content_wrapper.appendChild(row_element);
}
console.log(homeworlds);


//karakterleri kaldırma

function removeCharacters() {
    content_wrapper.innerHTML = "";
    render_c.onclick = renderCharacters;
    render_c.style.backgroundColor = "#697524";
    render_c.style.color = "white";
    render_c.innerText = "Çiçekleri Göster"
} 