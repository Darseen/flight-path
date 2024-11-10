import getFlights from "@/actions/get-flights";
import StateWrapper from "./_components/state-wrapper";
import parseSearchParams from "./_utils/parse-search-params";
import ErrorPage from "@/components/error-page";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface Props {
  searchParams: SearchParams;
}

export async function generateMetadata(props: Props) {}

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;

  const { error: parsingError, parsedParams } = parseSearchParams(searchParams);
  if (parsingError)
    return (
      <ErrorPage
        error={parsingError}
        message={parsingError.issues[0].message}
      />
    );

  const { data, error: getFlightsError } = await getFlights(parsedParams);
  if (getFlightsError) return <ErrorPage message={getFlightsError.message} />;

  return (
    <main className="mb-4 px-4">
      <StateWrapper flights={data} />
    </main>
  );
}
