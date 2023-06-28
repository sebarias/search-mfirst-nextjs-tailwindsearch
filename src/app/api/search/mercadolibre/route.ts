import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import cheerio from "cheerio";
 

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const isbn = searchParams.get('isbn')

    const mercadoLibre_url = "https://api.mercadolibre.com/sites/MLC/search?q=";
    const searchUrl = `${mercadoLibre_url}${isbn}`;
    var results = new Array(); 
    const res = await fetch(searchUrl);
    const data = await res.json()
    console.log(data.results);
    return NextResponse.json(data)
  }