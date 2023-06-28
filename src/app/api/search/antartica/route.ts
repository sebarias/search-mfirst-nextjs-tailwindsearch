import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import cheerio from "cheerio";


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const isbn = searchParams.get('isbn')
    var result = {};
    try {
        const url = "https://www.antartica.cl/catalogsearch/result/?q=";
        const res = await fetch(`${url}${isbn}`);
        const html = await res.text();
        const $ = cheerio.load(html);
        const notfound = $("div.message.notice").text().trim()
        console.log("not:", notfound)
        if (!notfound) {

            const price = $("span.price").text().trim()
            const title = $(".product.name.product-item-name").text().trim()
            //const pages = $('div:contains("páginas")').text()
            const author = $("a.link-autor-search-result").text().trim()
            const image = $("img.product-image-photo").attr("src")
            const origin = "antartica.cl"

            result = {
                price: price, title: title, author: author,
                image: image, origin: origin
            }
        }
        else{
            return NextResponse.json(null)
        }

    } catch (error) {
        console.log("error", error);
    }
    return NextResponse.json(result)
}