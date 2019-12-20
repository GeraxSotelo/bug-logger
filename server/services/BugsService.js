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
}

const bugsService = new BugsService();
export default bugsService;
