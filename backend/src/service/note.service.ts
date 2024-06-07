import mssql from 'mssql';
import {Note} from '../interface/note'
import { v4 } from 'uuid';
import {sqlConfig} from '../config/sql.config'


export class NoteService {
    async createNote(note:Note){
        let pool = await mssql.connect(sqlConfig);

        let result=await pool.request()
         .input("id",v4())
         .input("title",note.title)
         .input("content",note.content)
         .input("createdAt",new Date())
         .execute("createNote");

        if(result.rowsAffected[0]===1){
            return {
                error: "Was not able to create note"
            }
        }else{
            return {
                message: ""
            };
        }
    }
    
    async fetchNotes(){
        try{
            let pool =await mssql.connect(sqlConfig)
            let response =await pool.request().query('Select * from Notes')
            return {notes:response.recordset};

        }
        catch(error: any){
            return {error:error.message}
        }
    }

    async fetchOneNote(note_id:string){
        let pool =await mssql.connect(sqlConfig)
        let response =await pool.request().query(`Select * from Notes where id = '${note_id}'`)
        if (response.recordset.length<1){
            return {error:"No Note Found"}
        }
        else{
            return {note:response.recordset[0]};
        }
    }

    async updateNote(note_id:string,note:Note){
        let pool =await mssql.connect(sqlConfig)
        let result = await pool.request()
        .input("title",note.title)
        .input("content",note.content)
        .execute("updateNote")
        if (result.rowsAffected[0] === 1){
            return {message:"Note updated successfully"}
        }
        else{
            return {error:"unable to update note"};
        }

    }
}