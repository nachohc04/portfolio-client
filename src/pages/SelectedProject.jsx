import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../services/services";
import Loader from "./Loading";

const SelectedProject = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isImageModalOpen, setImageModalOpen] = useState(false); // State to manage modal visibility

  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchProject = useCallback(async () => {
    try {
      const res = await getProjectById(projectId);
      if (!res) {
        setError(`Couldn't get project with id ${projectId}`);
      } else {
        setProject(res);
      }
    } catch (err) {
      setError(`Couldn't fetch project with id ${projectId}`);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  // Toggle image modal visibility
  const toggleImageModal = () => {
    setImageModalOpen((prevState) => !prevState);
  };

  if (loading) return <Loader />


  if (error)
    return (
      <div className="text-red-500 text-center mt-10 text-lg">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen text-white p-6 flex flex-col items-center pb-24 md:pb-10">
      <h1 className="text-4xl font-bold mb-4 text-center">{project.name}</h1>
      <p className="text-gray-400 text-lg mb-6 text-center max-w-2xl">
        {project.description}
      </p>

      {/* Image Section */}
      <div className="w-full max-w-3xl mb-6">
        <img
          src={`${apiUrl}/${project.image}`}
          alt={project.name}
          className="rounded-lg shadow-2xl transform hover:scale-105 cursor-pointer transition-all duration-300"
          onClick={toggleImageModal} // Open modal on click
        />
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
          onClick={toggleImageModal} // Close modal when clicking outside the image
        >
          <img
            src={`${apiUrl}/${project.image}`}
            alt={project.name}
            className="max-w-full max-h-screen object-contain sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
          />
        </div>
      )}

      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {project.host_url && (
          <a
            href={project.host_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg transition"
          >
            Visit Project
          </a>
        )}
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 px-5 py-2 rounded-lg transition"
          >
            View Repository
          </a>
        )}
      </div>

      {project.collaborators?.length > 0 && (
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-2xl font-semibold mb-6">Collaborators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="p-5 rounded-lg shadow-md hover:shadow-lg transition bg-gray-800"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {collaborator.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {collaborator.description || "No description available."}
                </p>
                {collaborator.repository && (
                  <a
                    href={collaborator.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 transition"
                  >
                    View Repository
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedProject;
