import mongoose from "mongoose";
import Bugs from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bugs", Bugs);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    let data = await _repository.findById(id);
    if (!data) {
      throw new ApiError("Invalid ID bro");
    }
    return data;
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }

  async edit(id, update) {
    let data = await _repository.findByIdAndUpdate({ _id: id }, update, { new: true });
    if (!data) {
      throw new ApiError("Invalid ID bro");
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findByIdAndUpdate({ _id: id }, { closed: true });
    if (!data) {
      throw new ApiError("Invalid ID bro");
    }
  }
}

const bugsService = new BugsService();
export default bugsService;
