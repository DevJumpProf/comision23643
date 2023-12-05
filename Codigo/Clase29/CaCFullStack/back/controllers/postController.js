//IMPORTAMOS EL MODELO

import postModel from "../models/postModel.js";

/* C reate
   R ead
   U pdate
   D delete */

//mostrar todos los registros
/* READ */

export const getAllPost = async (req, res) => {
  try {
    const posts = await postModel.findAll();
    res.json(posts);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//mostra todos UN registro
/* READ */

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findByPk(id);
    res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
};

/* crear un registro 
C reate */

export const createPost = async (req, res) => {
  try {
    await postModel.create(req.body);
    res.json({
      message: "registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/* U pdate
actualizar un registro */

export const updatePost = async (req, res) => {
  try {
    await postModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "registro editado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

/* D delete 
eliminar un registro */

export const deletePost = async (req, res) => {
  try {
    await postModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
