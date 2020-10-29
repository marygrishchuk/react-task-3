import React from "react";
import s from './Display.module.css';

type PropsType = {
    displayedDigit: number
    maxValue: number
    prompt: string
}

export function Display(props: PropsType) {

    let digitClassName = props.displayedDigit === props.maxValue ? s.counterStop : s.counter
    let textClassName = props.prompt === "Incorrect value!" ? s.error : s.prompt

    return (
        <div className={props.prompt ? textClassName : digitClassName}>
            {props.prompt ? props.prompt : props.displayedDigit}
        </div>
    )
}