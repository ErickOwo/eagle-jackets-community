import dbConnect from "@lib/dbConnect";
import Source from "@models/Source";

export default async function handler(req, res) {

  await dbConnect();

  // GET API MOVIE

  const { method, 
          query: { id } } = req;

  switch( method ){
    case "DELETE":
      try{
        const source = await Source.findByIdAndDelete(id);
        
        if(!source) res.status(404).json({success: false, error: 'No se encontró la película'})

        return res.json({ success: true, source: source });
      }
      catch(e){
        return res.status(400).json({ success: false});
      }
    case "PUT":
      try{
        const source = await Source.findByIdAndUpdate(
          id, 
          req.body, 
          {
            new: true,
            runValidators: true,
          });
          
        if(!source) res.status(404).json({success: false, error: 'No se encontró la película'})
  
        return res.json({ success: true, source: source });
      }
        catch(e){
          return res.status(400).json({ success: false, error: e });
        }
    case "GET":
      try{
        const source = await Source.findById(id).lean();
        
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
