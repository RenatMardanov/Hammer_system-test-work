import chairUpImage from "./../../../assets/png/chair_up.png";
import chairDownImage from "./../../../assets/png/chair_down.png";
import chairLeftImage from "./../../../assets/png/chair_left.png";
import chairRightImage from "./../../../assets/png/chair_right.png";
import tableRoundImage from "./../../../assets/png/table_round.png";
import tableSquareImage from "./../../../assets/png/table_square.png";
import RestaurantHall from "./RestaurantHall";
import { useDrag } from "react-dnd";
import { Button } from "antd";
import { DownloadOutlined, UploadOutlined, ClearOutlined } from "@ant-design/icons";
import IntlMessage from "components/util-components/IntlMessage";
import fileDownload from "js-file-download";
import { useRef, useState } from "react";

export const FURNITURE_ID = {
    CHAIR_UP: "chair_up",
    CHAIR_DOWN: "chair_down",
    CHAIR_LEFT: "chair_left",
    CHAIR_RIGHT: "chair_right",
    ROUND_TABLE: "round_table",
    SQUARE_TABLE: "square_table",
};

const FURNITURE_TO_IMAGE = {
    [FURNITURE_ID.CHAIR_UP]: chairUpImage,
    [FURNITURE_ID.CHAIR_DOWN]: chairDownImage,
    [FURNITURE_ID.CHAIR_LEFT]: chairLeftImage,
    [FURNITURE_ID.CHAIR_RIGHT]: chairRightImage,
    [FURNITURE_ID.ROUND_TABLE]: tableRoundImage,
    [FURNITURE_ID.SQUARE_TABLE]: tableSquareImage,
};
const stateInit = () => {
    return new Array(6 * 8).fill(null);
};

export const FurnitureRoom = () => {
    const [grid, setGrid] = useState(stateInit());

    const fileRef = useRef(null);

    const handleDrop = (index, id, fromIndex) => {
        setGrid((oldGrid) => {
            const newGrid = [...oldGrid];
            newGrid[index] = id;
            if (fromIndex) {
                newGrid[fromIndex] = undefined;
            }
            return newGrid;
        });
    };

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target.result;
                const parsedContent = JSON.parse(content);
                setGrid(parsedContent);
            };
            reader.readAsText(file);
        }
    };

    const clearState = () => {
        setGrid(stateInit());
    };

    function downloadGrid() {
        fileDownload(JSON.stringify(grid), "FurnitureHall.json");
    }

    return (
        <div>
            <div className="d-flex justify-content-center pb-3 font-size-xl">Drag and Drop</div>
            <div className="d-flex flex-row">
                <div className="d-flex w-50">
                    {Object.keys(FURNITURE_ID).map((key) => (
                        <FurnitureItems id={FURNITURE_ID[key]} key={key} />
                    ))}
                </div>
                <RestaurantHall grid={grid} onDrop={handleDrop} />
            </div>
            <div className="d-flex w-50 justify-content-around">
                <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    size={"middle"}
                    onClick={downloadGrid}
                >
                    <IntlMessage id="download" />
                </Button>
                <Button
                    type="primary"
                    icon={<UploadOutlined />}
                    size={"middle"}
                    onClick={() => {
                        fileRef.current.click();
                    }}
                >
                    <IntlMessage id="upload" />
                </Button>
                <Button type="danger" icon={<ClearOutlined />} size={"middle"} onClick={clearState}>
                    <IntlMessage id="clear" />
                </Button>
                <input
                    ref={fileRef}
                    type="file"
                    style={{ display: "none" }}
                    onChange={onFileChange}
                />
            </div>
        </div>
    );
};

export const FurnitureItems = ({ id, index }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: id,
        item: { id, index },
    });

    return (
        <div
            ref={dragRef}
            key={id}
            style={{
                backgroundImage: `url(${FURNITURE_TO_IMAGE[id]})`,
                backgroundSize: "cover",
                width: "64px",
                height: "64px",
                opacity: isDragging ? 0.5 : 1,
            }}
        ></div>
    );
};
