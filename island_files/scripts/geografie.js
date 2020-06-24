/* Data ve formě polí JS objektů (JSON) */
let regions = [
    {
        "id": "Reykjavík",
        "city": "Reykjavík",
        "image": "reykjavik.jpg",
        "text": "Reykjavík je hlavní a největší město ostrovního státu Island. Leží při pobřeží zálivu Faxaflói v Atlantském oceánu na jihozápadě země poblíž Evropy. Město je se svou polohou 64° 08' severní šířky nejseverněji položeným hlavním městem světa a v rámci Evropy nejzápadnějším. Žije zde přibližně 129 tisíc obyvatel."
    },
    {
        "id": "Höfuðborgarsvæðið",
        "city": "Höfuðborgarsvæðið",
        "image": "höfuðborgarsvæðið.jpg",
        "text": "Reykjavická aglomerace, v islandštině Höfuðborgarsvæðið (česky: region hlavního města), je aglomerace islandského hlavního města Reykjavík a jeden z islandských regionů. V aglomeraci Reykjavíku žije 60 % obyvatelstva celého Islandu. Do aglomerace patří Reykjavík a dalších 6 obcí: Álftanes, Garðabær, Hafnarfjörður, Kópavogur, Mosfellsbær, Seltjarnarnes a Reykjavík. Celkem žije v aglomeraci o rozloze 1 062 km² 195 970 obyvatel."
    },
    {
        "id": "Vestfirðir",
        "city": "Vestfirðir",
        "image": "dynjandi.jpg",
        "text": "Vestfirðir (doslova Západní fjordy) je poloostrov na severozápadě Islandu, který tvoří jeden z osmi statistických regionů země. Má rozlohu 9 409 km², se zbytkem ostrova je spojen šíjí, která měří v nejužším místě pouze 7 km. Poloostrov je hornatý, množství fjordů ho člení na menší výběžky, z nichž největší je Hornstrandir na severu a Barðaströnd na jihu. Délka pobřeží činí 2 100  km. Mys Látrabjarg je nejzápadnějším bodem Islandu a celého evropského kontinentu, na zdejších 440 metrů vysokých útesech hnízdí množství mořských ptáků (papuchalk, terej bílý, alka malá). Ve vnitrozemí se nachází velký ledovec Drangajökull. Lidské osídlení je omezeno pouze na pobřeží, největším městem je Ísafjörður. Podle sčítání v roce 2008 má poloostrov 7 374 obyvatel (hustota 0,8 na km²)."
    },
    {
        "id": "Austurland",
        "city": "Austurland",
        "image": "austurland.jpg",
        "text": "Východní region (Islandsky: Austurland, také známý jako Austfirðir) je region na východním Islandu. Jeho rozloha je 22 721 km² a v roce 2020 počet obyvatel činil 13 173. Největší město v regionu je Egilsstaðir má 2 300 obyvatel. Nejstarší obcí je Djúpivogur, která v roce 1589 získala živnostenské oprávnění, v roce 2015 měla 470 obyvatel."
    },
    {
        "id": "Norðurland-vestra",
        "city": "Norðurland vestra",
        "image": "norðurland_vestra.jpg",
        "text": "Norðurland vestra (severozápadní Island) je jedním z osmi regionů Islandu. Pro oblast je významné její největší a hlavní město Sauðárkrókur. Město bylo pojmenováno podle blízké řeky Sauðá. Nejstarší osídlení území pochází již z doby Vikingů. Město je nyní významným centrem obchodu a služeb v oblasti. Hlavním ekonomickým odvětvím je rybolov, dále například mlékařství nebo lehký průmysl. Ze služeb jsou zde zastoupeny například informační technologie a finanční nebo konzultační služby."
    },
    {
        "id": "Norðurland-eystra",
        "city": "Norðurland eystra",
        "image": "goðafoss.jpg",
        "text": "Norðurland eystra (severovýchodní Island) je jedním z největších regionů Islandu. Největším městem je Akureyri s 17 300 obyvateli. Akureyri je čtvrté největší město a také obec na Islandu, obec má však celý název Akureyrarkaupstaður. Akureyri se nachází při pobřeží fjordu Eyjafjörður a je obklopeno horami, nejvyšší z nich měří 1213 m n. m. Od severního polárního kruhu je vzdálen pouze 98 km. Při sčítání lidu v dubnu 2008 zde žilo 17 304 obyvatel."
    },
    {
        "id": "Suðurnes",
        "city": "Suðurnes",
        "image": "suðurnes.jpg",
        "text": "Suðurnes nebo Reykjanes poloostrov je region na jihozápadním Islandu. Je pojmenován po Reykjanes, jihozápadním cípu Reykjanesskagi. Region má 27 279 obyvatel (2020) a je jednou z hustěji osídlených částí ostrova. Správním střediskem je Keflavík, který před 7 lety dosáhnul spojením s nedalekým městem Njarðvík a Hafnir 7 000 obyvatel a vytvořil Reykjanesbær, který je nyní (únor 2019) největším sídlem mimo oblast Velkého Reykjavíku; 1. ledna 2013 mělo město 14 231 obyvatel, v roce 2018 však 17 805 obyvatel."
    },
    {
        "id": "Suðurland",
        "city": "Suðurland",
        "image": "jokulsarlon.jpg",
        "text": "Suðurland (doslovně: Jižní Island) s rozlohou 24,256 km2 je největším regionem Islandu. 1. ledna roku 2020 činil počet obyvatel 28 399. Největším městem je Selfoss, centrum obchodu, služeb a průmyslu. Nachází se zde restaurace a kavárny, plavecký bazén, golfové hřiště a kino. 29. května 2008 město postihlo silné zemětřesení o síle 6,3 Richterovy škály. Zemětřesení nikoho neusmrtilo, ale napáchalo mnoho škod."
    },
    {
        "id": "Vesturland",
        "city": "Vesturland",
        "image": "kirkjufell.jpg",
        "text": "Vesturland je jedním z osmi regionů Islandu. Náchází se na jeho západním pobřeží. Jako jediný region, jehož největší město (Arkanes) není jeho hlavním městem. Je také často vzhledáván turisty, kteří zde cestují z blízkého Reykjavíku."
    }
];


