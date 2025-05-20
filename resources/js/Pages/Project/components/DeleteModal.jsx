import DangerButton from '@/Components/DangerButton'
import Modal from '@/Components/Modal'
import SecondaryButton from '@/Components/SecondaryButton'

export default function DeleteModal({selectedProject, closeModal, deleteProject}) {
  return (
    <div>
          <Modal show={true} onClose={closeModal}>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Delete Project</h3>
              <p>
                Are you sure you want to delete project{" "}
                <strong>{selectedProject.name}</strong>? This action cannot be undone.
              </p>
              <div className="mt-6 flex justify-end space-x-2">
                <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                <DangerButton onClick={deleteProject}>Delete</DangerButton>
              </div>
            </div>
          </Modal>
    </div>
  )
}
