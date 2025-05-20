import Modal from '@/Components/Modal'
import SecondaryButton from '@/Components/SecondaryButton'
import React from 'react'

export default function ShowModal({selectedProject, closeModal}) {
  return (
    <div>
         <Modal show={true} onClose={closeModal}>
                <div>
                  <h3 className="text-xl font-semibold mb-4">{selectedProject.name}</h3>
                  <p className="mb-2">
                    <strong>Description:</strong> {selectedProject.description}
                  </p>
                  <p className="mb-2">
                    <strong>Status:</strong> {selectedProject.status.replace("_", " ")}
                  </p>
                  <p className="mb-2">
                    <strong>Due Date:</strong>{" "}
                    {new Date(selectedProject.due_date).toLocaleDateString()}
                  </p>
                  <p className="mb-2">
                    <strong>Created By:</strong> {selectedProject.created_by?.name ?? "N/A"}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <SecondaryButton onClick={closeModal}>Close</SecondaryButton>
                  </div>
                </div>
              </Modal>
    </div>
  )
}
