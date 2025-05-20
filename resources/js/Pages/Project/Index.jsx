import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage, router, useForm } from "@inertiajs/react";
import { Pencil, Trash2, Eye } from "lucide-react";
import { useState } from "react";

// Assuming these buttons are your custom components or replace with buttons as needed

import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";
import ShowModal from "./components/ShowModal";

export default function Index() {
  const { auth, projects } = usePage().props;

  // Modal control state
  const [modalType, setModalType] = useState(null); // "view" | "edit" | "delete"
  const [selectedProject, setSelectedProject] = useState(null);

const {
  data: formData,
  setData,
  delete: destroy,
  processing,
  reset,
  errors,
  clearErrors,
} = useForm({
  name: '',
  description: '',
  status: '',
  due_date: '',
  image: '',
});

const openModal = (type, project) => {
  clearErrors();
  reset(); // reset form data to default to avoid stale data
  setSelectedProject(project);
  if (type === 'edit' && project) {
    setData({
      name: project.name || '',
      description: project.description || '',
      status: project.status || '',
      due_date: project.due_date ? project.due_date.split('T')[0] : '',
      image: project.image || '',
    });
  }
  setModalType(type);
};

const closeModal = () => {
  setSelectedProject(null);
  clearErrors();
  reset();
  setModalType(null);
};

const handleEditSubmit = (e) => {
  e.preventDefault();
  router.put(route('projects.update', selectedProject.id), formData, {
    onSuccess: () => closeModal(),
  });
};

const handleChange = (e) => {
  setData(e.target.name, e.target.value);
};

const deleteProject = (e) => {
  e.preventDefault();

  destroy(route('projects.destroy', selectedProject.id), {
    preserveScroll: true,
    onSuccess: () => closeModal(),
  });
};

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 text-gray-900 dark:text-gray-100">
            {projects.data.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-left text-sm font-semibold text-gray-500 dark:text-gray-400">
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Image</th>
                      <th className="px-4 py-2">Name</th>
                      <th className="px-4 py-2">Description</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Due Date</th>
                      <th className="px-4 py-2">Created At</th>
                      <th className="px-4 py-2">Updated At</th>
                      <th className="px-4 py-2">Created By</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr
                        key={project.id}
                        className="text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition rounded-lg"
                      >
                        <td className="px-4 py-3 font-mono">{project.id}</td>
                        <td className="px-4 py-3">
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.name}
                              className="h-10 w-10 object-cover rounded-md border"
                            />
                          ) : (
                            <div className="h-10 w-10 flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-400 rounded-md text-xs">
                              N/A
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3 font-medium">{project.name}</td>
                        <td className="px-4 py-3 max-w-xs truncate text-gray-600 dark:text-gray-300">
                          {project.description}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              project.status === "completed"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                : project.status === "in_progress"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {project.status.replace("_", " ")}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          {new Date(project.due_date).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          {new Date(project.created_at).toLocaleString()}
                        </td>
                        <td className="px-4 py-3">
                          {new Date(project.updated_at).toLocaleString()}
                        </td>
                        <td className="px-4 py-3">{project.created_by?.name ?? "N/A"}</td>
                        <td className="px-4 py-3 flex space-x-2">
                          <button
                            onClick={() => openModal("view", project)}
                            className="text-blue-500 hover:text-blue-700"
                            aria-label="View project"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => openModal("edit", project)}
                            className="text-yellow-500 hover:text-yellow-700"
                            aria-label="Edit project"
                          >
                            <Pencil size={18} />
                          </button>
                          <button
                            onClick={() => openModal("delete", project)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Delete project"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="mt-6 flex justify-end items-center space-x-2 text-sm">
                  {projects.meta.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.url || "#"}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                      className={`px-3 py-1 rounded-md border ${
                        link.active
                          ? "bg-gray-800 text-white border-gray-800"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      } ${!link.url ? "pointer-events-none opacity-50" : ""}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                No projects found. Start by creating a new one.
              </div>
            )}

            {/* Modal Implementation */}
            {modalType === "view" && selectedProject && (
             <ShowModal selectedProject={selectedProject} closeModal={closeModal} />
            )}

            {modalType === "edit" && selectedProject && (
              <EditModal   closeModal={closeModal}
              formData={formData}
              handleChange={handleChange}
              handleEditSubmit={handleEditSubmit}
              processing={processing}
              errors={errors}/>
        )}

        {modalType === "delete" && selectedProject && (
        <DeleteModal selectedProject={selectedProject} closeModal={closeModal} deleteProject={deleteProject} />
        )}
      </div>
    </div>
  </div>
</AuthenticatedLayout>

    );
}