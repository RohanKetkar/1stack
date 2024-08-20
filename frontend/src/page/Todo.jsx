import React, { useState, useEffect } from "react";

import axios from "axios";
import Navbar from "./Navbar";
import Button from "../component/Button";
import { ToastContainer, toast } from "react-toastify";
import { urle } from "../urle";

import { useContext } from "react";

import { CookieContext } from "./context";

import "./loade.css";
const Todo = () => {
  const [todoname, setTodoname] = useState("");
  const [state, setState] = useState(true);
  const [cookie1, setCookie1] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [_id1, set_id1] = useState("");

  const [deleindex, setdeleindex] = useState("");

  const [setstate1, usesetstate1] = useState(false);

  const { cookie } = useContext(CookieContext);

  const [diamond, setdiamond] = useState(false);
  useEffect(() => {
    let cookieValue = localStorage.getItem("cookie");
    setCookie1(cookieValue);
  }, [cookie]);

  useEffect(() => {
    set_id1(Math.floor(Math.random) * 100);
    get();
  }, []);

  useEffect(() => {
    // console.log("editingIndex",editingIndex)
    let cookieValue = localStorage.getItem("cookie");
    setCookie1(cookieValue);
  }, []);
  async function add() {
    try {
      setdiamond(true);

      let res = await axios.post(
        urle + "create1",
        { todoname, _id1: _id1 },
        {
          headers: {
            Authorization: localStorage.getItem("cookie") || cookie1,
          },
        }
      );

      setdiamond(false);
      console.log("res", res);
      setState(!state);
      setTodoname("");
      get();
    } catch (e) {
      console.log(e);
    }
  }

  async function edit(index) {
    const todoToEdit = todoList[index];
    // console.log("todoToEdit",todoToEdit)
    setTodoname(todoToEdit.todoname);
    setEditingIndex(todoToEdit._id);
    // console.log("editingindex",editingIndex)
  }

  async function update() {
    try {
      setdiamond(true);
      console.log(editingIndex);
      let rese = await axios.put(
        `${urle}edit1/${editingIndex}`,
        { index: editingIndex, todo: todoname },
        {
          headers: {
            Authorization: cookie1,
          },
        }
      );

      setdiamond(false);

      console.log(rese);
      console.log("working");

      // console.log(editingIndex)
      setState(!state);
      setTodoname("");
      setEditingIndex(null);
      get();
    } catch (e) {
      console.log(e);
    }
  }

  async function get() {
    console.log("todo1");

    try {
      setdiamond(true);
      let response = await axios.get(urle + "get1", {
        headers: {
          Authorization: localStorage.getItem("cookie") || cookie1,
        },
      });
      setdiamond(false);

      console.log("response", response?.data?.todo?.todo);
      // console.log(response?.data?.todo?.todo);
      setTodoList(response?.data?.todo?.todo);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // console.log("get1")
    get();
    // console.log("todo")
  }, []);

  async function delete1(i) {
    console.log(i);
    let todoindex = todoList[i]._id;

    console.log(todoindex);

    setdeleindex(todoindex);
    try {
      setdiamond(true);

      let rese = await axios.delete(urle + "delete1/" + todoindex, {
        headers: {
          Authorization: cookie1,
        },
      });

      setdiamond(false);

      console.log(rese);

      get();
    } catch (e) {
      console.log(e);
    }
  }

  async function markasdone(i) {
    try {
      setdiamond(true);
      let todoindex = todoList[i]._id;
      console.log(todoindex);

      let rese = await axios.post(urle + "markasdone/" + todoindex, {
        markasdone: true,

        headers: {
          Authorization: cookie1,
        },
      });
      setdiamond(false);
      get();

      console.log("i is", i);

      console.log(rese);

      if (rese.message == "rese") {
        usesetstate1(true);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="todo">
      <Navbar />
      {diamond ? (
        <div className="loader"></div>
      ) : (
        <div className="maindiv mt-[5vw]">
          <h1 className="text-[31px] ml-[8vw] mb-8">
            {editingIndex !== null ? "Edit Todo" : "Create Todo"}
          </h1>

          <div>
            <input
              type="text"
              onChange={(e) => setTodoname(e.target.value)}
              value={todoname}
              className="ml-[10vw]"
            />
            <label
              onClick={() => (editingIndex !== null ? update() : add())}
              className="bg-white text-black p-1 ml-1 cursor-pointer hover:text-[blue]"
            >
              {editingIndex !== null ? "Update" : "Add"}
            </label>
          </div>
          <div>
            {todoList &&
              todoList.map((item, i) => (
                <div
                  key={i}
                  className="divq"
                  onClick={(e) => console.log(e.target)}
                  id={item?.markasdone ? "active" : ""}
                >
                  <div className=" gap-8 flex divq mt-8 p-8  ml-[-10vw] justify-between div">
                    <label className="w-[48px]">{i} :</label>
                    <h1 className=" mr-auto h1">{item.todoname}</h1>
                    <div className="ml-[-11px]   div1">
                      {item?.markasdone ? (
                        ""
                      ) : (
                        <button onClick={() => edit(i)}>Edit</button>
                      )}
                      <button onClick={() => delete1(i)}>Delete</button>
                      {/* <button>markasdone</button> */}

                      {console.log(setstate1)}
                      {item?.markasdone ? (
                        ""
                      ) : (
                        <label
                          className="switch mb-[61px] label"
                          onChange={() => markasdone(i)}
                        >
                          <input type="checkbox" />
                          <span className="slider"></span>
                        </label>
                      )}
                      {item?.markasdone ? (
                        ""
                      ) : (
                        <button
                          className="button"
                          onClick={() => markasdone(i)}
                        >
                          markasdone
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
