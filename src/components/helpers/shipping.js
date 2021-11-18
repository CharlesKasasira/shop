
export const Zones = {
    'Zone A': {
        name: 'DHL',
        mode: 'flight',
        classes: [
            {
                label: 'Expedited International',
                duration_in_days: 5,
                currency: 'USD',
                cost: 90
            },
            {
                label: 'First Class international',
                duration_in_days: 15,
                currency: 'USD',
                cost: 90
            },
            {
                label: 'Standard international',
                duration_in_days: 45,
                currency: 'USD',
                cost: 30
            },
            {
                label: 'Express',
                duration_in_days: 12,
                currency: 'USD', 
                cost: 45
            }
    ]
    },
    'Zone B': [
        {
            company: 'DHL'
            mode: 'road'
            classes: []
        }
    ]
}






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
        countries: ['China', 'Japan', 'Singapore'],
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
        countries: ['Uganda', 'South Sudan','Rwanda'],
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

export const getCountryZone = (country) => {
    let [region_which_contains_country] = regions.filter(region => region.countries.includes(country))

    const { zone } = region_which_contains_country
    return Zones[zone]
}

// console.log(getCountryZone('Uganda'))



