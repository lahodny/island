// Historické události
const events = [
    {
        "year": "~850",
        "event": "První osadníci",
        "detail": "Jako první se zde pravděpodobně objevili irští mniši, kteří využívali izolovanosti ostrova k poustevnickému životu. Dalšími příchozími byli Vikingové ze Švédska a Norska, které nutily klimatické či politické poměry v jejich zemi k hledání nového domova. Vzdálený ostrov na severozápadě pravděpodobně objevili nejdříve náhodou, když se chtěli dostat na Faerské ostrovy a zanesl je sem vítr. Jako první se tu objevil kolem roku 850 švédský pirát Naddoddur, který pojmenoval ostrov Snæland (Sněžná země), ale zase se vrátil domů. Novou zemi se asi o deset let později pokusil kolonizovat také Nor Flóki Vilgerdarson, ale ani jemu se příliš nedařilo, v zimě mu zemřel veškerý dobytek a byl donucen vrátit se na evropskou pevninu. Vilgerdarson přejmenoval zemi na Ísland (Ledový ostrov), když spatřil ve fjordu plavat ledové kry.",
        "images": [
            "islandia.jpg", "Flateyjarbok_Haraldr_Halfdan.jpg", "sun_voyager.jpg"
        ]
    },
    {
        "year": "930",
        "event": "Nejstarší parlament na světě",
        "detail": "Spory mezi obyvateli se zprvu řešily válkami nebo na lokálních sněmech. V roce 930 byl na základě potřeby jednotné vlády vytvořen zemský sněm, kde se všichni obyvatelé každý rok na dva týdny sešli a rozhodovali hlasováním. Tento na svou dobu velmi neobvyklý a velmi pokrokový způsob vlády vydržel po dlouhou dobu, možná proto, že seveřané měli ze svých rodných zemí špatné zkušenosti s autoritativními panovníky. Jako nejvhodnější místo pro konání národního sněmu (AlÞing) byl vybrán rift oddělující evropskou a americkou litosférickou desku – Þingvellir (Thingvellir), což znamená v překladu „sněmovní plán“. Řečníci tu mohli mluvit z úpatí vysoké skalní stěny, na vyvýšeném místě seděl i předsedající. Hlasovalo se o záležitostech významných pro celý ostrov, přednášely se zákony, vynášely rozsudky a konaly popravy. Na sněmu směli hlasovat jen muži, ale zúčastnit se mohl každý, takže se tu také domlouvaly sňatky, vedla se obchodní jednání a konaly turnaje.",
        "images": [
            "Trenches-Iceland-Thingvellir.jpg", "viking-althing_grande.jpg"
        ]
    },
    {
        "year": "1397",
        "event": "Vláda Dánů a reformace",
        "detail": "Ve 14. století postihla Island řada dalších přírodních katastrof a v roce 1402 krutá morová epidemie, která zabila polovinu populace. V roce 1397 vznikla tzv. Kalmarská unie, která spojila Dánsko, Norsko a Švédsko do personální unie pod nadvládu dánské královny Markéty. Také Island se tedy stal součástí dánského království. Staletí dánské nadvlády nebyly pro ostrov příliš šťastné. V 16. století se ve Skandinávii šířilo učení Martina Luthera. Dánský král zabavil obrovský majetek katolické církve a přivlastnil si její bohatství i moc. I na Islandu byla sice církevní chamtivost nepopulární, reformace však byla do značné míry vnucená Dány. Dosavadní katoličtí hodnostáři byli aspoň Islanďané, takhle připadl veškerý majetek církve dánské koruně.",
        "images": [
            "Sjómannsbýli_í_Reykjavík_1836.jpg"
        ]
    },
    {
        "year": "2008",
        "event": "Finanční krize",
        "detail": "V říjnu roku 2008 vypukla v zemi katastrofální finanční krize, kterou neustály všechny tři hlavní islandské banky zasažené hromadným výběrem vkladů a neschopností splácet krátkodobé dluhy. Část jejich závazků převzal stát, který se tím enormně zadlužil. Kurz islandské koruny se propadl na historické minimum. Hrozbu bankrotu odvrátil Island jen díky úvěru od Mezinárodního měnového fondu, skandinávských zemí a Japonska. Důsledkem krize byl i pád vlády a nová vláda sociální demokratky Jóhanny Sigurðardóttirové, která byla první premiérkou na světě otevřeně se hlásící k lesbické orientaci, se rozhodla požádat o vstup do Evropské unie. Diskutovalo se tehdy také o přijetí eura nebo kanadského dolaru, což by podle některých mělo dalším krizím zabránit. Následující vlády však všechny tyto plány zarazily. ",
        "images": [
            "johanna-sigurdardottir.jpg"
        ]
    },
];

