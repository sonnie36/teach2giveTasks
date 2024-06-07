import { Request, Response } from "express";
import { NoteService } from "../service/note.service";
let noteService = new NoteService();

export async function addNote(req:Request,res:Response){
    try{
        let{title,content}=req.body;
        let response = await noteService.createNote({
            title,
            content,
            createdAt: new Date()
        })
        return res.json(response);
}
catch(error: any){
    return res.json({error:error.message})

}
}
export async function getAllNotes(req: Request, res: Response) {
    try {
        let response = await noteService.fetchNotes();
        return res.json(response);
    } catch (error:any) {
        return res.json({ error: error.message });
    }
}
export async function getOneNote(req: Request, res: Response) {
    try {
        let note_id = req.params.note_id;
        let response = await noteService.fetchOneNote(note_id);
        return res.json(response);
    } catch (error:any) {
        return res.json({ error: error.message });
    }
}


