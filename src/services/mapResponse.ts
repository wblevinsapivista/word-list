import { StockSearchResponse } from "../actions/stock";

// because the response from alphavantage is pretty gross,
// we're doing a mapping here to make it more palatable
export const mapResponse = (response: any): StockSearchResponse => {
  const mappedResponse: { stocks: any[] } = { stocks: [] };
  for (const match of response.bestMatches) {
    const stockItem = {
      symbol: match["1. symbol"],
      name: match["2. name"],
      type: match["3. type"],
      region: match["4. region"],
      marketOpen: match["5. marketOpen"],
      marketClose: match["6. marketClose"],
      timezone: match["7. timezone"],
      currency: match["8. currency"],
      matchScore: match["9. matchScore"],
    };
    mappedResponse.stocks.push(stockItem);
  }

  return mappedResponse;
};
