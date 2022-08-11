import { useDispatch } from "react-redux";
import { clearSearch } from "./controls-reducer";

export const CleanSearch = () => {
    const dispatch = useDispatch();

    const cleanUp = dispatch(clearSearch());
    return cleanUp
}