import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeTheme } from "./theme-reducer";


export const useTheme = () => {
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();
  
    const changeItems = () =>
      dispatch(changeTheme(theme === "light" ? "dark" : "light"));
  
    useEffect(() => {
      document.body.setAttribute("data-theme", theme);
    }, [theme]);
  return [theme, changeItems]
}