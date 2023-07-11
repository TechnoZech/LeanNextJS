import {JSDOM} from 'jsdom'

import { NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from 'next';
export default async function POST(req, res) {

    const body = JSON.parse(req.body); //received data from HTML Form
    const {links} = body;
    console.log(links);
    //webScraping data from a link received from HTML form
    const result = await fetch('https://codeforces.com/problemset/problem/1144/F');
    const html = await result.text()

    const dom = new JSDOM(html)
    const document = dom.window.document
    const title = document.querySelector('.title')?.textContent
    console.log('Title=>', title);
    // res.status(200).json({title});
    return NextResponse.json({title}); //passing back the data
}

//===================================================

// const getTitle = async () => {
//     const res = await fetch('https://codeforces.com/problemset/problem/1144/F');
//     const html = await res.text()

//     const dom = new JSDOM(html)
//     const document = dom.window.document
//     const title = document.querySelector('.title')?.textContent
//     console.log('Title=>', title);
//     res.send (title);
// }

// export default getTitle;

// ------------------------



// const getTitles = async (req, res) => {
//         // const body = JSON.parse(req.body);
//         // const {links} = body;
//         // console.log("links", links);
//         // result = await fetch(links);
//         result = await fetch('https://codeforces.com/problemset/problem/1144/F');
//         console.log(result);
//         const html = await result.text()
    
//         const dom = new JSDOM(html)
//         const document = dom.window.document
//         const title = document.querySelector('.title')?.textContent
//         console.log('Title=>', title);
//         res.status(200).json({title});
// }

// export default getTitles;