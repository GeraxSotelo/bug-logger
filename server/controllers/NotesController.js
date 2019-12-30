import express from "express";
import NotesService from "../services/NotesService"

export default class NotesController {
  constructor() {
    this.router = express.Router()
      .get("", this.getAll)
      .post("", this.create)
      .put(":id/notes/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await NotesService.getAll()
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let data = await NotesService.create(req.body)
      return res.status(201).send(data);
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await NotesService.edit(req.params.id, req.body)
      res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    await NotesService.delete(req.params.id)
    res.send("Deleted")
  }
}