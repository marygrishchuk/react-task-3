import React, {useEffect, useState} from 'react';
import './App.css';
import {ValueSetter} from "./components/ValueSetter/ValueSetter";
import {Counter} from "./components/Counter/Counter";

function App() {


    let [startValue, setStartValue] = useState<number>(Number(localStorage.getItem("startValue")) || 0)
    let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem("maxValue")) || 5)
    let [prompt, setPrompt] = useState<string>("")
    let [disabledInc, setDisabledInc] = useState<boolean>(false)
    let [disabledReset, setDisabledReset] = useState<boolean>(false)
    let [disabledSet, setDisabledSet] = useState<boolean>(true)
    let [displayedDigit, setDisplayedDigit] = useState<number>(startValue)

    useEffect(() => {
        localStorage.setItem("startValue", startValue.toString())
        localStorage.setItem("maxValue", maxValue.toString())
    }, [startValue, maxValue])

    function onValueChange(inputDigit: number, title: string) {
        if (title === "start value:") {
            startValue = inputDigit
            setStartValue(startValue)
        } else if (title === "max value:") {
            maxValue = inputDigit
            setMaxValue(maxValue)
        }
        changePrompt()
        setDisabledInc(true)
        setDisabledReset(true)
    }

    function changePrompt() {
        if (startValue < 0 || maxValue <= startValue) {
            setDisabledSet(true)
            setPrompt("Incorrect value!")
        } else {
            setDisabledSet(false)
            setPrompt("enter values and press 'set'")
        }
    }

    function onSetButtonClick() {
        setDisabledSet(true)
        setDisabledInc(false)
        setDisabledReset(false)
        setPrompt("")
        setDisplayedDigit(startValue)
    }

    function changeDigit(displayedDigit: number) {
        setDisplayedDigit(displayedDigit)
        disableButton(displayedDigit)
    }

    function disableButton(displayedDigit: number) {
        if (displayedDigit === maxValue) {
            setDisabledInc(true)
        } else if (displayedDigit === startValue) {
            setDisabledInc(false)
        }
    }

    return (
        <div className={"app-wrapper"}>
            <ValueSetter
                maxValue={maxValue}
                startValue={startValue}
                onValueChange={onValueChange}
                prompt={prompt}
                disabledSet={disabledSet}
                onSetButtonClick={onSetButtonClick}/>
            <Counter
                displayedDigit={displayedDigit}
                startValue={startValue}
                maxValue={maxValue}
                prompt={prompt}
                disabledInc={disabledInc}
                disabledReset={disabledReset}
                disabledSet={disabledSet}
                onSetButtonClick={onSetButtonClick}
                changeDigit={changeDigit}/>
        </div>
    )
}

export default App;
