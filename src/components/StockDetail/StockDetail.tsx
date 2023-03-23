import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import { Stock } from "../../actions/stock";

interface StockDetailProps {
  stock: Stock;
}

const StockDetail = (props: StockDetailProps) => {
  const { stock } = props;

  <TableContainer component={Paper}>
    <Table aria-label="simple table">
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
  </TableContainer>;

  return (
    <table>
      <tr>
        <td>Symbol</td>
        <td>{stock.symbol}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{stock.name}</td>
      </tr>
      <tr>
        <td>Region</td>
        <td>{stock.region}</td>
      </tr>
      <tr>
        <td>Market Open</td>
        <td>{stock.marketOpen}</td>
      </tr>
      <tr>
        <td>Market Close</td>
        <td>{stock.marketClose}</td>
      </tr>
      <tr>
        <td>Timezone</td>
        <td>{stock.timezone}</td>
      </tr>
      <tr>
        <td>Currency</td>
        <td>{stock.timezone}</td>
      </tr>
    </table>
  );
};

export { StockDetail };
