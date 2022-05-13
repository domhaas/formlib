import { createRef, ReactElement, useEffect, useState } from "react"
import Text from './controls/Text'
import { deepFilter } from 'react-children-utilities';

const Control = {
    Text
}

interface Props {
    children: ReactElement | ReactElement[],
    onLoaded?: any
}

const Form = ({ children, onLoaded }: Props) => {
    const [controls, setControls] = useState<any>()

    useEffect(() => {
        const items = deepFilter(children, (item: any) => {
            const reactItem = (item as ReactElement)
            // @ts-ignore
            return Object.keys(Control).includes(reactItem.type.displayName)
        })

        let controlItems = {}
        items.forEach((item: any, index) => {
            const Item = item.type
            // @ts-ignore
            controlItems[item.props.name] = <Item ref={createRef()} key={'control' + index} {...item.props} />
        })

        setControls(controlItems)

        /*if (onLoaded) {
            onLoaded(controlItems)
        }*/
    }, [])

    useEffect(() => {
        if (!controls) {
            return
        }
        console.log(controls)
        if (onLoaded) {
            console.log(controls.test.ref.current)

            let items = {}
            Object.values(controls).forEach((obj: any) => {
                // @ts-ignore
                items[obj.props.name] = obj.ref.current
            })

            onLoaded(items)
        }
    }, [controls])

    const onChange = (e: any) => {
        console.log(e.target.name)
    }

    if (!controls) {
        return <></>
    }

    return (
        <form onChange={onChange}>
            {Object.values(controls!)}
        </form>
    )
}

export default Form
export { Control }