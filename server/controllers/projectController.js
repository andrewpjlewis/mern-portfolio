const Project = require('../models/project');

// GET specific or limited projects
exports.getProjects = async (req, res) => {
  try {
    const { ids, limit } = req.query;

    if (ids) {
      const idArray = ids.split(',');
      const projects = await Project.find({ _id: { $in: idArray } });
      return res.json(projects);
    }

    const parsedLimit = parseInt(limit);
    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .limit(isNaN(parsedLimit) ? 0 : parsedLimit);

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch projects', error });
  }
};

// POST a new project
exports.createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create project', error });
  }
};

// DELETE a project
exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project', error });
  }
};
