import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} TiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} TiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */
export const crearDeck = (TiposDeCarta, TiposEspeciales) => {

    if(!TiposDeCarta || TiposDeCarta.length===0) 
    throw new Error('TiposDeCarta es obligatorio como un arreglo de String');

    if(!TiposEspeciales || TiposEspeciales.length===0) 
    throw new Error('TiposEspeciales es obligatorio como un arreglo de String');
    

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of TiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of TiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}
