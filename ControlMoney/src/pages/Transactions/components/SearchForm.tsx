import { MagnifyingGlass } from "phosphor-react";
import { SearchFormConatainer } from "./styles";

export function SearchForm(){
  return(
    <SearchFormConatainer>
      <input type="text" placeholder="Busque por Transações" />
      <button type="submit">
        <MagnifyingGlass size={20}/>
        Buscar 
      </button>
    </SearchFormConatainer>
  )
}