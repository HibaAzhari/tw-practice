import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../../assets/mark-o.png';
import cross_icon from '../../assets/mark-x.png';
import Header from '../Header/Header';

let data = ["","","","","","","","",""];

const TicTacToe = () => {

    let [count,setCount] = useState(0);
    let [lock,setLock] = useState(false);

    let titleRef = useRef(document.createElement("div"));
    let box0 = useRef(document.createElement("div"));
    let box1 = useRef(document.createElement("div"));
    let box2 = useRef(document.createElement("div"));
    let box3 = useRef(document.createElement("div"));
    let box4 = useRef(document.createElement("div"));
    let box5 = useRef(document.createElement("div"));
    let box6 = useRef(document.createElement("div"));
    let box7 = useRef(document.createElement("div"));
    let box8 = useRef(document.createElement("div"));

    let box_array = [box0,box1,box2,box3,box4,box5,box6,box7,box8];

    const toggle = (e:React.MouseEvent<HTMLDivElement>, num:number) => {
        if (lock) {
            return 0;
        }
        if (count%2===0) {
            e.currentTarget.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = 'x';
            setCount(++count);
        }
        else {
            e.currentTarget.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = 'o';
            setCount(++count);
        }

        checkWin();
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[2]);
        }
        if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[5]);
        }
        if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[6]);
        }
        if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[7]);
        }
        if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[8]);
        }
        if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[6]);
        }
    }

    const won = (winner:string) => {
        setLock(true);
        if (winner === "x") {
            titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}> won!`
        }
        else {
            titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}> won!`
        }
    }

    const reset = () => {
        setLock(false);
        data = ["","","","","","","","",""];
        titleRef.current.innerHTML = `Tic Tac Toe Game with <span>React</span>`;
        box_array.map((e) => {
            e.current.innerHTML = "";
        });
        setCount(0);
    }

  return (
    <>
        <Header/>
        <div className='container'>
            <h1 className='title' ref={titleRef}>Tic Tac Toe Game with <span>React</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className="boxes" ref={box0} onClick={(e)=>toggle(e,0)}></div>
                    <div className="boxes" ref={box1} onClick={(e)=>toggle(e,1)}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>toggle(e,2)}></div>
                </div>
                <div className='row2'>
                    <div className="boxes" ref={box3} onClick={(e)=>toggle(e,3)}></div>
                    <div className="boxes" ref={box4} onClick={(e)=>toggle(e,4)}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>toggle(e,5)}></div>
                </div>
                <div className='row3'>
                    <div className="boxes" ref={box6} onClick={(e)=>toggle(e,6)}></div>
                    <div className="boxes" ref={box7} onClick={(e)=>toggle(e,7)}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>toggle(e,8)}></div>
                </div>
            </div>
            <button className='reset' onClick={() => {reset()}}>Reset</button>
        </div>
    </>
  )
}

export default TicTacToe