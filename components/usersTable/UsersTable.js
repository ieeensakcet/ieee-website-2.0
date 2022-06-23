import { useEffect, useState } from "react";
import styles from "./UsersTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CreateUserForm from "../../components/UserForm/UserForm";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { deleteUser } from "../../helpers/userDB";
import { getApp } from "firebase/app";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "users"), (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //modal create user
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //modal update user
  const [updateOpen, setUpdateOpen] = useState(false);
  const handleUpdateOpen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);

  //delete warning modal
  const [DeleteOpen, setDeleteOpen] = useState(false);
  const DeleteHandleOpen = () => setDeleteOpen(true);
  const DeleteHandleClose = () => setDeleteOpen(false);

  const [selectedRows, setSelectedRows] = useState();

  //delete user auth function
  const functions = getFunctions(getApp());
  // const functions = firebaseFunctions;
  connectFunctionsEmulator(functions, "localhost", 5001);
  const deleteUserAuth = httpsCallable(functions, "deleteUserAuth");

  //delete user
  const DeleteUser = () => {
    const [userToBeDeleted] = selectedRows;
    deleteUserAuth({ email: userToBeDeleted.email });
    deleteUser(userToBeDeleted.id);
    DeleteHandleClose();
  };

  const columns = [
    { field: "id", headerName: "Membership ID", width: 120 },
    {
      field: "displayName",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email ID",
      width: 250,
      editable: true,
    },
    {
      field: "customClaims",
      headerName: "Site Role",
      width: 150,
      editable: true,
    },
    {
      field: "society",
      headerName: "Society",
      width: 150,
      editable: true,
    },
    {
      field: "societyRole",
      headerName: "Society Role",
      width: 100,
      editable: true,
    },
    {
      field: "excom",
      headerName: "Member of ExCom",
      width: 150,
      editable: true,
    },
    {
      field: "imageURL",
      headerName: "Image URL",
      width: 150,
      editable: true,
    },
    {
      field: "linkedinURL",
      headerName: "Linkedin URL",
      width: 150,
      editable: true,
    },
  ];

  return (
    <div className={styles.dashboard__container}>
      <div className={styles.dashboard__container__header}>
        <div className={styles.dashboard__container__header__content}>
          <Typography variant="h6" sx={{ color: "#12679b" }}>
            All Users
          </Typography>
          <span>|</span>
          <Typography variant="body1">30 total</Typography>
        </div>
        <div className={styles.dashboard__container__header__buttons}>
          <div className={styles.dashboard__container__header__buttons__boxRed}>
            <Button
              sx={{ color: "#fff" }}
              endIcon={<DeleteIcon />}
              onClick={DeleteHandleOpen}
            >
              Delete User
            </Button>
            <Dialog
              open={DeleteOpen}
              onClose={DeleteHandleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Do you really want to delete the user? This cannot be undone.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={DeleteHandleClose} autoFocus>
                  No
                </Button>
                <Button onClick={DeleteUser} sx={{ color: "red" }}>
                  Yes, Delete User
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div
            className={
              styles.dashboard__container__header__buttons__box__update
            }
          >
            <Button
              sx={{ color: "#fff" }}
              endIcon={<AddBoxIcon />}
              // onClick={openModal}
              onClick={handleUpdateOpen}
            >
              Update User
            </Button>
            <Modal
              open={updateOpen}
              onClose={handleUpdateClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 8,
                  textAlign: "center",
                }}
              >
                <Button
                  onClick={() => setUpdateOpen((prev) => !prev)}
                  variant="contained"
                  endIcon={<CloseIcon />}
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    backgroundColor: "#db2b39",
                  }}
                >
                  Close
                </Button>
                <h1 className={styles.title__modal}>
                  Update User<span className={styles.span}>Account</span>
                </h1>
                <CreateUserForm props={selectedRows} />
              </Box>
            </Modal>
          </div>
          <div className={styles.dashboard__container__header__buttons__box}>
            <Button
              sx={{ color: "#fff" }}
              endIcon={<AddBoxIcon />}
              // onClick={openModal}
              onClick={handleOpen}
            >
              Add User
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 8,
                  textAlign: "center",
                }}
              >
                <Button
                  onClick={() => setOpen((prev) => !prev)}
                  variant="contained"
                  endIcon={<CloseIcon />}
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    backgroundColor: "#db2b39",
                  }}
                >
                  Close
                </Button>
                <h1 className={styles.title__modal}>
                  Create User<span className={styles.span}>Account</span>
                </h1>
                <CreateUserForm />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRowData = users.filter((user) =>
              selectedIDs.has(user.id)
            );
            setSelectedRows(selectedRowData);
          }}
          sx={{ border: "none" }}
        />
      </div>
    </div>
  );
}
