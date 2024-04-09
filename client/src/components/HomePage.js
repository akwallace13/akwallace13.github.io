const ListHeader = ({ listName }) => {

const signOut = () => {
    console.log('signout')
}

    return (
      <div className="list-header">
        <h1>{listName}</h1>
        <div className="button-container">
            <button className="create">CREATE ACCOUNT</button>
            <button className="login">LOGIN</button>
            <button className="signout" onClick={signOut}>SIGN OUT</button>
            <button className="howTo">HOW TO PLAY</button>
        </div>

        <div className="game-selection">
          <button className="Word">Word</button>
          <button className="Jobs">Job</button>
          <button className="FoodAndDrink">Food and Drink</button>
          <button className="Place">Place</button>
          <button className="Phrase">Phrase</button>
          <button className="Random">Random</button>
        </div>
      </div>
    )
  }
  
  export default ListHeader;