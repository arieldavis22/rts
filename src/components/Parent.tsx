import { ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
        something
        </ChildAsFC>
}

export default Parent