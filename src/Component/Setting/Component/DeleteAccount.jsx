import React, { useState } from "react";
import deleteUserApi from "../../Api/User/deleteUserApi";
import ConfirmModal from "../../Button/ConformModal";

const DeleteAccount = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: () => {},
  });

  const handleLogout = () => {
    setModalData({
      isOpen: true,
      title: "Log Out?",
      message: "Are you sure you want to log out?",
      onConfirm: () => {
        localStorage.removeItem("token");
        window.location.href = "/";
      },
    });
  };

  const handleDelete = () => {
    setModalData({
      isOpen: true,
      title: "Delete Account?",
      message: "This will permanently delete your account. Continue?",
      onConfirm: () => {
        deleteUserApi();
        setModalData((prev) => ({ ...prev, isOpen: false }));
      },
    });
  };

  return (
    <>
      <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
        <div className="flex-1 flex flex-col gap-3 justify-center items-center">
          <div className="text-gray-700 font-bold text-xl italic ">
            Delete Account
          </div>
          <div
            className="w-fit border border-red-300 bg-red-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-red-300 hover:shadow-xl hover:shadow-red-700/50 hover:border-red-700 hover:bg-red-700 cursor-pointer "
            onClick={handleDelete}
          >
            Delete Account
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3 justify-center items-center">
          <div className="text-gray-700 font-bold text-xl italic ">Log Out</div>
          <div
            className="w-fit border border-gray-300 bg-gray-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-gray-300 hover:shadow-xl hover:shadow-gray-700/50 hover:border-gray-700 hover:bg-gray-700 cursor-pointer "
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={modalData.isOpen}
        title={modalData.title}
        message={modalData.message}
        onConfirm={() => {
          modalData.onConfirm();
          setModalData((prev) => ({ ...prev, isOpen: false }));
        }}
        onCancel={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
      />
    </>
  );
};

export default DeleteAccount;
