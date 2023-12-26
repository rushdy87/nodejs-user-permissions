const { ROLE } = require('../data');

exports.canViewProject = (user, project) =>
  user.role === ROLE.ADMIN || user.id === project.userId;

exports.scopedProjects = (user, projects) => {
  if (user.role === ROLE.ADMIN) {
    return projects;
  }

  return projects.filter((project) => project.userId === user.id);
};

exports.canDeleteProject = (user, project) => user.id === project.userId;
