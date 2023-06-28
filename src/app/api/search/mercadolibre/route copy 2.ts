import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import cheerio from "cheerio";
 

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const isbn = searchParams.get('isbn')
    var result = {}
    try {
      const buscalibre_url = "https://www.buscalibre.cl/libros/search?q=";
      const res = await fetch(`${buscalibre_url}${isbn}`);
      const html = await res.text();
      const $ = cheerio.load(html);
      const price = $("p.precioAhora").text().trim();
      const title = $("p.tituloProducto").text().trim();
      const pages = $("div[id='metadata-número páginas']").text().trim();
      //const pages = $('div:contains("páginas")').text()
      const year = $("#metadata-ano").text().trim();
      const publishing = $("#metadata-editorial").text().trim();
      const author = $("#metadata-autor").text().trim();
      const summary = $("div.descripcionBreve").find("div").text().trim();
      const image = $("div.imagen").find("img").attr('data-src');
      const category = $("#metadata-categorías").text().trim();
      const condition = $("strong.estado").text().trim()
      
      result = {price:price,title:title,pages:pages,year:year,publishing:publishing,author:author,
      summary:summary,image:image,category:category,condition:condition}
      
    } catch (error) {
      console.log("error", error);
    }
    console.log(result)
    return NextResponse.json(result)
  }