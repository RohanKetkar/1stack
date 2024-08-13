// import React from "react";

// import Navbar from "./Navbar";
// import { useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";

// import Button from "../component/Button";

// const Todo = () => {
//   const [todo, settodo] = useState("");

//   const [state, setstate] = useState(true);
//   const [cookie, setcookie] = useState("");
//   const [todo1, settodo1] = useState([]);

//   useEffect(() => {
//     let cookie1 = localStorage.getItem("cookie");
//     setcookie(cookie1);
//   }, [cookie]);
//   async function add() {
//     try {
//       console.log(localStorage.getItem("cookie"));
//       let rese = await axios.post("http://localhost:8000/api/v1/create1", {
//         todo: todo,
//         headers: {
//           Authorization: cookie,
//         },
//       });
//       console.log(rese);

//       setstate(!state);
//       settodo("");
//     } catch (e) {
//       console.log(e);
//     }
//   }
// async function edit(i){

//   try{
//     // let rese=await axios.put("http://localhost:8000/api/v1/edit/"+i)
//     console.log(i)
//     todo1[6] ="rohan"
//     console.log("todo1[6]",todo1[6])
//     settodo1((todo)=>console.log(todo[6]))
//   }catch(e){
//     console.log(e)}
// }
//   async function get() {
//     try {
//       let todo1 = await axios.get("http://localhost:8000/api/v1/get1", {
//         headers: {
//           Authorization: cookie,
//         },
//       });
//       console.log(todo1?.data?.todo?.todo);
//       settodo1(todo1?.data?.todo?.todo);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   useEffect(() => {
//     get();
//   }, [state]);
//   return (
//     <div>
//       <Navbar />
//       <div className="ml-[30vw] mt-[5vw]">

//         <h1 className="text-[31px] ml-8 mb-8">create is todo</h1>

//         <div>
//           <input
//             type="text"
//             onChange={(e) => settodo(e.target.value)}
//             value={todo}
//           />
//           <label onClick={() => add()} className="bg-white text-black p-1 ml-1">add</label>

//         </div>
//         <div>
//           {todo1 &&
//             todo1?.map((item,i) => {
//               return <div key={i} className="ml-[-8vw]" onClick={(e)=>console.log(e.target)}>
//                 <div className="bg-blue-800 gap-8 flex w-[60vw] mt-8 p-8 text-[31px]">
//                 <label>{i} : </label>
//                 <h1>{item}</h1>
//                 <div className="ml-[28vw] gap-8 flex text-[21px]">

//                 <button onClick={(e)=>edit(i)}>edit {i}</button>
//                 <button>delete</button>
//                 </div>
//                 </div>

//                 </div>;
//             })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Todo;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Button from "../component/Button";

import {urle} from "../urle"
const Todo = () => {
  const [todoname, setTodoname] = useState("");
  const [state, setState] = useState(true);
  const [cookie, setCookie] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [_id1, set_id1] = useState("");

  const [deleindex, setdeleindex] = useState("");







  const [setstate1,usesetstate1]=useState(false)
  useEffect(() => {
    let cookieValue = localStorage.getItem("cookie");
    setCookie(cookieValue);
  }, [cookie]);

  useEffect(() => {
    set_id1(Math.floor(Math.random) * 100);
  }, []);

  useEffect(() => {
    // console.log("editingIndex",editingIndex)
    let cookieValue = localStorage.getItem("cookie");
    setCookie(cookieValue);
  }, []);
  async function add() {
    try {
      let res = await axios.post(
        urle+"create1",
        { todoname, _id1: _id1 },
        {
          headers: {
            Authorization: localStorage.getItem("cookie") || cookie,
          },
        }
      );
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
      console.log(editingIndex);
      let rese = await axios.put(
        `http://localhost:8000/api/v1/edit1/${editingIndex}`,
        { index: editingIndex, todo: todoname },
        {
          headers: {
            Authorization: cookie,
          },
        }
      );

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
console.log(rese)
    try {
      let response = await axios.get(urle+"get1", {
        headers: {
          Authorization: localStorage.getItem("cookie") || cookie,
        },
      });

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
      let rese = await axios.delete(
        "http://localhost:8000/api/v1/delete1/" + todoindex,
        {
          headers: {
            Authorization: cookie,
          },
        }
      );
      console.log(rese);

      get();
    } catch (e) {
      console.log(e);
    }
  }





  async function markasdone(i){try{


    let todoindex=todoList[i]._id
    console.log(todoindex)





    let rese=await axios.post("http://localhost:8000/api/v1/markasdone/"+todoindex,{
      markasdone:true,
    
    headers:{
      Authorization:cookie
    }
  })
  


get()

    console.log("i is",i)




    console.log(rese)
    





    if(rese.message=="rese"){
      

      usesetstate1(true)
    }
  }catch(e){
    console.log(e)
  }}
  return (
    <div>
      <Navbar />
      <div className="ml-[30vw] mt-[5vw]">
        <h1 className="text-[31px] ml-8 mb-8">
          {editingIndex !== null ? "Edit Todo" : "Create Todo"}
        </h1>

        <div>
          <input
            type="text"
            onChange={(e) => setTodoname(e.target.value)}
            value={todoname}
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
                className="ml-[-8vw]"
                onClick={(e) => console.log(e.target)}
                id={item?.markasdone ?"active":""}
              >
                <div className="bg-blue-800 gap-8 flex w-[80vw] mt-8 p-8 text-[31px] ml-[-10vw] justify-between">
                  <label className="w-[48px]">{i} :</label>
                  <h1 className=" mr-auto">{item.todoname}</h1>
                  <div className="ml-[-21px] gap-8 flex text-[21px]">
                    {item?.markasdone?"":<button onClick={() => edit(i)}>Edit</button>}
                    <button onClick={() => delete1(i)}>Delete</button>
                    {/* <button>markasdone</button> */}


{console.log(setstate1)}
                    {item?.markasdone ?"":<label className="switch mb-[61px]" onChange={()=>markasdone(i)}>
                      <input type="checkbox" />
                      <span className="slider"></span>
                      
                    </label>}
                    {item?.markasdone?"":<button className="ml-[-111px]">markasdone</button>}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