// Významné postavy
const heroes = [
    {
        "name": "Hafþór Júlíus Björnsson",
        "job": "Silák",
        "birth": "26. 11. 1988",
        "death": "",
        "biography": "Hafþór Júlíus Björnsson je islandský profesionální silák a herec. Je prvním člověkem, který ve stejném kalendářním roce získal Arnold Strongman Classic, nejsilnější muž Evropy a nejsilnější muž světa. Hrál Gregor The Mountain Clegane v HBO seriálu Hra o trůny po dobu pěti sezón. Je také bývalým profesionálním hráčem basketbalu. Dne 2. května 2020 Hafþór v jeho posilovně na Islandu zvedl 501 kilogramů na mrtvý tah a stanovil tak nový světový rekord.",
        "portrait": "the_mountain.png",
    },
    {
        "name": "Magnús Ver Magnússon",
        "job": "Silák",
        "birth": "23. 4. 1963",
        "death": "",
        "biography": "Magnús Ver Magnússo je bývalý islandský powerlifter a silák. Jako čtyřnásobný vítěz soutěže World's Strongest Man je jednou z nejznámějších osobností siláctví. Magnús je nyní také známý jako rozhodčí World's Strongest Man (od roku 2017). Byl také rozhodčím při pokoření světového rekordu na mrtvý tah (2.5. 2020 - Hafþór Júlíus Björnsson).",
        "portrait": "magnus_ver_magnusson.jpg",
    },
    {
        "name": "Jón Páll Sigmarsson",
        "job": "Silák",
        "birth": "28. 4. 1960",
        "death": "16. 1. 1993",
        "biography": "Jón Páll Sigmarsson byl profesionální silák, powerlifter a kulturista, který jako první člověk vyhrál World's Strongest Man čtyřikrát. Je uznávaný jako jeden z největších osobností siláctví vůbec. Stal se islandským sportovcem roku 1981 a byl jedním z nejznámějších islandských atletů. V roce 2012 se stal členem síně slávy World's Strongest Man.",
        "portrait": "jon_pall_sigmarsson.jpg",
    },
    {
        "name": "Benedikt Magnússon",
        "job": "Silák",
        "birth": "4. 6. 1983",
        "death": "",
        "biography": "Benedikt Magnússon je silák a powerlifter. Je držitelem světového rekordu na raw mrtvý tah ( bez použití speciálního dresu a trhaček). Stanovil také světový rekord na mrtvý tah (461 kg, 2014), následující rok jej však překonal Eddie Hall, když zvedl o jeden kilogram více. Nyní se připravuje na World Deadlift Championships, kde chce na mrtvý tah zvednout 528 kg.",
        "portrait": "benedikt_magnusson.jpg",
    },
    {
        "name": "Magnús Scheving",
        "job": "Herec",
        "birth": "10. 11. 1964",
        "death": "",
        "biography": "Magnus se narodil v Reykjavíku, ale vyrůstal v malém městě Borgarnes. V roce 1992 se stal islandským šampionem v aerobní gymnastice. O rok později skandinávským mistrem a poté dokonce i dvakrát mistrem Evropy v roce 1994 a 1995. Byl také zvolen islandským sportovcem roku 1994. Je také generální ředitel a zakladatel Lazy Town Entertainment. Tato společnost vyrábí knihy, videa, hry a sportovní potřeby, pomocí nich propaguje fitness a zdravý životní styl pro děti. Magnus je také tvůrcem show LAZY TOWN, kde hraje Sportacuse.",
        "portrait": "magnus_scheving.jpg",
    },
    {
        "name": "Stefán Karl Stefánson",
        "job": "Herec",
        "birth": "10. 7. 1975",
        "death": "21. 8. 2018",
        "biography": "Stefán Karl Stefánson byl herec a zpěvák Islandského původu známý především díky roli Robbieho Rottena v dětském seriále LazyTown. Kariéra Stefána Karla Stefánsona začala v roce 1994, kdy pracoval jako loutkář pro televizi. Později ho Magnus Schevinge pozval, aby ztvárnil jednu z postav v druhé hře LazyTown. Scheving vytvořil hry kvůli jeho obavám z mladší generace Islandu, která postrádala dostatečné fyzické cvičení. Stefán Karl vysvětlil, že [Scheving] chtěl, aby děti byly zdravější, a tak vytvořil muzikál LazyTown.",
        "portrait": "stefan_karl_stefansson.jpg",
    },
    {
        "name": "Hjalti Árnason",
        "job": "",
        "birth": "",
        "death": "",
        "biography": "",
        "portrait": "",
    },
    {
        "name": "Ari Gunnarsson",
        "job": "",
        "birth": "",
        "death": "",
        "biography": "",
        "portrait": "",
    },
];


