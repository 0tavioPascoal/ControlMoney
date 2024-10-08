import { MagnifyingGlass } from "phosphor-react";
import { SearchFormConatainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions  = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    console.log(data.query)
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormConatainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por Transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormConatainer>
  );
}
