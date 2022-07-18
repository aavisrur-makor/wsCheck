import { TableContainer, Button, TableHead, TableRow, TableBody, TableCell, Table, Paper } from '@mui/material'
import { tab } from '@testing-library/user-event/dist/tab'
import React, { useState, useEffect } from 'react'
import { wsArr } from './webSockets'
function Table1() {
	const currencies = ['BAT_USD', 'BCH-USD', 'BTC-EUR', 'CRV-USD', 'DOT-USD', 'ENJ-USD', 'EOS-USD', 'ETH-USD', 'YFI-USD']
	const quantity = '1.00000000'
	const [open, setOpen] = useState(false)
	const [data, setData] = useState(null)
	useEffect(() => {
		wsArr[0].onmessage = (message) => {
			setData(JSON.parse(message.data))
			console.log(JSON.parse(message.data))
		}
	}, [])
	return (
		<>
			<Button onClick={() => setOpen((prev) => !prev)}>Open table1</Button>
			{open && data ? (
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Type</TableCell>
								{data?.products.map((product) => {
									return <TableCell>{currencies.includes(product) && product}</TableCell>
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>Ask</TableCell>
								{data?.products.map((product) => {
									return (
										<>
											<TableCell>
												{currencies.includes(product) && data.prices.prices_by_provider.talos[product][quantity]?.ask && data.prices.prices_by_provider.talos[product][quantity]?.ask.price}
											</TableCell>{' '}
										</>
									)
								})}
							</TableRow>
							<TableRow>
								<TableCell>Bid</TableCell>
								{data?.products.map((product) => {
									return (
										<>
											<TableCell>
												{currencies.includes(product) && data.prices.prices_by_provider.talos[product][quantity]?.ask && data.prices.prices_by_provider.talos[product][quantity]?.bid.price}
											</TableCell>{' '}
										</>
									)
								})}
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			) : null}
		</>
	)
}

export default Table1
