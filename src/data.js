import {loremIpsum} from 'react-lorem-ipsum';

export const DATA = [
    {
        id: '1',
        img:
            'https://i.artfile.me/wallpaper/12-01-2017/1920x1080/goroda-chikago--ssha-reka-park-neboskreb-1118141.jpg',
        text: loremIpsum({p: 10, startWithLoremIpsum: false, avgSentencesPerParagraph: 3}),
        date: new Date().toJSON(),
        booked: true
    },
    {
        id: '2',
        img:
            'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
        text: loremIpsum({p: 3, startWithLoremIpsum: false, avgSentencesPerParagraph: 3}),
        date: new Date().toJSON(),
        booked: true
    },
    {
        id: '3',
        img:
            'https://sun9-70.userapi.com/sun9-44/impg/niGS92BiCE6urW0aWHRl8lAvfioDsduQ6ef7-g/iCee4wWYTHo.jpg?size=1280x853&quality=96&sign=5ef4219a4aa80189de480a78b8a2d11b&c_uniq_tag=ngcM3dN1_-Xy8e5KM468ZpTPOqAyXYzBy_7oUxSWBSc&type=album',
        text: loremIpsum({p: 3, startWithLoremIpsum: false, avgSentencesPerParagraph: 3}),
        date: new Date().toJSON(),
        booked: false
    },
    {
        id: '4',
        img:
            'https://sportishka.com/uploads/posts/2022-04/1650626099_19-sportishka-com-p-rossiiskii-gorod-krasivo-foto-21.jpg',
        text: loremIpsum({p: 3, startWithLoremIpsum: false, avgSentencesPerParagraph: 3}),
        date: new Date().toJSON(),
        booked: false
    },
    {
        id: '5',
        img:
            'https://gas-kvas.com/uploads/posts/2023-02/1675486255_gas-kvas-com-p-goroda-fonovii-risunok-dlya-rabochego-stol-6.jpg',
        text: loremIpsum({p: 3, startWithLoremIpsum: false, avgSentencesPerParagraph: 3}),
        date: new Date().toJSON(),
        booked: false
    }
]