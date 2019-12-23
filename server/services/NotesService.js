import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";
const _repository = mongoose.model("Note", Note);

class NotesService {
  async create(rawData) {
    return await _repository.create(rawData)
  }

  async delete(id) {
    let data = await _repository.findOneAndRemove({ _id: id })
    if (!data) {
      throw new ApiError("Invalid ID bro")
    }
  }
}

const notesService = new NotesService();
export default notesService;