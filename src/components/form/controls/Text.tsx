import { forwardRef, useImperativeHandle, useRef, useState } from "react"

interface Props {
    name: string
}

const Text = forwardRef<HTMLInputElement>((props: any, ref: any) => {
    const [disabled, setDisabled] = useState(props.disabled)
    // @ts-ignore
    const { name } = props

    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            // @ts-ignore
            inputRef.current.focus();
        },
        setDisabled: () => {
            // @ts-ignore
            setDisabled(true)
        }
    }));
    return (
        <><span>{name}: </span>
            {
                // @ts-ignore
            }<input type="text" name={name} ref={inputRef} disabled={disabled} />
        </>
    )
})

Text.displayName = 'Text'

export default Text