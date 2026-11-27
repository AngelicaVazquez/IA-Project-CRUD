from dataclasses import dataclass
from datetime import date
from enum import Enum

class EstadoReserva(Enum):
    CONFIRMADA = "confirmed"
    CANCELADA = "cancelled"

@dataclass
class Reserva:
    id: str
    sala_id: int
    fecha: date
    hora_inicio: int
    estado: EstadoReserva = EstadoReserva.CONFIRMADA