import {Service} from "angular-decorators";

@Service("SponsorService")
export class SponsorService {

    constructor() {

    }

    getSponsors() {
        return [
            {
                name: "Adams Musical Instruments",
                url: "http://www.adams-music.be/",
                image: "/img/sponsors/sponsor_hoofd_adams.png",
                type: 500
            },{
                name: "Vriends, centrale verwarming & sanitair",
                url: "http://www.vriends.be/",
                image: "/img/sponsors/sponsor_hoofd_vriends.jpg",
                type: 500
            },{
                name: "Beckers Motors",
                url: "http://www.beckersmotors.be/",
                image: "/img/sponsors/sponsor_hoofd_ford.jpg",
                type: 500
            },{
                name: "Roland",
                url: "https://www.roland.com/global/",
                image: "/img/sponsors/sponsor_hoofd_roland.png",
                type: 500
            },{
                name: "Handson & Partner",
                url: "http://www.handsonpartners.be/",
                image: "/img/sponsors/sponsor_hoofd_handson.png",
                type: 500
            },{
                name: "AE, Architects for Business",
                url: "http://www.ae.be/",
                image: "/img/sponsors/sponsor_hoofd_AE.png",
                type: 500
            },{
                name: "Escent",
                url: "http://escent.eu/",
                image: "/img/sponsors/sponsor_200_escent.png",
                type: 200
            },{
                name: "Forever Living",
                url: "https://foreverliving.com/",
                image: "/img/sponsors/sponsor_200_forever.jpg",
                type: 200
            },{
                name: "Boekhoudkantoor ROGGEN",
                url: "http://www.bizbook.be/nl/roggen-dimitri/blanden/425819",
                image: "/img/sponsors/sponsor_200_roggen.png",
                type: 200
            }, {
                name: "Livingstone",
                url: "http://www.living-stone.be/",
                image: "/img/sponsors/sponsor_livingstone.JPG",
                type: 200
            }, {
                name: "Frituur Sportcentrum Leuven",
                url: "https://nl-nl.facebook.com/Frituur-sportcentrum-bij-Bart-en-Laura-197600157001202/",
                image: "/img/sponsors/sponsor_100_frituur_sportcentrum.JPG",
                type: 100
            },
            {
                name: "Het Rokken",
                url: "http://www.bivakhuis.be/",
                image: "/img/sponsors/sponsor_100_rokken.jpeg",
                type: 100
            },
            {
                name: "Traiteur Culinesse",
                url: "http://traiteurculinesse.be/",
                image: "/img/sponsors/sponsor_100_traiteurculinesse.JPG",
                type: 100
            },
            {
                name: "Ter Land Invest",
                url: "#",
                image: "/img/sponsors/sponsor_100_terlandinvest.jpg",
                type: 100
            },
            {
                name: "Coca-Cola",
                url: "http://www.coca-cola.com/",
                image: "/img/sponsors/sponsor_50_cola.png",
                type: 50
            },
            {
                name: "Depotter",
                url: "http://www.patisseriedepotter.be/",
                image: "/img/sponsors/sponsor_50_depotter.jpg",
                type: 50
            },
            {
                name: "Uw logo hier",
                url: "mailto:dday19022017@gmail.com",
                image: "/img/sponsors/placeholder.jpg",
                type: 0
            }
        ]
    }
}