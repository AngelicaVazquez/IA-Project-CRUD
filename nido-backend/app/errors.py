class ErrorReserva(Exception):
    pass


class HoraInvalida(ErrorReserva):
    pass


class SalaInvalida(ErrorReserva):
    pass


class FechaPasada(ErrorReserva):
    pass


class HuecoOcupado(ErrorReserva):
    pass


class ReservaNoExiste(ErrorReserva):
    pass


class YaCancelada(ErrorReserva):
    pass