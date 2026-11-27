from datetime import date, datetime

from app.model import EstadoReserva
from app.service import ServicioReservas

AHORA = datetime(2026, 11, 26, 12, 0)
MANANA = date(2026, 11, 27)


def test_reservar_sala_libre_devuelve_reserva_confirmada():
    servicio = ServicioReservas(salas=[1, 2, 3, 4, 5])

    reserva = servicio.crear_reserva(
        sala_id=1, fecha=MANANA, hora_inicio=10, ahora=AHORA
    )

    assert reserva.sala_id == 1
    assert reserva.fecha == MANANA
    assert reserva.hora_inicio == 10
    assert reserva.estado == EstadoReserva.CONFIRMADA