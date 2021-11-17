export const Zones = {
    'Zone A': {
        'transport_mode': ['air', 'sea'],
        'shipping_methods': {
            'air': {
                'category':'International',
                'delivery_agents': [
                    {
                        'name': 'DHL',
                        'price': '$100',
                    },
                    {
                        'name': 'UPS',
                        'price': '$120',
                    },
                ]
            },
            'sea': {
                'category': 'International',
                'delivery_agents': [
                    {
                        'name': 'DHL',
                        'price':'$20'
                    },
                    {
                        'name': 'Posta Uganda',
                        'price':'$25'
                    },
                    {
                        'name': 'EMS',
                        'price':'$32'
                    }
                ]
            }
        }
    },
    'Zone B': {
        'transport_mode': ['air', 'road']
    },
}

export const  regions = [
    {
        'region': 'asia',
        'zone': 'Zone A',
        countries: ['china', 'japan', 'singapore'],
    },
    {
        'region': 'europe',
        'zone': 'Zone A',
        countries: ['uk', 'france', 'spain'],
    },
    {
        'region': 'north_america',
        'zone': 'Zone A',
        countries: ['canada','usa'],
    },
    {
        'region': 'africa',
        'zone': 'Zone B',
        countries: ['Uganda', 'south_sudan','rwanda'],
    },
    {
        'region': 'middle_east',
        'zone': 'Zone B',
        countries: ['united_arab_emirates']
    }
]

export const shipping_methods = {
    'International': {

    },
    'Local': {

    },
    'Pick up': {

    },
    'Free': {

    }
}


// console.log(Object.keys(regions))
// console.log(Object.values(regions)[1].countries)
// let zones2 = regions.filter(region => region.countries.includes(country)).map(region => region.zone )



// Get zone of the country
/* let country = 'Uganda'

let [region_which_contains_coutry] = regions.filter(region => region.countries.includes(country))

const { zone } = region_which_contains_coutry

console.log(Zones[zone]) */

