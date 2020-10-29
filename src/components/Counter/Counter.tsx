import React from "react"
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import s from "./Counter.module.css";

type CounterType = {
    displayedDigit: number
    startValue: number
    maxValue: number
    prompt: string
    disabledInc: boolean
    disabledReset: boolean
    disabledSet: boolean
    changeDigit: (displayedDigit: number) => void
    onSetButtonClick: () => void
}

export const Counter = (props: CounterType) => {
    return (
        <div className={s.counterWrapper}>
            <Display displayedDigit={props.displayedDigit} maxValue={props.maxValue} prompt={props.prompt}/>
            <div className={s.btnBlock}>
                <Button title={"inc"} disabled={props.disabledInc} changeDigit={props.changeDigit}
                        displayedDigit={props.displayedDigit}/>
                <Button title={"reset"} disabled={props.disabledReset} changeDigit={props.changeDigit} startValue={props.startValue}/>
                <Button title={"set"}
                        disabled={props.disabledSet}
                        onSetButtonClick={props.onSetButtonClick}/>
            </div>
        </div>
    )
}