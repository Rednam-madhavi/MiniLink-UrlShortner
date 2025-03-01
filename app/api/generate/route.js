
import clientPromise from "@/lib/mongodb"

export async function POST(req) {

    const body = await req.json()
    const client = await clientPromise
    const db = client.db("minilink")
    const links = db.collection("links")

    const doc = await links.findOne({ shorturl: body.shorturl })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'Url Already Exists' })
    }


    const result = await links.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({ success: true, error: false, message: 'Url Generated Successfully' })
}