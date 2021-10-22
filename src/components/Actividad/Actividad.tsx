import { useEffect } from "react";
import "./Actividad.scss";
import ActividadContext, { ActividadContextProvider } from "./config/ActividadContext";
import MEDIA from "./config/Routes";

const Actividad = () => {
    return <ActividadContextProvider>
        <ActividadLoad />
    </ActividadContextProvider>
}

const ActividadLoad = () => {
    const { useActividad } = ActividadContext();
    const [actividad] = useActividad();

    useEffect(() => {

      
    }, [])


    return <></>


}

export default Actividad;


