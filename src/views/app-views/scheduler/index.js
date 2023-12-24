import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FurnitureRoom } from "./FurnitureRoom";

const Scheduler = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <FurnitureRoom />
        </DndProvider>
    );
};

export default Scheduler;
