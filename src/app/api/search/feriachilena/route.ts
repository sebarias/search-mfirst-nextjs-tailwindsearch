import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import cheerio from "cheerio";


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const isbn = searchParams.get('isbn')
    var result = {}
    try {
        const url = "https://feriachilenadellibro.cl/producto/";
        const res = await fetch(`${url}${isbn}`);
        const html = await res.text();
        const $ = cheerio.load(html);
        const summary = $("#tab-description p").text().trim()
        const title = $("h1.product_title.entry-title").text().trim()
        const category = $("span.posted_in").text().trim()
        const author = $("tr.woocommerce-product-attributes-item.woocommerce-product-attributes-item--attribute_pa_autor .woocommerce-product-attributes-item__value").text().trim()
        const year = $("tr.woocommerce-product-attributes-item.woocommerce-product-attributes-item--attribute_pa_ano-edicion .woocommerce-product-attributes-item__value").text().trim()
        const pages = $("tr.woocommerce-product-attributes-item.woocommerce-product-attributes-item--attribute_pa_paginas .woocommerce-product-attributes-item__value").text().trim()
        const publishing = $("tr.woocommerce-product-attributes-item.woocommerce-product-attributes-item--attribute_pa_editorial .woocommerce-product-attributes-item__value").text().trim()
        const image = $("img.wp-post-image").attr("data-src")
        const price = $(".summary.entry-summary .price .woocommerce-Price-amount.amount").text().trim()
        const condition = "new"
        const origin = "feriachilenadellibro.cl"

        result = {
            price: price, title: title, pages: pages, year: year, publishing: publishing, author: author,
            summary: summary, image: image, category: category, condition: condition, origin:origin
        }

    } catch (error) {
        console.log("error", error);
    }
    console.log(result)
    return NextResponse.json(result)
}