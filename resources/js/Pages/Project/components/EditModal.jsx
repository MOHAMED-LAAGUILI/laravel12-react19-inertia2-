import Modal from '@/Components/Modal'
import SecondaryButton from '@/Components/SecondaryButton'
import React from 'react'

export default function EditModal({ closeModal, handleEditSubmit, formData, handleChange}) {
  return (
    <div>
        <Modal show={true} onClose={closeModal}>
                <form onSubmit={handleEditSubmit} className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold">Edit Project</h3>

                  <div>
                    <label className="block mb-1 font-medium" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
                      rows={3}
                      />
                      </div>   

                      <div>
                <label className="block mb-1 font-medium" htmlFor="status">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
                  required
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium" htmlFor="due_date">
                  Due Date
                </label>
                <input
                  id="due_date"
                  name="due_date"
                  type="date"
                  value={formData.due_date}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <SecondaryButton type="button" onClick={closeModal}>
                  Cancel
                </SecondaryButton>
                <SecondaryButton type="submit">Save</SecondaryButton>
              </div>
            </form>
          </Modal>
    </div>
  )
}
