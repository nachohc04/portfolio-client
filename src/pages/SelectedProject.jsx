import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getProjectById} from "../services/services"

const SelectedProject = () => {
  const { projectId } = useParams(); // Get projectId from URL
  const [project, setProject] = useState(null); // State for project data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchProject = useCallback(async () => {
    try {
        const res = await getProjectById(projectId);
        if (!res) setError(`Couldn't get project with id ${projectId}`);
    
        setProject(res);
    }
    catch (err) {
        setError(`Couldn't fetch project with id ${projectId}`);
    }
    finally {
        setLoading(false);
    }
  }, [getProjectById, projectId, setProject, setError, setLoading])


  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="min-h-screen text-white p-6 flex flex-col items-center">
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-gray-400 text-lg mb-6 text-center max-w-2xl">{project.description}</p>

      {/* Project Image */}
      <div className="w-full max-w-3xl mb-6">
        <img
          src={`${apiUrl}${project.image}`}
          alt={project.name}
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>

      {/* Links */}
      <div className="flex space-x-6 mb-8">
        {project.host_url && (
          <a
            href={project.host_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Visit Project
          </a>
        )}
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            View Repository
          </a>
        )}
      </div>

      {/* Collaborators Section */}
      {project.collaborators && project.collaborators.length > 0 && (
        <div className="max-w-2xl text-center">
          <h2 className="text-2xl font-semibold mb-3">Collaborators</h2>
          <ul className="list-disc list-inside text-gray-400">
            {project.collaborators.map((collaborator, index) => (
              <li key={index} className="mb-1">
                {collaborator.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectedProject;