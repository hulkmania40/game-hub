import { HStack, List, ListItem, Image, Text, useToast, Spinner, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props ) => {
  const { data, isLoading, error } = useGenres()

  const toast = useToast()

  if (error) {
    toast({
    title: 'Error while fetching Genre List',
    description: error,
    status: 'error',
    duration: 5000,
    isClosable: true,
  })
  return null}

  if(isLoading) {
    return <Spinner />
  }

  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
              <Button onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
