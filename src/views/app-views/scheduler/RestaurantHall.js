import { useDrop } from "react-dnd";
import { FURNITURE_ID, FurnitureItems } from "./FurnitureRoom";

const CELL_SIZE = 64;

const RestaurantHall = ({ grid, onDrop }) => {
    return (
        <div className="d-flex flex-wrap w-50" style={{ border: "1px solid black" }}>
            {grid.map((id, index) => (
                <HallCell key={index} index={index} onDrop={onDrop} id={id} />
            ))}
        </div>
    );
};

export default RestaurantHall;

const HallCell = ({ index, onDrop, id }) => {
    const [{ isOver }, dropRef] = useDrop({
        accept: Array.from(Object.values(FURNITURE_ID)),
        drop(item) {
            onDrop(index, item.id, item.index);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={dropRef}
            style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                backgroundColor: isOver ? "lightgray" : "white",
            }}
        >
            {id && <FurnitureItems id={id} index={index} />}
        </div>
    );
};
