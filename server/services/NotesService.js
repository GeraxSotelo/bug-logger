import mongoose from "mongoose";
import Note from "../models/Note";
import ApiError from "../utils/ApiError";
const _repository = mongoose.model("Note", Note);

class NotesService {

  async getAll() {
    return await _repository.find({});
  }

  async getNotesByBugId(id) {
    let data = await _repository.find({ bug: id });
    if (!data) {
      throw new ApiError("Invalid ID bro");
    }
    return data;
  }
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