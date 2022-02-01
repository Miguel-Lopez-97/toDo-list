import React from "react";
import '../GeneralStyle.css'

export function Home() {

    return(
        <div className="Home">
            <h1>
            El to Do list es una herramienta que puede aplicarse a cualquier escala. Esta lista de pendientes, sirve tanto para un proyecto empresarial, como para comenzar un arreglo de pintura en toda la casa.
            </h1>
            <h2>
            Las siguientes estrategias para hacer un listado viable.
            </h2>
            <ul>
            <li><h3>Reserva los últimos 15 minutos de cada día para escribir la lista de pendientes del día siguiente.</h3></li>
                <li><h3>Revisa tu calendario y horarios del día siguiente.</h3></li>
                <li><h3>Planea algunos días adelante para adelantar proyectos grandes.</h3></li>
                <li><h3>Resuelve los pendientes más urgentes por la mañana y lo de mayor plazo por la tarde.</h3></li>
                <li><h3>No trates de predecir el futuro añadiendo tareas que crees que podrían aparecer en tu agenda. Atiende lo que en realidad tienes que hacer para estar disponible cuando salga algún imprevisto.</h3></li>
                <li><h3>en en cuenta los pendientes que te saltaste el día anterior para que tengan alta prioridad en la siguiente jornada.</h3></li>
                <li><h3>Ignora las prioridades dependiendo de la urgencia y el impacto.</h3></li>
                <li><h3>No llenes tu lista con micro pendientes superfluos como “hacer café”.</h3></li>
                <li><h3>Califica tus progresos al finalizar la semana.</h3></li>
            </ul>
        </div>
    );
}