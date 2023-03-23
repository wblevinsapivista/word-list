import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { Stock } from "../../../actions/stock";

interface StockDetailProps {
  stock: Stock | null;
}

const StockDetail = (props: StockDetailProps) => {
  const { stock } = props;

  if (stock) {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="stock detail table">
          <TableBody>
            <TableRow>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">{stock.symbol}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">{stock.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">{stock.type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Region</TableCell>
              <TableCell align="right">{stock.region}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Market Open</TableCell>
              <TableCell align="right">{stock.marketOpen}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Market Close</TableCell>
              <TableCell align="right">{stock.marketClose}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Timezone</TableCell>
              <TableCell align="right">{stock.timezone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Currency</TableCell>
              <TableCell align="right">{stock.currency}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <></>;
  }
};

export { StockDetail };
