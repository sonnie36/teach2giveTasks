import {Router} from 'express';
import {addNote, getAllNotes, getOneNote} from '../controller/note.controller';

let note_router = Router();
note_router.post('/create',addNote);
note_router.get('/all', getAllNotes);
note_router.get('/:note_id', getOneNote);

export default note_router;