/* jQuery skript */
$(function () {
    let clicked = false;
    const fadeOutTime = 50;
    const fadeInTime = 200;
    /* Funkce pro zobrazeni tabulky */
    function displayTable() {
        $('#info').fadeOut(fadeOutTime, function () {
            $('#info').html(`<table class="table regions">
            <thead class="bg-secondary">
                <tr>
                    <th scope="col">Region</th>
                    <th scope="col">Hlavní město</th>
                    <th scope="col">Počet obyvatel</th>
                    <th scope="col">Rozloha</th>
                </tr>
            </thead>
            <tbody>
                <tr id="Höfuðborgarsvæðið">
                    <td scope="row">Höfuðborgarsvæðið</th>
                    <td>Reykjavík</td>
                    <td>213 619</td>
                    <td>1 062</td>
                </tr>
                <tr id="Suðurnes">
                    <td scope="row">Suðurnes</th>
                    <td>Keflavík</td>
                    <td>22 509</td>
                    <td>829</td>
                </tr>
                <tr id="Vesturland">
                    <td scope="row">Vesturland</td>
                    <td>Borgarnes</td>
                    <td>15 766</td>
                    <td>9 554</td>
                </tr>
                <tr id="Vestfirðir">
                    <td scope="row">Vestfirðir</td>
                    <td>Ísafjörður</td>
                    <td>6 883</td>
                    <td>9 409</td>
                </tr>
                <tr id="Norðurland-vestra">
                    <td scope="row">Norðurland vestra</td>
                    <td>Sauðárkrókur</td>
                    <td>7 128</td>
                    <td>12 737</td>
                </tr>
                <tr id="Norðurland-eystra">
                    <td scope="row">Norðurland eystra</td>
                    <td>Akureyri</td>
                    <td>29 361</td>
                    <td>21 968</td>
                </tr>
                <tr id="Austurland">
                    <td scope="row">Austurland</td>
                    <td>Egilsstaðir</td>
                    <td>12 452</td>
                    <td>22 721</td>
                </tr>
                <tr id="Suðurland">
                    <td scope="row">Suðurland</td>
                    <td>Selfoss</td>
                    <td>24 811</td>
                    <td>24 526</td>
                </tr>
            </tbody>
        </table>`)
        });
        $('#info').fadeIn(fadeInTime);
    }
    /* Tabulka se hned zobrazi */
    if (clicked !== true) {
        displayTable();
    }

    /* Po prejeti mysi na cast mapy se zmeni kurzor, zvyrazni se radek tabulky podle id a casti mapy se da trida pro zvyrazneni*/
    $("#mapa-island path").on('mouseover', function () {
        $(this).css({ 'cursor': 'pointer' });
        let id = $(this).attr('id');
        $(".regions tbody tr#" + id).css('background-color', '#e2e6e9');
        $(this).addClass('hovered');
    });
    /* Kdyz mys opusti cas mapy zrusi se zvyrazneni mapky i radku v tabulce */
    $("#mapa-island path").on('mouseout', function () {
        $(this).removeClass('hovered');
        $(".regions tbody tr").css('background-color', '#f0f2f4');
    });

    $("#mapa-island path").on('click', function () {
        /* do proměnné id se uloží identifikátor daného objektu - města */
        let id = $(this).attr('id');
        if ($(this).hasClass('clicked')) {
            $("#mapa-island path").removeClass('clicked', 'hovered');
        }
        else {
            $("#mapa-island path").removeClass('clicked', 'hovered');
            $(this).addClass('clicked');
            /* s využitím metody find se do proměnné region vyhledá v JSON poli regions objekt podle odpovídajícího id */
            let region = regions.find(item => { return item.id == id });
            /* během efektu zprůhlednění se pomocí callback funkce vyplní blok #info příslušnými daty o vybraném regionu  */
            $('#info').fadeOut(fadeOutTime, function () {
                $('#info').html(`<h4 class="mt-3 pl-2 d-inline-block">${region.city}</h4>
                <span class="mt-2 d-flex float-right"> <svg class="bi bi-x" width="1.5rem" height=""
                            viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                            <path fill-rule="evenodd"
                                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                        </svg> </span>
                <div class="mt-3">${region.text}</div>
                <div class=""><img src="./island_files/images/geografie/${region.image}" class="img-fluid my-3"></div>`)
            });
            $('#info').fadeIn(fadeInTime);
        }
        /* Pokud byl prvek uz zakliknuty zobrazi se tabulka */
        $("#mapa-island path").each(function () {
            if ($("#mapa-island path").hasClass('clicked')) {
                clicked = true;
            }
            else {
                clicked = false;
            }
        });

        if (clicked == false) {
            displayTable();
        }

        $("#mapa-island path").removeClass('hovered');
    });


    $("#info").on('mouseover', 'tr', function () {
        $(this).css('background-color', '#e2e6e9');
        let id = $(this).attr('id');
        $("#mapa-island path#" + id).addClass('hovered');
    });

    $("#info").on('mouseout', 'tr', function () {
        $(".regions tbody tr").css('background-color', '#f0f2f4')
        $("#mapa-island path").removeClass('hovered');
    });

    $("#info").on('click', 'td:nth-child(1)', function () {
        /* do proměnné id se uloží identifikátor daného objektu */
        let id = $(this).parent().attr('id');
        $("#mapa-island path").removeClass('clicked', 'hovered');
        $("#mapa-island path#" + id).addClass('clicked');
        /* s využitím metody find se do proměnné region vyhledá v JSON poli regions objekt podle odpovídajícího id */
        let region = regions.find(item => { return item.id == id });
        /* během efektu zprůhlednění se pomocí callback funkce vyplní blok #info příslušnými daty o vybraném regionu  */
        $('#info').fadeOut(fadeOutTime, function () {
            $('#info').html(`<h4 class="mt-3 pl-2 d-inline-block">${region.city}</h4>
            <span class="mt-2 float-right"> <svg class="bi bi-x" width="1.5rem" height=""
                        viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                        <path fill-rule="evenodd"
                            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                    </svg> </span>
            <div class="mt-3">${region.text}</div>
            <div class=""><img src="./island_files/images/geografie/${region.image}" class="img-fluid my-3"></div>`)
        });
        $('#info').fadeIn(fadeInTime);
        $("#mapa-island path").removeClass('hovered');
    });

    $("#info").on('click', 'svg', function () {
        $("#mapa-island path").removeClass('clicked', 'hovered');
        displayTable();
    });

})
