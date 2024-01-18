import dbConnect from "@lib/dbConnect";
import Source from "@models/Source";

export default async function handler(req, res) {

  await dbConnect();

  // POST API MOVIE

  const { method }= req;
  switch( method ){
    case "POST":
      try{
        const source = new Source(req.body)
        await source.save();

        return res.json({ success: true, movie: source });
      }
      catch(e){
        return res.status(400).json({ success: false, error: e });
      }
      case "GET":
        try{
          const source = await Source.find().lean();

          if(!source) res.status(404).json({success: false, error: 'No se encontró la película'})
  
          return res.json({ success: true, source: source });
        }
        catch(e){
          return res.status(400).json({ success: false});
        }
    default: 
      return res.status(500).json({
        success: false, 
        error: "falla del servidor",
      });
  }

}
