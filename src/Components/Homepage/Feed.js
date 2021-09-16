import axios from "axios";
import React from "react";

import Searchbar from "../../components/Homepage/Searchbar";
import Card from "../Card/Card"
import StudentsBar from "./StudentsBar/StudentsBar";

class Feed extends React.Component {
  state = {
    filteredCards: [],
    allCards: [],
  };

    componentDidMount = async () => {
        try {
            const response = await axios.get(
                "https://ironrest.herokuapp.com/natSanderIronStudy"
            );
            response.data.sort((a, b) => {
                return b._id.localeCompare(a._id);
            });
            this.setState({ allCards: response.data, filteredCards: response.data });
        } catch (error) {
            console.error(error);
        }
    };

    filterCards = (searchTerm) => {
        const normalizedSearchTerm = searchTerm.toLowerCase();
    
        if (!searchTerm) {
          return this.setState({ filteredCards: [...this.state.allCards] });
        }
    
        const allCardsClone = [...this.state.allCards];
    
        //O filter recebe uma callback que precisa retornar boolean
    
        const filtered = allCardsClone.filter((textCard) => {
          const hasAuthor = textCard.author
            .toLowerCase()
            .includes(normalizedSearchTerm);
          const hasText = textCard.text
            .toLowerCase()
            .includes(normalizedSearchTerm);
          const hasTag = textCard.tag.toLowerCase().includes(normalizedSearchTerm);
    
          return hasAuthor || hasText || hasTag;
        });
    
        this.setState({ filteredCards: [...filtered] });
      };

    render() {
        return (
            <div>
                <StudentsBar state={this.state} />
                <Searchbar onChange={this.filterCards} />
                <div className="container mt-2 mb-2 d-flex flex-column justify-content-center align-items-center">
                {/* <h1 className="text-center my-2 mb-3">Feed</h1> */}
                {this.state.filteredCards.map((card) => {
                    return (
                        <Card card={card} key={card._id} />
                    );
                })}
                </div>
            </div>
        );
    }
}

export default Feed;