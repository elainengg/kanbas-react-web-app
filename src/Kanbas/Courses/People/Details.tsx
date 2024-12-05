import { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";
import * as client from "../../Account/client";
export default function PeopleDetails() {
  const { uid} = useParams();
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };

  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="text-danger fs-4">
    {!editing && (
      <FaPencil onClick={() => setEditing(true)}
          className="float-end fs-5 mt-2 wd-edit" /> )}
    {editing && (
      <FaCheck onClick={() => saveUser()}
          className="float-end fs-5 mt-2 me-2 wd-save" /> )}
    {!editing && (
      <div className="wd-name"
           onClick={() => setEditing(true)}>
        {user.firstName} {user.lastName}</div>)}
    {user && editing && (
      <input className="form-control w-50 wd-edit-name"
        defaultValue={`${user.firstName} ${user.lastName}`}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") { saveUser(); }}}/>)}
  </div> ); }