
export const Zones = {
    'Zone A': [
            {
            company: 'DHL',
            mode: 'flight',
            classes: [
                {
                    label: 'Expedited International',
                    duration_in_days: 5,
                    currency: 'USD',
                    cost: 120
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
                }
        ]
        },
        {
            company: 'EMS',
            mode: 'Water',
            classes: [
                {
                    label: 'Standard International',
                    duration_in_days: 45,
                    currency: 'USD',
                    cost: 40
                }
            ]
        }
    ],
    'Zone B': [
        {
            company: 'Posta Uganda',
            mode: 'Road',
            classes: [
                {
                    label: 'Same day delivery',
                    duration_in_days: 1,
                    currency: 'UGX',
                    cost: 45000
                }
            ]
        }
    ]
}






/* export const Zones = {
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
} */

export const  regions = [
    {
        'region': 'asia',
        'zone': 'Zone A',
        countries: ['China', 'Japan', 'Singapore'],
    },
    {
        'region': 'europe',
        'zone': 'Zone A',
        countries: ['United Kingdom', 'France', 'Spain'],
    },
    {
        'region': 'north_america',
        'zone': 'Zone A',
        countries: ['Canada','United States'],
    },
    {
        'region': 'africa',
        'zone': 'Zone B',
        countries: ['Uganda', 'South Sudan','Rwanda'],
    },
    {
        'region': 'middle_east',
        'zone': 'Zone B',
        countries: ['United Arab Emirates']
    }
]

const currencies = [

]

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

    let zone = region_which_contains_country ? region_which_contains_country.zone : null;

    return zone ? Zones[zone] : {'error': "Sorry, we don't ship in that location"}
}

// console.log(getCountryZone('Uganda'))



