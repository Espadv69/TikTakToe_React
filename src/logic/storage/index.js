export const saveGameToStorage = ({ board, turn }) => {
    // Guardar aquí partida
    window.localStorage.setItem('board', JSON.stringify(board))
    // Guardar turno
    window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')    
}