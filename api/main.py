from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from db_assistencia import consultar_asistencia
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

class AsistenciaAlumnoRequest(BaseModel):
    fecha: str
    id_alumno: int


@app.post("/asistencia/alumno")
def obtener_asistencia(data: AsistenciaAlumnoRequest):
    asistencia = consultar_asistencia(data.id_alumno, data.fecha)
    if asistencia is None:
        raise HTTPException(status_code=404, detail="No se encontraron asistencias para el alumno en esa fecha.")
    return asistencia
    
