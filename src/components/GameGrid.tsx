import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import useGames from "../hooks/useGames";

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);

  let skeletons = [];
  for (let i = 0; i < 20; i++) {
    skeletons.push(i);
  }

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton/>
            </GameCardContainer>
          ))}
        {data.map((game:any) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
