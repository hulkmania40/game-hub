import { Button, Menu, MenuButton, MenuItem, MenuList, useToast } from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

const PlatformSelector = ({onSelectedPlatform, selectedPlatform}: Props) => {

    const {data, error} = usePlatforms()

    const toast = useToast()

    if (error) {
        toast({
        title: 'Error while fetching Platform List',
        description: error,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return null}

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronRight />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map(platform => <MenuItem key={platform.id} onClick={()=>onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
