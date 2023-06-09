import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            id: uuidv4(),
            name: "Cabriolet",
            artist: "Plusma, Ben Bada Boom",
            cover: "https://chillhop.com/wp-content/uploads/2023/02/492202568b0d18312224043686735f7f1a47f67b-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=49369",
            active: false,
            color: ['#C4B54E','#DEDFB7']
        },
        {
            id: uuidv4(),
            name: "Passing Time",
            artist: "Knowmadic",
            cover: "https://chillhop.com/wp-content/uploads/2022/06/312458b974ab45c795d75ec3f0259caa3989103a-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41652",
            active: true,
            color: ['#CA4C62', '#E87989']
        },
        {
            id: uuidv4(),
            name: "After Hours",
            artist: "Poldoore",
            cover: "https://chillhop.com/wp-content/uploads/2022/10/36fcc61f2d1c707e99f36706700d73229e2e8dff-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36942",
            active: false,
            color: ['#C3141A','#BC1C22']
        },
        {
            id: uuidv4(),
            name: "A Reminder",
            artist: "Sleepy Fish, coa",
            cover: "https://chillhop.com/wp-content/uploads/2023/01/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
            active: false,
            color: ['#004143','#02251F']
        },
        {
            id: uuidv4(),
            name: "New Places",
            artist: "J.Folk",
            cover: "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43905",
            active: false,
            color: ['#53BD9F','#449886']
        }
    ]
}

export default chillHop;