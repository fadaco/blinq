export const categories = [
    {
            id: 1,
            name: 'OMG!',
            url: '/images/omg.jpeg',
        },
    {
            id: 2,
            name: 'Beach',
            url: '/images/beach.jpeg',
        },
    {
            id: 3,
            name: 'Amazing Pools',
            url: '/images/amz-pools.jpeg',
        },
    {
            id: 4,
            name: 'Tropical',
            url: '/images/tropical.jpeg',
        },
    {
            id: 5,
            name: 'Shared Homes',
            url: '/images/shomes.jpeg',
        },
    {
            id: 6,
            name: 'Islands',
            url: '/images/islands.jpeg',
        },
    {
            id: 7,
            name: 'Artic',
            url: '/images/arctic.jpeg',
        },
    {
            id: 8,
            name: 'Amazing Views',
            url: '/images/amz-views.jpg',
        },
    {
            id: 9,
            name: 'Design',
            url: '/images/design.jpg',
        },
    {
            id: 10,
            name: 'Surfing',
            url: '/images/surfing.jpg',
        },
    {
            id: 11,
            name: 'Beds and Breakfast',
            url: '/images/bedab.jpg',
        },
    {
            id: 12,
            name: 'National Parks',
            url: '/images/nat-parks.jpg',
        },
    {
            id: 13,
            name: 'Caves',
            url: '/images/caves.jpg',
        },
    {
            id: 14,
            name: 'Country Side',
            url: '/images/count-side.jpg',
    },
]

export type ApartmentProps = {
    id: number
    images: string[]
    name: string
    owner: string
    date: string
    price: string
    ratings: number
    category: number
    type: string
}

export const CURRENY_SIGN = '₦'

// export const Apartments: ApartmentProps[] = [
//     {
//         id: 1,
//         images: [
//          '/images/folder/img1.jpg',
//         '/images/folder/img11.jpg',
//         ],
//         name: 'Apartment In Lagos',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '22',
//         ratings: 5,
//         category: 4,
//         type: 'night',
//     },
//     {
//         id: 2,
//         images: [
//             '/images/folder/img2.webp',
//            '/images/folder/img12.webp',
//            ],
//         name: '5 BR Detached',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '55',
//         ratings: 2,
//         category: 10,
//         type: 'night',
//     },
//     {
//         id: 3,
//         images: [
//             '/images/folder/img3.webp',
//            '/images/folder/img13.webp',
//         ],
//         name: '5 BR Detached',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '35',
//         ratings: 4,
//         category: 8,
//         type: 'day',
//     },
//     {
//         id: 4,
//         images: [
//             '/images/folder/img4.webp',
//            '/images/folder/img14.jpg',
//         ],
//         name: 'Comfy Condo In Lekki',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '80',
//         ratings: 4,
//         category: 7,
//         type: 'night',
//     },
//     {
//         id: 5,
//         images: [
//             '/images/folder/img5.jpeg',
//            '/images/folder/img9.webp',
//         ],
//         name: 'Apartment In Lagos',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '90',
//         ratings: 1,
//         category: 4,
//         type: 'night',
//     },
//     {
//         id: 6,
//         images: [
//             '/images/folder/img6.webp',
//            '/images/folder/img16.jpg',
//         ],
//         name: 'Apartment In Lagos',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '50',
//         ratings: 2,
//         category: 6,
//         type: 'night',
//     },
//     {
//         id: 7,
//         images: [
//             '/images/folder/img7.jpg',
//            '/images/folder/img17.jpg',
//         ],
//         name: '3 BR Duplex',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '10',
//         ratings: 2,
//         category: 2,
//         type: 'night',
//     },
//     {
//         id: 8,
//         images: [
//             '/images/folder/img8.webp',
//            '/images/folder/img18.webp',
//         ],
//         name: '3 BR Duplex',
//         owner: 'Ayo Abimbola',
//         date: 'Jan 5 - 10',
//         price: '40',
//         ratings: 4,
//         category: 13,
//         type: 'day',
//     },
// ]
