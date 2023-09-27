import React from "react";

import { createStage } from "../gameHelpers";

//components
import StartButton from "./StartButton";
import Display from "./Display";
import Stage from "./Stage";


const Tetris = () =>{


    return (
        <div>
            <Stage stage ={createStage()}/>
            <aside>
                <div>
                    <Display text = "Score"/>
                    <Display text = "Rows"/>
                    <Display text = "Level"/>
                </div>
                <StartButton/>
            </aside>
        </div>
    )
}

export default Tetris;