$(function () {
    /* V první části je tabulka s významnými událostmi z dějin dané země */
    /* Data jsou do tabulky načtena z proměnné events */
    events.forEach((event) => {
        /* Metoda append() přidává nové prvky do vybrané částí stránky (vždy za už existující obsah) */
        $("#udalosti tbody").append(`<tr>
             <td class="event-year">${event.year}</td>
             <td>
               <h5 class="event-name"><i class="fas fa-chevron-right"></i>${event.event}</h5>
             </td>
         </tr>
         <tr>
         <td></td>
            <td>
                <p class="event-detail">${event.detail}</p>
            </td>
         </tr>`);
        $("#obrazky").append(`<div class="row justify-content-center"></div>`);
        for (let i = 0; i < event.images.length; i++) {
            $("#obrazky .row:last-child").append(`<div class="col-md-4 col-sm-6 py-3">
            <img src="island_files/images/historie/events/${event.images[i]}" alt="${event.event}" class="img-fluid">
            </div>`);
        }
    });

    /* Po načtení stránky se skryjí všechny detaily a obrázky událostí, kromě prvních, a těm se přidají třídy pro změnu pozadí a ikony */
    $("#obrazky .row").hide();
    $("#obrazky .row").eq(0).show();
    $(".event-detail").hide();
    $("tbody tr:odd").hide();
    $("tbody tr:odd").eq(0).show();
    $(".event-detail").eq(0).show().parents("tr").prev().addClass("bg-secondary");
    $(".event-detail").eq(0).show().parents("tr").addClass("bg-secondary");
    $(".event-name i").eq(0).removeClass("fas, fa-chevron-right").addClass("fas, fa-chevron-down");

    /* Při kliknutí na řádek tabulky dojde k následujícím akcím: */
    $("#udalosti tr:even").on("click", function () {
        /* Pokud už je řádek zobrazen, nice se nestane */
        if ($(this).hasClass("bg-secondary")) {
            return 0;
        }
        else {
            /* Ze všech řádků tabulky se odstraní třída pro změnu pozadí */
            $("#udalosti tr").removeClass("bg-secondary");
            /* Tato třída se přidá řádku, na který zrovna klikla myš, a řádku po něm (detailu událostí) */
            $(this).addClass("bg-secondary");
            $(this).next().addClass("bg-secondary");
            /* Dále se změní všechny ikony (doprava) a pouze ikona kliknutého řadku bude jiná (dolů) */
            $(".event-name i").removeClass("fas, fa-chevron-down").addClass("fas, fa-chevron-right");
            $(this).children().children().children(".event-name i").removeClass("fas, fa-chevron-right").addClass("fas, fa-chevron-down");

            /* Skrytí všech obrázků */
            $("#obrazky .row").hide();
            /* Zjistíme index právě kliknutého řádku a zobrazíme pouze jemu příslušné obrázky */
            let index = ($('tr').index(this) / 2);
            $("#obrazky .row:nth-child(" + (index + 1) + ")").show();
            /* Skryjeme také řádek s detaily i detaily samotné, abychom měli vždy efekt .slideDown() */
            $("tbody tr:odd").hide();
            $(this).next().children("td").children("p").hide();
            /* Poté ukážeme pouze ten detail, který následuje po prvku, na který zrovna klikla myš */
            /* Využíváme tzv. řetězení (chaining), kdy můžeme volat několik metod v řadě */
            $(this).next().show();
            $(this).next().children("td").children("p").slideDown();
        }
    });






    /* Druhá část stránky obsahuje seznam slavných postav a vedle něj se po kliknutí zobrazuje karta s podrobnějším profilem osobnosti */
    /* Nejprve jsou načtena jména osobností z proměnné heroes do seznamu */
    heroes.forEach((hero) => {
        $("#postavy .list-group").append(`<li class="list-group-item rounded-0 font-weight-bold"><span class="name">${hero.name}</span><span class="float-right badge badge-secondary">${hero.job}</span></li>`);
    });

    /* Funkce zajistí načtení dat o vybrané osobnosti a jejich správné zobrazení ve struktuře karty */
    function fillPersonCard(person) {
        /* Do proměnné hero se z pole heroes načte objekt o osobnosti, která byla vyhledána podle jména */
        let hero = heroes.find(item => { return item.name === person });
        $(".card-title").empty();
        /* Zjistíme, co se nachází ve stringu hero.death a pokud je prázdný, tak místo něj napíšeme "součastnost" */
        if (hero.death == "" && hero.birth == "") {
            $(".card-title").append(`<div class="row"><div class="col-sm-6"><h5>${hero.name}</h5></div></div>`);
        }
        else if (hero.death == "") {
            $(".card-title").append(`<div class="row"><div class="col-sm-6"><h5>${hero.name}</h5></div><div class="col-sm-6 font-weight-bold">${hero.birth} - součastnost
            </div></div>`);
        }
        else {
            $(".card-title").append(`<div class="row"><div class="col-sm-6"><h5>${hero.name}</h5></div><div class="col-sm-6 font-weight-bold">${hero.birth} - ${hero.death}
            </div></div>`);
        }
        $(".card-text").text(hero.biography);
        /* Vyprázdní se oblast s galerií fotek spojených s danou osobností */
        $(".gallery").empty();
        /* V cyklu budou přidány nové bloky s fotkami osobnosti */
        if (`${hero.portrait}` == "") {
            return;
        }
        else {
            $(".gallery").append(`<img src ="island_files/images/historie/portraits/${hero.portrait}" alt ="${hero.name}" class="img-fluid pt-0 pb-3 py-sm-3">`);
        }
    }

    /* Po načtení stránky bude jako aktivní označena první osobnost v seznamu */
    $("#postavy li:first").addClass('active');
    /* Pomocí připravené funkce, které je předáno jméno první osobnosti, se načtou data do profilové karty */
    fillPersonCard(heroes[0].name);

    /* Po kliknutí na jméno osobnosti v seznamu se provede následující sled akcí: */
    $("#postavy li").on("click", function () {
        /* Nejprve všechny prvky seznamu zbavíme třídu active, abychom měli jistotu, že žádný z nich nebude zvýrazněn */
        $("#postavy li").removeClass("active");
        /* A nyní přidáním třídy active zvýrazníme právě ten prvek (this), na který bylo kliknuto */
        $(this).addClass("active");
        /* Do proměnné person se uloží textová hodnota (tj. jméno osoby) toho (this) objektu, na který uživatel kliknul */
        let person = $(this).children(".name").text();
        /* Změna údajů na profilové kartě podle jména aktuálně vybrané osobnosti (proměnná person) */
        fillPersonCard(person);

        $("card").show();
    });


    /* Pokud bude šířka obrazovky menší než 500px, odstraní se prázdná buňka (remove)
    a druhá zabere dva sloupce (nastavením atributu colspan) a přidáme odsazení
    ,podle kterého také zjišťujeme, jestli už je buňka rozšířená */
    if (($(window).width() <= 500) && (!$("tbody tr:odd td").hasClass(".pl-2"))) {
        $("tbody tr:odd td:even").remove();
        $("tbody tr:odd td").attr('colspan', 2).children().addClass("pl-2");
    }

    else if (($(window).width() > 500) && ($("tbody tr:odd td").hasClass(".pl-2"))) {
        $("tbody tr:odd").prepend("<td></td>");
        $("tbody tr:odd td:odd").attr('colspan', 1);
    }

})
