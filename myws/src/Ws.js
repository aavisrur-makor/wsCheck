import React, { useEffect, useState } from 'react'
import Table1 from './table1'
import Table2 from './table2'
import Table3 from './table3'
import Table4 from './table4'
import Table5 from './table5'
import Table6 from './table6'
import Table7 from './table7'
import { OpenWebSockets, wsArr } from './webSockets'
function Ws() {
	const [isLoaded, setLoaded] = useState(false)
	useEffect(() => {
		OpenWebSockets(setLoaded)
	}, [])
	return (
		<>
			{isLoaded && (
				<>
					<Table1 />
					<Table2 />
					<Table3 />
					<Table4 />
					<Table5 />
					<Table6 />
					<Table7 />
				</>
			)}
		</>
	)
}

export default Ws
