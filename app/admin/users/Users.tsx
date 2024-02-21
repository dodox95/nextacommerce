'use client';
import UserModel from '@/lib/models/UserModel';
import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

// Confirmation Modal component
const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md shadow-xl">
        <h4 className="text-lg mb-4">Are you sure you want to delete this user?</h4>
        <div className="flex justify-end">
          <button onClick={onClose} className="btn btn-secondary mr-2">
            No
          </button>
          <button onClick={onConfirm} className="btn btn-error">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

// Users component
export default function Users() {
  const { data: users, error } = useSWR(`/api/admin/users`);
  const { trigger: deleteUser } = useSWRMutation(
    `/api/admin/users`,
    async (url, { arg }: { arg: { userId: string } }) => {
      const toastId = toast.loading('Deleting user...');
      const res = await fetch(`${url}/${arg.userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('User deleted successfully', {
          id: toastId,
        });
      } else {
        toast.error(data.message, {
          id: toastId,
        });
      }
    }
  );

  // State for the confirmation modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDeleteClick = (userId) => {
    setSelectedUserId(userId);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (selectedUserId) {
      deleteUser({ userId: selectedUserId });
    }
    setModalOpen(false);
  };

  if (error) return <div>An error has occurred.</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
      <h1 className="py-4 text-2xl">Users</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>admin</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                <td>
                  <Link href={`/admin/users/${user._id}`}>
                    <button type="button" className="btn btn-info btn-sm">
                      Edit
                    </button>
                  </Link>
                  &nbsp;
                  <button
                    onClick={() => handleDeleteClick(user._id)}
                    type="button"
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
