import mongoose from "mongoose";
import Bug from "../models/Bug";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("Bug", Bug);

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
    let data = await _repository.findOneAndUpdate({ _id: id, closed: false }, update, { new: true });
    return data;
  }

  async delete(id) {
    let data = await _repository.findByIdAndUpdate({ _id: id }, { closed: true });
    if (!data) {
      throw new ApiError("Invalid ID bro");
    }
    return data;
  }
}

const bugsService = new BugsService();
export default bugsService;
