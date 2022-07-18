import { TableContainer, Button, TableHead, TableRow, TableBody, TableCell, Table, Paper } from '@mui/material'
import { tab } from '@testing-library/user-event/dist/tab'
import React, { useState, useEffect } from 'react'
import { wsArr } from './webSockets'
function Table7() {
	const currencies = ['AAVE-USD', 'COMP-USD', 'DOT-USD', 'SUSHI-USD', 'UNI-USD', 'XLM-USD', 'XTZ-USD', 'ETH-USD']
	const quantity = '100.00000000'
	const [open, setOpen] = useState(false)
	const [data, setData] = useState(null)
	useEffect(() => {
		wsArr[6].onmessage = (message) => {
			setData(JSON.parse(message.data))
			console.log(JSON.parse(message.data))
		}
	}, [])
	return (
		<>
			<Button onClick={() => setOpen((prev) => !prev)}>Open table7</Button>
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
												{currencies.includes(product) && data.prices.prices_by_provider.talos[product][quantity]?.bid && data.prices.prices_by_provider.talos[product][quantity]?.bid.price}
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

export default Table7
