import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import TableBody from '@mui/material/TableBody'
import { useSortableTable } from './useSortableTable'
import DashBoardTableHead from './DashboardTableHead/DashBoardTableHead'
import DashboardTableBody from './DashboardTableBody/DashboardTableBody'
import EmptyBox from '../../assets/images/empty.svg'

import style from './DashboardTable.module.scss'

const data = [
  {
    id: 1,
    investment: 'The Align',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: 100,
    tokens: '10',
  },
  {
    id: 2,
    investment: 'samuel Mollitt',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: 60,
    tokens: null,
  },
  {
    id: 3,
    investment: 'Ole Rogge',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: 50,
    tokens: '10',
  },
  {
    id: 4,
    investment: 'Elwin Huyge',
    city: 'Tacama, Washington',
    value: null,
    invested: '12,000',
    distributions: 34,
    tokens: '10',
  },
  {
    id: 5,
    investment: 'Anthe Maybery',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: 31,
    tokens: '10',
  },
  {
    id: 6,
    investment: 'Arny Amerighi',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: 35,
    tokens: '10',
  },
  {
    id: 7,
    investment: 'Lynnell Shimmans',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: null,
    tokens: '10',
  },
  {
    id: 8,
    investment: 'Pierre Klug',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: 36,
    tokens: '10',
  },
  {
    id: 9,
    investment: 'Melantha Jakeway',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: '12,000',
    distributions: 48,
    tokens: '10',
  },
  {
    id: 10,
    investment: 'Jodi Nickless',
    city: 'Tacama, Washington',
    value: '10,000',
    invested: 'Male',
    distributions: 36,
    tokens: '10',
  },
]

const investmentColumns = [
  { label: 'Investment', accessor: 'investment', sortable: true },
  { label: 'Value', accessor: 'value', sortable: true },
  { label: 'Invested', accessor: 'invested', sortable: true },
  { label: 'Distributions', accessor: 'distributions', sortable: true },
  { label: 'Tokens', accessor: 'tokens', sortable: true },
]

const pledgeColumns = [
  { label: 'Investment', accessor: 'investment', sortable: true },
  { label: 'Value', accessor: 'value', sortable: true },
  { label: 'Pledge Date', accessor: 'pledgeDate', sortable: true },
  { label: 'Funded', accessor: 'funded', sortable: true },
  { label: 'Target Close', accessor: 'targetClose', sortable: true },
]

export default function StickyHeadTable({ tableSelected }) {
  const tableHeading = tableSelected
  const [tableColumns, setTableColumn] = useState(investmentColumns)
  const [tableData, handleSorting] = useSortableTable(data, investmentColumns)

  useEffect(() => {
    setTableColumn(() => {
      return tableSelected === 'Your Investments'
        ? investmentColumns
        : pledgeColumns
    })
  }, [tableHeading])

  const displayTableData = () => {
    return (
      <>
        <DashboardTableBody
          columns={[...tableColumns, '']}
          tableData={tableData}
        />
        <TableFooter className={style.tableFooter}>
          <TableRow>
            <TableCell className={style.tableCell}>Total</TableCell>
            <TableCell className={style.tableCell}>$15,000</TableCell>
            <TableCell className={style.tableCell}>$15,000</TableCell>
            <TableCell className={style.tableCell}>$15,000</TableCell>
            <TableCell className={style.tableCell}>-</TableCell>
            <TableCell className={style.tableCell}></TableCell>
          </TableRow>
        </TableFooter>
      </>
    )
  }

  const displayEmptyTable = () => {
    return (
      <TableBody>
        <div className={style.emptyTableContainer}>
          <img src={EmptyBox} alt='logo' />
          No Investments yet
        </div>
      </TableBody>
    )
  }

  return (
    <Paper className={style.container}>
      <TableContainer className={style.tableHeight}>
        <Table stickyHeader aria-label='sticky table'>
          <DashBoardTableHead
            columns={[...tableColumns, '']}
            handleSorting={handleSorting}
          />
          {tableData?.length > 0 ? displayTableData() : displayEmptyTable()}
        </Table>
      </TableContainer>
    </Paper>
  )
}
